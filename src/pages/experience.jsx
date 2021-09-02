import {Card} from "react-bootstrap";


function Experience() {
    let height = "50rem";
    let width = "130rem";
    let first = "#1e6262";
    let sec = "#30353b";
    let thir = "#582233";
    let fourht = "#430d27";
    return(
        <div style={{width:"75%",display:"flex",flexDirection:"column",textAlign :"left",margin:"auto",marginTop:"2%"}}>
            <Card.Text as={"h3"}>
                Work Experience
            </Card.Text>
            <div style={{padding:"5px",display:"flex",alignItems:"flex-start",flexDirection:"row",flexWrap:"wrap"}}>
                <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"column",flexWrap:"wrap"}}>
                    <h5 style={{marginRight:"2rem",width:"20rem"}}>
                        Software Developer Engineer
                    </h5>
                    <h6 style={{marginRight:"5rem",marginBottom:"0",width:"20rem"}}>
                        Media.Net  <i>June 2020 - Present</i>
                    </h6>
                </div>
                <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"}}>
                    <p style={{marginRight:"3px",width:"35rem"}}>
                        <li>
                            Designed and developed various complex, robust, scalable  microservices
                        </li>
                        <li>
                            REST APIs serving millions of requests every day
                        </li>
                        <li>
                            A fast O(n) Regex Matching algorithm used to filter content in realtime<br/>
                        </li>
                        <li>
                            Kafka stream apps handling millions of messages every day
                        </li>

                    </p>
                    <div >
                        Spring Boot , Java , Mysql, Mssql, Nosql, Redis, Druid, Elastic Search<br/>
                        Docker, Maven , Git, Logstash , AmazonS3, Lombok, Swagger
                    </div>
                </div>
           </div>
            <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"}}>
                <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"column",flexWrap:"wrap"}}>
                    <h5 style={{marginRight:"2rem",width:"20rem"}}>
                        Software Engineering Intern
                    </h5>
                    <h6 style={{marginRight:"5rem",marginBottom:"0",width:"20rem"}}>
                        OLX Group  <i>Jan 2020 - June 2020</i>
                    </h6>
                </div>
                <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"}}>
                    <p style={{marginRight:"3px",width:"35rem"}}>
                        <li>
                            REST APIs to enable users to upload videos on their platform
                        </li>
                        <li>
                            Created a serverless video upload service using AmazonS3 PreSignedURLs
                        </li>

                    </p>
                    <div style={{width:"30rem",margin:"0"}}>
                        Spring Boot , Java , Mysql, Jdbc, Unit Testing,Maven , Git,  AmazonS3,<br/> Lombok, Server Less Upload
                    </div>
                </div>
            </div>
            <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"}}>
                <div style={{padding:"5px",display:"flex",alignItems:"baseline",flexDirection:"column",flexWrap:"wrap"}}>
                    <h5 style={{marginRight:"2rem",width:"20rem"}}>
                        Software Engineering Intern
                    </h5>
                    <h6 style={{marginRight:"5rem",marginBottom:"0",width:"20rem"}}>
                        Media.Net  <i>May 2019 - July 2019</i>
                    </h6>
                </div>
                <div style={{
                    padding:"5px",
                    display:"flex",
                    alignItems:"baseline",
                    flexDirection:"row",
                    flexWrap:"wrap"
                }}>
                    <p style={{marginRight:"3px",width:"35rem"}}>
                        <li>
                            Improved YARN’s resource allocation algorithm via Data analysis
                        </li>
                        <li>
                            The algorithm improved cluster utilization and app completion time
                        </li>
                        <li>
                            Project also helped in generating app-level reports
                        </li>
                    </p>
                    <div style={{margin:"auto"}}>
                        Python , Pandas, TimeSeries Analysis, YARN
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Experience;