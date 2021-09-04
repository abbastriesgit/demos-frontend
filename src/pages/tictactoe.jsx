import {useEffect, useState} from "react";
import Cups from "../components/ttt/cups";
import TtRow from "../components/ttt/ttRow";
import TicTacTowLogic from "../logic/ticTacToeLogic";
import colors from "../constants/colors";
import {Button,Dropdown} from "react-bootstrap";
import urls from "../constants/urls";
import TictactoeTut from "./tictactoeTut";
function Tictactoe(){
    const {state,setState, handleSubmit,
        handleClickOnCups,getRow,
        create,isPending,getStateFromResponse,refresh,restart,tut,setTut,setAndSaveAlgo
    } = TicTacTowLogic();
    useEffect(()=>{
        if(localStorage.getItem("ttt_game_state"))
            setState(JSON.parse(localStorage.getItem("ttt_game_state")));
        if(localStorage.getItem("ttt_game_tut"))
            setTut(false);
        else
            setTut(true);
        if(localStorage.getItem("ttt_algo"))
            setAndSaveAlgo(localStorage.getItem("ttt_algo"));
    },[setState]);
    const renderCreateGameButton = () =>{
        if(isPending && !state.created){
            return <Button style={{backgroundColor: colors.ttt.theirCard,color:"black",margin:"2rem"}} >Loading...</Button>
        }
        if(!isPending && !state.created){
            return (
                <div style={{marginBottom:"10px"}}>
                    <Button style={{backgroundColor: colors.ttt.theirCard,color:"black",margin:"10px"}} onClick ={()=>{setAndSaveAlgo('PLAYER');create("PLAYER")}} >Play with friends</Button>
                    <Button style={{backgroundColor: colors.ttt.theirCard,color:"black",margin:"10px"}} onClick ={()=>{setAndSaveAlgo('MIN_MAX');create("MIN_MAX")}} >Play with AI (Min-Max algorithm)</Button>
                </div>
            )
        }
        return null;
    }
    const renderRefresh = () =>{
        if(isPending && state.created){
            return <Button style={{backgroundColor: colors.ttt.myCard,color:"black",margin:"10px"}} >Loading...</Button>
        }
        if(!isPending && state.created){
            return <Button style={{backgroundColor: colors.ttt.myCard,color:"black",margin:"10px"}} onClick ={()=>refresh()} >Refresh</Button>        }
        return null;
    }
    const renderUrl = () =>{
        if(state.created && !state.gameStarted) {
            let link = urls.ttt.f.base + urls.ttt.f.join + "/" + state.gameId;
            return <div style={{
                display:"flex",
                flexDirection:"column",
                backgroundColor:colors.ttt.theirCard,
                border:"2px solid grey",
                padding:"10px",
                borderRadius:"5px"
            }}>
                <div style={{backgroundColor:"white",padding:"5px"}}>{link}</div>
                <div>Share this link with your friends or Open in Incognito</div>
            </div>
        }
    }
    const renderWaitForTurnMessage= ()=>{
        if(state.gameStarted && !state.gameFinished){
            let text = "Wait for your turn"
            if(state.yourTurn)
            {
                text = "Your turn. Make your move."
            }
            return <div style={{
                backgroundColor:colors.ttt.theirCard,
                border:"2px solid grey",
                padding:"10px",
                borderRadius:"5px",
                marginBottom:"10px"
            }}>
                {text}
            </div>
        }
    }
    const renderWinMessage= ()=>{
        if(state.gameFinished){
            let text = "You Win"
            let border = "5px solid green";
            let color = "green";
            if(!state.iwon)
            {
                text = "You Lose";
                border = "5px solid red";
                color = "red";
            }
            return <div style={{
                display:"flex",
                flexDirection:"column",
                backgroundColor:colors.ttt.theirCard,
                border:border,
                color:color,
                margin:'30px',
                transform:"matrix(2,0,0,2,0,0)",
                // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
                padding:"10px",
                borderRadius:"5px"
            }}>
                <div>{text}</div>
            </div>
        }
    }
    const renderMenu=()=>{
        return (
            <Dropdown style={{margin:"auto"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={restart} >restart the game</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setAndSaveAlgo("PLAYER");create("PLAYER")}}>create new game</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setAndSaveAlgo("MIN_MAX");create("MIN_MAX")}}>create new game with AI</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{localStorage.removeItem("ttt_game_tut");setTut(true)}}>Tutorial</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    if(tut){
        return <TictactoeTut setTut={setTut}/>
    }
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"row",textAlign:"center",margin:"auto"}}>
                {renderMenu()}
            </div>
            <div style={{display:"flex",margin:"auto",height:"100%",flexDirection:"column",alignItems:"center"}}>
                {renderCreateGameButton()}
                {renderUrl()}
                {renderRefresh()}
                {renderWinMessage()}
                {renderWaitForTurnMessage()}
                <Cups states={state.myCards} onClick = {handleClickOnCups}/>
                <TtRow states={getRow(0)}  onClick = {handleSubmit}/>
                <TtRow states={getRow(1)} onClick = {handleSubmit}/>
                <TtRow states={getRow(2)}  onClick = {handleSubmit}/>
                <Cups states={state.otherPlayersCards} onClick = {(id)=>{}}/>
                <div style={{margin:"50px"}}></div>
            </div>
        </div>
    );
}
export default Tictactoe;