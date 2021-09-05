import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useSpring, animated ,config} from 'react-spring'
import colors from "../constants/colors";

function Experience() {
    const propHead =  useSpring({
        to: { opacity: 1, transform: 'translateY(0px) ' },
        from: { opacity: 0, transform: 'translateY(-250px) '} ,
        config: { mass: 3, tension: 100, friction: 12 }
    });
    const propsTitle = [
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px) ' },
            from: { opacity: 0, transform: 'translateX(250px) '} ,
            config: { mass: 3, tension: 100, friction: 12 }
        }),
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px)' },
            from: { opacity: 0, transform: 'translateX(250px)'} ,
            config: { mass: 3, tension: 100, friction: 12 },
            delay : 500
        }),
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px)' },
            from: { opacity: 0, transform: 'translateX(250px)'} ,
            config: { mass: 3, tension: 100, friction: 12 },
            delay : 1000
        })
    ]
    const propsBody = [
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px)' },
            from: { opacity: 0, transform: 'translateX(-250px)'} ,
            config: { mass: 3, tension: 50, friction: 12 }
        }),
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px)' },
            from: { opacity: 0, transform: 'translateX(-250px)'} ,
            config: { mass: 3, tension: 100, friction: 12 },
            delay : 500
        }),
        useSpring({
            to: { opacity: 1, transform: 'translateX(0px)' },
            from: { opacity: 0, transform: 'translateX(-250px)'} ,
            config: { mass: 3, tension: 100, friction: 12 },
            delay : 1000
        })
    ]
    const getFlex=()=>{
        if(window.innerWidth<1200){
            return "column";
        }
        else
            return "row";
    }
    const [flex,setFlex] = useState(getFlex())
    let i = 0, j =0;
    useEffect(()=>{
        i = 0;
        j = 0;
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
        <div style={{width:"75%",display:"flex",flexDirection:"column",textAlign :"center",justifyContent:"flex-start",margin:"auto"}}>
            <animated.h3 style = {{...propHead,marginBottom:"50px"}}>
                Work Experience
            </animated.h3>
            <span style={{}}>
                { data.map(d=>{
                return(
                    <div style={{padding:"5px",display:"flex",alignItems:"flex-start",flexDirection:flex}}>
                        <animated.div style={{...propsTitle[i++],padding:"5px",display:"flex",alignItems:"baseline",textAlign:"left",flexDirection:"column",flexWrap:"wrap"}}>
                            <h5 style={{marginRight:"2rem",width:"20rem"}}>
                                {d["title"]}
                            </h5>
                            <h6 style={{marginRight:"5rem",marginBottom:"0",width:"20rem"}}>
                                {d["company"]} <i>{d["date"]}</i>
                            </h6>
                        </animated.div>
                        <animated.div style={{...propsBody[j++],padding:"5px",display:"flex",alignItems:"baseline",textAlign:"left",flexDirection:"row",flexWrap:"wrap"}}>
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
                        </animated.div>
                    </div>
                )

            })}
            </span>
            <span style={{marginBottom:"50px"}}></span>
        </div>
    )
}
export default Experience;