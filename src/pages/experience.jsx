import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";


function Experience() {
    const getFlex=()=>{
        if(window.innerWidth<1200){
            return "column";
        }
        else
            return "row";
    }
    const [flex,setFlex] = useState(getFlex())
    useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange);
    },[])
    const handleWindowSizeChange = () => {
       setFlex(getFlex())
    };

    const data = [
        {
            "title": "Software Developer Engineer",
            "company": "Media.net",
            "date": "June 2020 -- Present",
            "details": [

                    "Designed and developed various complex, robust, scalable  microservices",
                    "REST APIs serving millions of requests every day",
                    "A fast O(n) Regex Matching algorithm used to filter content in realtime",
                    "Kafka stream apps handling millions of messages every day",
                    "Spring Boot , Java , Mysql, Mssql, Nosql, Redis, Druid, Elastic Search Docker, Maven , Git, Logstash , AmazonS3, Lombok, Swagger"
            ]
        },
        {
            "title": "Software Engineering Intern",
            "company": "OLX Group",
            "date": "Jan 2020 - June 2020",
            "details": [

                "REST APIs to enable users to upload videos on their platform",
                "Created a serverless video upload service using AmazonS3 PreSignedURLs",
                "Spring Boot , Java , Mysql, Jdbc, Unit Testing,Maven , Git,  AmazonS3, Lombok, Server Less Upload"
            ]
        },
        {
            "title": "Software Engineering Intern",
            "company": "Media.net",
            "date": "May 2019 - July 2019",
            "details": [
                    "Improved YARN’s resource allocation algorithm via Data analysis",
                    "The algorithm improved cluster utilization and app completion time",
                    "Project also helped in generating app-level reports",
                    "Python , Pandas, TimeSeries Analysis, YARN"
                ]
            }
        ];

    return(
        <div style={{width:"75%",display:"flex",flexDirection:"column",textAlign :"center",margin:"auto",marginTop:"2%"}}>
            <Card.Text as={"h3"} style = {{marginBottom:"50px"}}>
                Work Experience
            </Card.Text>
            { data.map(d=>{
                return(
                    <div style={{padding:"5px",display:"flex",alignItems:"flex-start",flexDirection:flex}}>
                        <div style={{padding:"5px",display:"flex",alignItems:"baseline",textAlign:"left",flexDirection:"column",flexWrap:"wrap"}}>
                            <h5 style={{marginRight:"2rem",width:"20rem"}}>
                                {d["title"]}
                            </h5>
                            <h6 style={{marginRight:"5rem",marginBottom:"0",width:"20rem"}}>
                                {d["company"]} <i>{d["date"]}</i>
                            </h6>
                        </div>
                        <div style={{padding:"5px",display:"flex",alignItems:"baseline",textAlign:"left",flexDirection:"row",flexWrap:"wrap"}}>
                            <p style={{marginRight:"1px"}}>
                                {
                                    d["details"].map(detail=>{
                                        return <span style={{display:"flex"}}>
                                            <li></li>
                                            <p style={{wordWrap:"break-word",overflowWrap:"break-word",hyphens:"auto"}}>{detail}</p>
                                        </span>;
                                    })
                                }
                            </p>
                        </div>
                    </div>
                )

            })}

        </div>
    );
}
export default Experience;