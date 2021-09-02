import AboutMe from "./aboutMe";
import Experience from "./experience";

function Home(){
    let style = {scrollSnapAlign:"start",height:"100vh"};
    return(
        <div style={{display:"flex",flexDirection:"column",textAlign:"left",scrollSnapType:"y",overflowY:"scroll"}}>
            <section style={style}>
                <AboutMe/>
            </section>
            <section style={style}>
                <Experience/>
            </section>
        </div>

    );
}
export default Home;