import linkedIn from "../images/linkedin_logo_icon.jpeg";
import github from "../images/github.png";
import bitmoji from "../images/bitmoji.png";
import IsMobile from "../logic/isMobile";
import {useEffect, useState} from "react";
import urls from "../constants/urls";
import colors from "../constants/colors";
import connect from "../images/connect.png";
import { useSpring, animated ,config} from 'react-spring'
function AboutMe(){
   const style1 = {
       maxWidth:"800px",
       minHeight:"80vh",width:"75%",display:"flex",
       flexDirection:"column",textAlign :"left",
       verticalAlign:"top",margin:"auto",
       marginTop:"50px",padding:"auto",

   };
   const style2 = {
       textAlign:"left",
       borderBottom:"1px solid green",
       borderTop:"1px solid green",
       borderColor:colors.ttt.bg_light,
       padding:"10px",
       borderRadius:"20px",
       margin:"10px",
       backgroundColor:colors.ttt.bg_light
   };
    const getImageW = () =>{
        return window.innerWidth * 0.1;
    }
    const propRight =  useSpring({
        to: { opacity: 1, transform: 'translateX(0px) ' },
        from: { opacity: 0, transform: 'translateX(-250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const propLeft =  useSpring({
        to: { opacity: 1, transform: 'translateX(0px) ' },
        from: { opacity: 0, transform: 'translateX(250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const [isMobile,setIsMobile]  = useState(IsMobile());
    const [imgW,setImgW] = useState(getImageW);
    useEffect(
        ()=>window.addEventListener('resize', handleWindowSizeChange),
        [])
    const handleWindowSizeChange=()=>{
        setIsMobile(IsMobile);
        setImgW(getImageW)
    }
    const getWelcomeMessage=()=>{
        if(isMobile){
            return(
                <div style={{display:"flex",alignItems:"baseline",marginBottom:"10px"}}>
                    <div style={{flex:1}}></div>
                    <animated.h3 style={propLeft}>Hi, I am Abbas Ali.</animated.h3>
                    <animated.img  style={propRight} src={bitmoji} width={imgW}/>
                    <div style={{flex:1}}></div>
                </div>
            );
        }
        return(
            <div style={{display:"flex",alignItems:"baseline",marginBottom:"10px"}}>
                <div style={{flex:1}}></div>
                <animated.h3 style={propLeft}>Hi, I am Abbas Ali.</animated.h3>
                <animated.img  style={propRight} src={bitmoji} width={imgW}/>
            </div>
        );
    }
    // if(isMobile){
    //     return <h1>IsMObile</h1>
    // }
    return(
        <div style={style1}>
            {getWelcomeMessage()}
            <div style={style2}>
                <animated.div style={propRight}>
                    I am a 2020 Computer Science graduate from one of the Top ranked universities  in India ,<a style={{color:"black"}} href={"https://www.bits-pilani.ac.in/"} target={"_blank"}> BITS Pilani </a>.
                    I am currently working as a Software Engineer at Media.net.
                    I enjoy solving algorithmic problems and designing scalable and robust microservices.
                </animated.div>
            </div>

            <div style={style2}>
                <animated.h6 style={propLeft}>Languages</animated.h6>
                <animated.div style={{marginBottom:"15px",...propRight}}>Java , C/C++ , Python </animated.div>
                <animated.h6 style={propLeft}>Frameworks</animated.h6>
                <animated.div style={{marginBottom:"15px",...propRight}}>Spring Boot</animated.div>
                <animated.h6 style={propLeft}>Courses</animated.h6>
                <animated.div style={{marginBottom:"15px",...propRight}}>DSA, OOP, Computer Networks, Database Systems, ML </animated.div>
                <animated.h6 style={propLeft}>Skills</animated.h6>
                <animated.div style={{marginBottom:"15px",...propRight}}>REST APIs , Swagger , Docker, MySQL, NoSQL</animated.div>
            </div>
            <div style={{display:"flex",flexWrap:"wrap" ,margin:"10px"}}>
                <animated.a href={urls.linkedIn} style={{margin:"10px",...propRight}} target={"_blank"}><img src = {linkedIn}  width={ Math.min(imgW,100)} /></animated.a>
                <animated.a href={urls.github} style={{margin:"10px",...propLeft}} target={"_blank"}><img src = {github} width={ Math.min(imgW,100)} /></animated.a>
            </div>
            {/*<div style={{display:"flex" }}>*/}
            {/*    <div style={{flex:1}}></div>*/}
            {/*    <h1>*/}
            {/*        hey, lets talk*/}
            {/*        <img src={connect} style={{rotate:"180deg"}} width={"300px"}/>*/}
            {/*    </h1>*/}
            {/*</div>*/}
            {/*<div style={{display:"flex",flexDirection:"column"}}>*/}
            {/*    <Card.Title>*/}
            {/*        Skills*/}
            {/*    </Card.Title>*/}
            {/*    <div>*/}
            {/*        /!*<div style={{ marginLeft:"10px",marginRight:"10px"}} >*!/*/}
            {/*        /!*    <img alt={"Docker"} height={height} width={width} src={docker}/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<div style={{ marginLeft:"10px",marginRight:"10px"}} >*!/*/}
            {/*        /!*    <img  alt={"Java"} height={height} width={width}  src={java}/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<div style={{ marginLeft:"10px",marginRight:"10px"}} >*!/*/}
            {/*        /!*    <img  alt={"MySql"} height={height} width={width}  src={mysql}/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<div style={{ marginLeft:"10px",marginRight:"10px"}} >*!/*/}
            {/*        /!*    <img alt={"Kafka"} height={height} width={width}  src={kafka}/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<div style={{ marginLeft:"10px",marginRight:"10px"}}  >*!/*/}
            {/*        /!*    <img alt={"Spring Boot"} height={height} width={width}  src={spring}/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
export default AboutMe;