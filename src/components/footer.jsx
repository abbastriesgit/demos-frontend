import linkedIn from "../images/linkedin_logo_icon.jpeg";
import github from "../images/github.png";
import {Container, Navbar} from "react-bootstrap";
function Footer(){
    return (
        // <div style={{width : '100%',backgroundColor:'#212529',color:'#fff',padding:"10px",marginTop:"auto"}}>
        //     <a style={{ margin:"10px"}} href={"https://www.linkedin.com/in/abbas-ali-58931a1ab/"} target = "_blank">
        //         <img  width="100px"  src={linkedIn}/>
        //     </a>
        //     <a href={"https://github.com/abbastriesgit"} target = "_blank">
        //         <img  width="100px"  src={github}/>
        //     </a>
        // </div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed={"bottom"}>
            <Container style={{display:'flex',alignItems:"flex-end",justifyContent:"flex-end"}}>
                    <a style={{ marginLeft:"10px",marginRight:"10px"}} href={"https://www.linkedin.com/in/abbas-ali-58931a1ab/"} target = "_blank" rel="noreferrer">
                        <img  height="30px" alt={"LinkedIn"}  src={linkedIn}/>
                    </a>
                    <a href={"https://github.com/abbastriesgit"} target = "_blank" rel="noreferrer">
                        <img height="30px" alt={"Github"} src={github}/>
                    </a>
            </Container>
        </Navbar>
    );
}
export default Footer;