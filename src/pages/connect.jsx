import linkedin from '../images/linkedin_logo_icon.jpeg';
import github from '../images/github.png';
import connect from '../images/connect.png';
import gmail from '../images/gmail.png';
import urls from '../constants/urls'
import {useEffect, useState} from "react";
import {useSpring,animated} from "react-spring";
function Connect(){
    const propRight =  useSpring({
        to: { opacity: 1, transform: 'translateX(0px) ' },
        from: { opacity: 0, transform: 'translateX(-250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const propUp =  useSpring({
        to: { opacity: 1, transform: 'translateY(0px) ' },
        from: { opacity: 0, transform: 'translateY(-250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const propDown =  useSpring({
        to: { opacity: 1, transform: 'translateY(0px) ' },
        from: { opacity: 0, transform: 'translateY(250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const propLeft =  useSpring({
        to: { opacity: 1, transform: 'translateX(0px) ' },
        from: { opacity: 0, transform: 'translateX(250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const s = {display:"flex",flexDirection:"column"}
    const s2 ={margin:"10px"}
    const getImageW = () =>{
        return window.innerWidth * 0.1;
    }
    const [imgW, setImgW] = useState(getImageW);
    useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange);
    },[])
    const handleWindowSizeChange = () => {
        setImgW(getImageW);
    };
    return (
        <div style={s}>
            <animated.div style={{display:"flex",...propUp }}>
                <div style={{flex:1}}></div>
                <h1>
                    Hey, lets talk
                    <img src={connect} width={imgW*1.8}/>
                </h1>
                <div style={{flex:1}}></div>
            </animated.div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <animated.div style={{...s2,...propRight}}>
                    <a href={urls.linkedIn} target={"_blank"}><img src = {linkedin}  width={imgW} /></a>
                    <h1> LinkedIn</h1>
                </animated.div>
                <animated.div style={{...s2,...propDown}}>
                    <a href={urls.github} target={"_blank"}><img src = {github}  width={imgW} /></a>
                    <h1> Github</h1>
                </animated.div>
                <animated.div style={{...s2,...propLeft}}>
                    <a href={urls.email} target={"_blank"}><img src = {gmail}  width={imgW} /></a>
                    <h1> Gmail</h1>
                </animated.div>
            </div>
        </div>
    );
}export default Connect;