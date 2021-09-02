import {useEffect} from "react";
import Cups from "../components/ttt/cups";
import TtRow from "../components/ttt/ttRow";
import TicTacTowLogic from "../logic/ticTacToeLogic";
import colors from "../constants/colors";
import {Button} from "react-bootstrap";
import urls from "../constants/urls";
function Tictactoe(){
    const {state,setState, handleSubmit,
        handleClickOnCups,getRow,
        getColor,create,isPending
    } = TicTacTowLogic();
    useEffect(()=>{
        if(localStorage.getItem("ttt_game_state"))
            setState(JSON.parse(localStorage.getItem("ttt_game_state")));
        },[]);
    const renderButton = () =>{
        if(isPending && !state.created){
            return <Button style={{backgroundColor: colors.theirCard,color:"black",margin:"2rem"}} >Loading...</Button>
        }
        if(!isPending && !state.created){
            return <Button style={{backgroundColor: colors.theirCard,color:"black",margin:"2rem"}} onClick ={()=>create()} >Create New Game</Button>        }
        return null;
    }
    const renderUrl = () =>{
        if(state.created && !state.gameStarted) {
            let link = urls.base_frontend + urls.ttt_join_game_fr + "?id=" + state.gameId;
            return <div>
                <div>{link}</div>
                <br/>
                <div>Share this link with your friends or Open in Incognito</div>
            </div>
        }
    }
    return(
        <div style={{display:"flex",margin:"auto",height:"80vh",flexDirection:"column",alignItems:"center"}}>
            {renderButton()}
            {renderUrl()}
            <Cups states={state.myCards} onClick = {handleClickOnCups}/>
            <TtRow states={getRow(0)} getColor={getColor} onClick = {handleSubmit}/>
            <TtRow states={getRow(1)} getColor={getColor} onClick = {handleSubmit}/>
            <TtRow states={getRow(2)} getColor={getColor} onClick = {handleSubmit}/>
            <Cups states={state.otherPlayersCards} onClick = {(id)=>{}}/>
        </div>
    );
}
export default Tictactoe;