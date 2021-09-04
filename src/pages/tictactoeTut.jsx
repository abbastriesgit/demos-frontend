import {useState} from "react";
import {Button} from "react-bootstrap";
import img1 from "../images/tttTut/Tut1.png"
import img2 from "../images/tttTut/Tut2.png"
import img3 from "../images/tttTut/Tut3.png"
import img4 from "../images/tttTut/Tut4.png"
import colors from "../constants/colors";
function TictactoeTut({setTut}){
    const [index,setIndex] = useState(0);
    let lastIndex = 3;
    let images = [img1,img2,img3,img4]
    const closeTut=()=>{
        localStorage.setItem("ttt_game_tut","false");
        setTut(false)
    }
    const startTut=()=>{
        localStorage.removeItem("ttt_game_tut")
        setTut(true)
    }
    const next=(i)=>{
        if(index+i < 0 )
            return;
        if(index+i > lastIndex)
            closeTut();
        setIndex(index+i);
    }
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{margin:"10px"}}>
                <h3 >Welcome to the Tutorial</h3>
                <div style={{display:"flex"}}>
                    {index>0 &&  <Button style={{backgroundColor:colors.ttt.myCard,width:"100px",color:"black",margin:"5px"}} onClick={()=>next(-1)}> prev </Button>}
                    {index===0 &&  <div style={{width:"100px",margin:"5px"}}> </div>}
                    <Button style={{backgroundColor:colors.ttt.myCard,width:"100px",color:"black",margin:"5px"}} onClick={closeTut}> finish </Button>
                    {index<lastIndex && <Button style={{backgroundColor:colors.ttt.myCard,width:"100px",color:"black",margin:"5px"}} onClick={()=>next(1)}> next </Button>}
                    {index===lastIndex &&  <div style={{width:"100px",margin:"5px"}}> </div>}
                </div>
            </div>
            <img width={"800px"} style={{opacity:0.8,border:"5px solid black",margin:"10px"}} src={images[index]}/>

        </div>
    );
}
export default TictactoeTut;