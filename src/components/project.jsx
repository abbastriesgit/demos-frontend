import {Button} from "react-bootstrap";
import colors from "../constants/colors";
import {useEffect, useState} from "react";

function Project({title,description,links,skills,embed,isMobile}){
    const getRow = ()=>{
        return window.innerWidth >= 1300;
    }
    const getVideoWidth = ()=>{
        if(row){
            return window.innerWidth*0.3;
        }
        return window.innerWidth*0.8;
    }
    const [row,setRow] = useState(getRow());
    const [width,setWidth] = useState(getVideoWidth);
    useEffect(
        ()=>window.addEventListener('resize', handleWindowSizeChange),
        [])
    const handleWindowSizeChange=()=>{
       setRow(getRow);
       setWidth(getVideoWidth)
    }
    if(!row){
        return(
            <div style={{display:"flex",flexDirection:"column",textAlign:"left",margin:"auto",marginBottom:"30px",border:"2px solid "+colors.ttt.bg_light}}>
                <div style={{display:"flex",width:"90%",minWidth:"200px",textAlign:"center",padding:"3px",flexDirection:"column" ,marginLeft:"auto",marginRight:"auto"}}>
                    <h5>{title}</h5>
                    <h6>{skills}</h6>
                    <p style={{marginBottom:"10px"}}>{description}</p>
                    <div style={{flex:1}}></div>
                    <div style={{display:"flex",flexWrap:"wrap" ,textAlign:"center",margin:"10px"}}>
                        <div style={{flex:1}}></div>
                        {links.map(link=>{
                            return <Button  onClick={()=>window.open(link.url,"_blank")} style={{margin:"10px",backgroundColor:colors.ttt.bg_light,color:"black",border:"none"}}> {link.name} </Button>;
                        })}
                        <div style={{flex:1}}></div>
                    </div>
                </div>
                <div style={{margin:"auto"}}>
                <iframe margin={"auto"} width={width} height={width*9/16}  src={embed}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                </div>
            </div>
        );
    }
    return(
        <div style={{display:"flex",flexDirection:"row",textAlign:"left",margin:"auto",marginBottom:"30px",border:"2px solid "+colors.ttt.bg_light}}>
            <div style={{flex:1}}></div>
            <div style={{display:"flex",width:"20%",minWidth:"200px",textAlign:"left",padding:"3px",flexDirection:"column" ,marginLeft:"auto",marginRight:"10px"}}>
                <h5>{title}</h5>
                <h6>{skills}</h6>
                <p style={{marginBottom:"10px"}}>{description}</p>
                <div style={{flex:1}}></div>
                <div style={{display:"flex",flexWrap:"wrap" ,margin:"10px"}}>
                    {links.map(link=>{
                        return <Button  onClick={()=>window.open(link.url,"_blank")} style={{margin:"10px",backgroundColor:colors.ttt.bg_light,color:"black",border:"none"}}> {link.name} </Button>;
                    })}
                </div>
            </div>
            <div style={{flex:1}}></div>
            <iframe width={width} height={width*9/16}  src={embed}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <div style={{flex:1}}></div>
        </div>
    );
}
export default Project;