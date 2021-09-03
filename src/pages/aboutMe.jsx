import {Card} from "react-bootstrap";
import docker from "../images/docker.png";
import java from "../images/java.png";
import kafka from "../images/Kafka.png";
import spring from "../images/Spring.png";
import mysql from "../images/Mysql.png";

function AboutMe(){
    let height = "40px";
    let width = "60px";
    return(
        <div style={{minHeight:"80vh",width:"75%",display:"flex",flexDirection:"column",textAlign :"left",verticalAlign:"top",margin:"auto",marginTop:"50px",padding:"auto"}}>
            <Card.Title  margin={"10px"}>Hello, </Card.Title>
            <Card.Text>
                I graduated with Computer Science major from one of the best and most competitive universities in India , BITS Pilani.
                <br/>I enjoy solving algorithmic problems and designing scalable and robust microservices.
            </Card.Text>
            <div style={{display:"flex",flexDirection:"column"}}>
                <Card.Title>
                    Skills
                </Card.Title>
                <div>
                    <span style={{ marginLeft:"10px",marginRight:"10px"}} >
                        <img alt={"Docker"} height={height} width={width} src={docker}/>
                    </span>
                    <span style={{ marginLeft:"10px",marginRight:"10px"}} >
                        <img  alt={"Java"} height={height} width={width}  src={java}/>
                    </span>
                    <span style={{ marginLeft:"10px",marginRight:"10px"}} >
                        <img  alt={"MySql"} height={height} width={width}  src={mysql}/>
                    </span>
                    <span style={{ marginLeft:"10px",marginRight:"10px"}} >
                        <img alt={"Kafka"} height={height} width={width}  src={kafka}/>
                    </span>
                    <span style={{ marginLeft:"10px",marginRight:"10px"}}  >
                        <img alt={"Spring Boot"} height={height} width={width}  src={spring}/>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;