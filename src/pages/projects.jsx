import {useEffect, useState} from "react";
import IsMobile from "../adv_tictactoe/logic/isMobile";
import Project from "../components/project";
import urls from "../constants/urls";

function Projects(){

    const data = [
        {
            "title":"Advance TicTacToe",
            "skills":"Java, React.js, Spring Boot , MySql",
            "description":"I saw a video of a modified version of tic-tac-toe game on Instagram. " +
                "The problem is you can't play this game without required cards." +
                "So I decided to make an online version of the game so that I can play with my friends." +
                "Later, I also added an AI algorithm to play with. The algorithm uses Min-Max algorithm to find the next " +
                "optimal move.",
            "links":[
                {
                    "name":"Github",
                    "url":urls.ttt.github
                }  ,{
                    "name":"Play",
                    "url":urls.ttt.f.base + urls.ttt.f.ttt
                },{
                    "name":"Swagger Doc",
                    "url":urls.ttt.swagger
                }
            ],
            "embed":"https://www.youtube.com/embed/kShmkaOq3WA"
        },
        {
            "title":"Self Driving Cars",
            "skills":"C#, Unity, Genetic Algorithm",
            "description":"This is a car racing video game. The cars were trained using Genetic algorithm." +
                "You can see in the video that after some generations cars learn to drive pretty well." +
                "The game was developed in C# using Unity Game Engine.",
            "links":[
                {
                    "name":"Youtube",
                    "url":urls.genetic
                }
            ],
            "embed":"https://www.youtube.com/embed/tV0CXsi9VH4?start=49"
        }
    ];
    return (
        <div style={{display:"flex",flexWrap:"wrap",margin:"10px",marginBottom:"100px",textAlign:"center"}}>
            {data.map(p=>{
               return <Project title={p.title} skills={p.skills} description={p.description} links={ p.links} embed={p.embed}/>;
            })}
        </div>
    );
}
export default Projects;