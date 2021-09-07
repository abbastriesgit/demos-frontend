import {useEffect} from "react";
import Cards from "./cards";
import TtRow from "./ttRow";
import TicTacTowLogic from "./logic/ticTacToeLogic";
import colors from "../constants/colors";
import {Button,Dropdown} from "react-bootstrap";
import urls from "../constants/urls";
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
                    <Button style={{backgroundColor: colors.ttt.theirCard,color:"black",margin:"10px"}} href={urls.ttt.tut} target={"_blank"} >Watch Tutorial</Button>
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
                color:"black",
                boxShadow:"white",
                borderRadius:"5px",
                padding:"4px",
                opacity:"0.8"
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
        if(!state.created)
            return null;
        return (
            <div>
            <Dropdown color={colors.ttt.theirCard} style={{margin:"auto"}}>
                <Dropdown.Toggle variant="success" style={{backgroundColor:colors.ttt.theirCard,color:"black"}} id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>
                <Dropdown.Menu style={{margin:"0",padding:"0"}}>
                    <Dropdown.Item className={"hovermenu"} style={{backgroundColor:colors.ttt.theirCard,border:"1px solid grey"}} onClick={restart} >Restart the game</Dropdown.Item>
                    <Dropdown.Item className={"hovermenu"} style={{backgroundColor:colors.ttt.theirCard,borderBottom:"1px solid grey"}} onClick={()=>{setAndSaveAlgo("PLAYER");create("PLAYER")}}>Create new game (without AI)</Dropdown.Item>
                    <Dropdown.Item className={"hovermenu"} style={{backgroundColor:colors.ttt.theirCard,borderBottom:"1px solid grey"}} onClick={()=>{setAndSaveAlgo("MIN_MAX");create("MIN_MAX")}}>Create new game (with AI)</Dropdown.Item>
                    {/*<Dropdown.Item style={{backgroundColor:colors.ttt.theirCard,borderBottom:"1px solid grey"}}  onClick={()=>{localStorage.removeItem("ttt_game_tut");setTut(true)}}>Watch a Tutorial</Dropdown.Item>*/}
                    <Dropdown.Item className={"hovermenu"} style={{backgroundColor:colors.ttt.theirCard,borderBottom:"1px solid grey"}}  onClick={()=>{window.open(urls.ttt.tut,"_blank")}}>Watch a Tutorial</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        );
    }
    // if(tut){
    //     return <TictactoeTut setTut={setTut}/>
    // }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"auto",marginTop:"100px",marginBottom:"100px"}}>
            <div style={{display:"flex",flexDirection:"row",textAlign:"center",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                {renderMenu()}
                {renderCreateGameButton()}
                {renderUrl()}
                {renderRefresh()}
                {renderWinMessage()}
                {renderWaitForTurnMessage()}
            </div>
            <div style={{display:"flex",margin:"auto",height:"100%",flexDirection:"column",alignItems:"center"}}>
                <div style={{display:"flex" ,flexDirection:"column" ,alignItems:"center"}}>
                <Cards states={state.myCards} border={{borderBottom:"2px dotted grey"}} onClick = {handleClickOnCups}/>
                <TtRow states={getRow(0)}  onClick = {handleSubmit}/>
                <TtRow states={getRow(1)} onClick = {handleSubmit}/>
                <TtRow states={getRow(2)}  onClick = {handleSubmit}/>
                <Cards states={state.otherPlayersCards} border={{borderTop:"2px dotted grey"}} onClick = {(id)=>{}}/>
                </div>
            </div>
        </div>
    );
}
export default Tictactoe;