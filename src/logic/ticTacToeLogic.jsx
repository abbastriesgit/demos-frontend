import {useState} from "react";
import colors from "../constants/colors";
import TttJsonFields from "../constants/tttJsonFields";
import TicTacTowApiCalls from "../api_calls/ticTacToeApiCalls";
function TicTacTowLogic(){
    let [isPending,setIsPending] = useState(false);
    const getStateFromResponse = (res) =>{
        let newBoxes = res[TttJsonFields.boxStateList];
        for(let i = 0;i<9;i++){
            newBoxes[i]["index"] = i;
        }
        let cards = res[TttJsonFields.myCards];
        for(let i = 0;i<6;i++){
            cards[i]["index"] = i;
            cards[i]["color"] = colors.myCard
            cards[i]["selected"] = false
        }
        cards = res[TttJsonFields.otherPlayersCards];
        for(let i = 0;i<6;i++){
            cards[i]["index"] = i;
            cards[i]["color"] = colors.theirCard
            cards[i]["selected"] = false
        }
        res["created"] = true;
        localStorage.setItem("ttt_game_state",JSON.stringify(res))
        setState(res);
    }
    let {create} = TicTacTowApiCalls(setIsPending,getStateFromResponse);
    let [state ,setState] = useState({
        "gameId": "",
        "boxStateList": [
            {
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0
            }
        ],
        "myCards": [
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.myCard
            },
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 1,
                "color": colors.myCard
            },{
                "size": 2,
                "left": true,
                "selected":false,
                "index": 2,
                "color": colors.myCard
            },{
                "size": 2,
                "left": true,
                "selected":false,
                "index": 3,
                "color": colors.myCard
            },{
                "size": 3,
                "left": true,
                "selected":false,
                "index": 4,
                "color": colors.myCard
            },{
                "size": 3,
                "left": true,
                "selected":false,
                "index": 5,
                "color": colors.myCard
            }
        ],
        "otherPlayersCards": [
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            },
            {
                "size": 1,
                "isLeft": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.theirCard
            }
        ],
        "gameStarted": false,
        "created": false,
        "gameFinished": false,
        "player": 1,
        "yourTurn": false,
        "iWon": false
    });
    const createGame= () =>{
        localStorage.clear();
        create();
    }
    const handleSubmit = (id)=>{
        if(isPending)
            return;
        console.log("submit"+id);
        let selectedCard = getSelectedCardSize()
        if(selectedCard === -1)
            return;

    }
    const handleClickOnCups = (id)=>{
        console.log("click"+id);
        if(isPending)
            return;
        const newState = JSON.parse(JSON.stringify(state));
        for(let i=0;i<state.myCards.length;i++)
            newState.myCards[i]["selected"]= false;
        newState.myCards[id]["selected"]= true;
        setState(newState)
        console.log(state)
    }
    const getRow = (index)=> {
        let row = state.boxStateList.slice(index*3,index*3 + 3)
        for (let i=0; i < row.length; i++) {
            row[i]["index"]= (index*3)+i;
        }
        return row;
    }

    const getSelectedCardSize = () => {
        for (let i=0; i < state.myCards.length; i++) {
            if(state.myCards[i]["selected"])
                return state.myCards[i]["size"];
        }
        return -1;
    }
    const getColor=(box)=>{
        if(box.empty)
            return colors.emptyCard;
        if(box.player[box.player.length-1]===state.player){
            return colors.myCard;
        }
        return colors.theirCard;
    }

    return {state,setState, handleSubmit,
        handleClickOnCups,getRow,getColor,create,isPending
    };
}
export default TicTacTowLogic;