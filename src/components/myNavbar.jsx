import {Navbar, Container,Nav,NavDropdown} from "react-bootstrap";
import colors from "../constants/colors";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import IsMobile from "../logic/isMobile";
import urls from "../constants/urls";
import close from "../images/close.png"

function MyNavbar() {

    const getImageW = () =>{
        return window.innerWidth * 0.1;
    }
    const [isMobile,setIsMobile]  = useState(IsMobile());
    const [imgW,setImgW] = useState(getImageW);
    const [click,setClick] = useState(false);
    useEffect(
        ()=>window.addEventListener('resize', handleWindowSizeChange),
        [])
    const handleWindowSizeChange=()=>{
        setIsMobile(IsMobile);
        setImgW(getImageW)
    }
    const toggleClick= ()=>{
        setClick(!click);
    }

    const buttonStyle = {
        backgroundColor:"transparent",
        color:"black",
        fontSize:'15px',
        border:"none"
    };
    const navStyle = {
        height:"40px",
        marginTop:"40px",
        display:"flex",
        borderBottom:"2px solid " + colors.ttt.bg_light
    };
    const navStyleClick = {
        height:"150px",
        marginTop:"10px",
        display:"flex",
        borderBottom:"2px solid " + colors.ttt.bg_light
    };
    if(isMobile){
        if(click){
            return (
                <div style={navStyleClick}>
                    <div style={{flex:1}}></div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                        <Button style={buttonStyle} href={"/"}> <b>Home</b></Button>
                        <Button style={buttonStyle} href={"/experience"}> <b>Experience</b></Button>
                        <Button style={buttonStyle} href={"/demo/adv-tic-tac-toe"}> <b>Projects</b></Button>
                        <Button style={buttonStyle} href={"/connect"}> <b>Lets Connect</b></Button>
                    </div>
                    <div style={{flex:3}}></div>
                    <img src={close} style={{marginTop:"5px"}} width={"20px"} height={"20px"} onClick={toggleClick}/>
                    <div style={{flex:1}}></div>
                </div>
            );
        }
       return (
           <div style={{...navStyle,marginTop:"10px"}}>
               <div style={{flex:1}}></div>
               <Button style={buttonStyle} href={"/"}> <b>Home</b></Button>
               <div style={{flex:3}}></div>
               <img src="https://img.icons8.com/material-outlined/24/000000/menu--v4.png"  width={"20px"} height={"30px"} onClick={toggleClick}/>
               <div style={{flex:1}}></div>
           </div>);
    }
    return(
        <div style={navStyle}>
            <div style={{flex:1}}></div>
            <Button style={buttonStyle} href={"/"}> <b>Home</b></Button>
            <Button style={buttonStyle} href={"/experience"}> <b>Experience</b></Button>
            <Button style={buttonStyle} href={"/demo/adv-tic-tac-toe"}> <b>Projects</b></Button>
            <Button style={buttonStyle} href={"/connect"}> <b>Lets Connect</b></Button>
            <div style={{flex:2}}></div>
        </div>);
    // return (
    //     <Navbar bg="dark" expand="lg" variant="dark" fixed={"top"}>
    //         <Container>
    //             <Navbar.Brand href="/">Abbas Ali</Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="me-auto">
    //                     <Nav.Link href="/experience" >Experience</Nav.Link>
    //                     <NavDropdown title="Live Demos" id="basic-nav-dropdown">
    //                         {/*<NavDropdown.Item href="/demo/caption-contest">Caption Contest</NavDropdown.Item>*/}
    //                         <NavDropdown.Item href="/demo/adv-tic-tac-toe">Advanced Tic-Tac-Toe</NavDropdown.Item>
    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item >More coming soon...</NavDropdown.Item>
    //                         {/*<NavDropdown.Item href="/demo/habit-tracker">Habit Tracker</NavDropdown.Item>*/}
    //                         {/*<NavDropdown.Item href="/demo/topic-reviser">Topic Reviser </NavDropdown.Item>*/}
    //                         {/*<NavDropdown.Divider />*/}
    //                         {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
    //                     </NavDropdown>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // );
}
export default MyNavbar;