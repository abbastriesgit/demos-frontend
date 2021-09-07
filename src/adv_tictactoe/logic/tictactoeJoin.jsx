import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import urls from "../../constants/urls";
import colors from "../../constants/colors";
import TicTacTowLogic from "./ticTacToeLogic";
function TictactoeJoin(){
    let par = useParams();
    let history = useHistory();
    let [text,setText] = useState("Joining ... ");
    let [color,setColor] = useState("black");
    console.log("dfdfdfv")
    const {state,setState, handleSubmit,
        handleClickOnCups,getRow,
        create,isPending,getStateFromResponse
    } = TicTacTowLogic();
    const getGameIDFromParams = ()=>{
        console.log(par)
        console.log(par.id)
        return par.id;
    }
    useEffect(()=>{
        let id = getGameIDFromParams();
        const url = urls.ttt.b.base + urls.ttt.b.join + "?gameId="+id;
        console.log(url)
        setColor("black")
        setText("Joining ... ");
        fetch(url,{
            method:'POST',
            headers : {'Content-Type':'application/json'}
        }).then((res)=>{
                if(res.ok){
                    res.json().then((data)=>{
                        getStateFromResponse(data)
                        history.push(urls.ttt.f.home);
                    });
                }
                else{
                    setColor("red")
                    setText("Error: make sure the link is correctly copied or ask your friend to create a new game.");
                }
            }
        ).catch((err)=>{
            setText("Joining failed retry error : " + err);
            console.log(err);
        })
    },[]);
    return (
        <div style={{margin:"10px",paddingLeft:"20px",display:"flex",backgroundColor:colors.ttt.theirCard,color:color}}>{text} </div>
    );
}
export default TictactoeJoin;