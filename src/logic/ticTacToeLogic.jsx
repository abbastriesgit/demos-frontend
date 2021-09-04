import {useState} from "react";
import colors from "../constants/colors.jsx";
import TttJsonFields from "../constants/tttJsonFields";
import TicTacTowApiCalls from "../api_calls/ticTacToeApiCalls";
function TicTacTowLogic(){
    let [isPending,setIsPending] = useState(false);
    const [tut,setTut] = useState(true);
    const [algo,setAlgo] = useState("PLAYER");
    const getStateFromResponse = (res) =>{
        let newBoxes = res[TttJsonFields.boxStateList];
        for(let i = 0;i<9;i++){
            newBoxes[i]["index"] = i;
            newBoxes[i]["key"] = i+9;
            newBoxes[i]["color"] = getColor(newBoxes[i])
        }
        let cards = res[TttJsonFields.myCards];
        for(let i = 0;i<6;i++){
            cards[i]["index"] = i;
            cards[i]["key"] = i;
            cards[i]["color"] = colors.ttt.myCard
            cards[i]["selected"] = false
        }
        cards = res[TttJsonFields.otherPlayersCards];
        for(let i = 0;i<6;i++){
            cards[i]["index"] = i;
            cards[i]["key"] = i+6;
            cards[i]["color"] = colors.ttt.theirCard
            cards[i]["selected"] = false
        }
        res["created"] = true;
        localStorage.setItem("ttt_game_state",JSON.stringify(res))
        setState(res);
    }
    let [state ,setState] = useState({
        "gameId": "",
        "boxStateList": [
            {
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 0,
                "key":0,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 1,
                "key":1,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 2,
                "key":2,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 3,
                "key":3,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 4,
                "key":4,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 5,
                "key":5,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 6,
                "key":6,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 7,
                "key":7,
                "color":colors.ttt.emptyCard
            },{
                "size": 0,
                "player": -1,
                "isEmpty": true,
                "index": 8,
                "key":8,
                "color":colors.ttt.emptyCard
            }
        ],
        "myCards": [
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.myCard,
                "key":"0"
            },
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 1,
                "color": colors.ttt.myCard,
                "key":"1"
            },{
                "size": 2,
                "left": true,
                "selected":false,
                "index": 2,
                "color": colors.ttt.myCard,
                "key":"2"
            },{
                "size": 2,
                "left": true,
                "selected":false,
                "index": 3,
                "color": colors.ttt.myCard,
                "key":"3"
            },{
                "size": 3,
                "left": true,
                "selected":false,
                "index": 4,
                "color": colors.ttt.myCard,
                "key":"4"
            },{
                "size": 3,
                "left": true,
                "selected":false,
                "index": 5,
                "color": colors.ttt.myCard,
                "key":"5"
            }
        ],
        "otherPlayersCards": [
            {
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"0"
            },
            {
                "size": 1,
                "isLeft": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"1"
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"2"
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"3"
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"4"
            },{
                "size": 1,
                "left": true,
                "selected":false,
                "index": 0,
                "color": colors.ttt.theirCard,
                "key":"5"
            }
        ],
        "gameStarted": false,
        "created": false,
        "gameFinished": false,
        "player": 1,
        "yourTurn": false,
        "iwon": false
    });
    let {create,refresh,submit,restart} = TicTacTowApiCalls(setIsPending,getStateFromResponse,state,algo);

    const setAndSaveAlgo = (a)=>{
        localStorage.setItem("ttt_algo",a);
        setAlgo(a);
    }
    const handleSubmit = (id)=>{
        if(isPending)
            return;
        let selectedCard = getSelectedCardSize()
        if(selectedCard === -1)
            return;
        submit(id,selectedCard)
        //todo
    }
    const handleClickOnCups = (id)=>{
        if(isPending)
            return;
        const newState = JSON.parse(JSON.stringify(state));
        for(let i=0;i<state.myCards.length;i++)
            newState.myCards[i]["selected"]= false;
        newState.myCards[id]["selected"]= true;
        setState(newState)
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
            return colors.ttt.emptyCard;
        if(box.player===state.player){
            return colors.ttt.myCard;
        }
        return colors.ttt.theirCard;
    }

    return {state,setState, handleSubmit,
        handleClickOnCups,getRow,create,
        isPending,getStateFromResponse,refresh,restart,tut,setTut,setAndSaveAlgo
    };
}
export default TicTacTowLogic;