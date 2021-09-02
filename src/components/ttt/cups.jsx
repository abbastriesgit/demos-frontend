import TtBox from "./ttBox";

function Cups({states,onClick}){
    console.log(states)
    return(
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",margin:"auto"}}>
            {
                states.map(
                state=>{
                    if(state.left)
                        return <TtBox color={state.color} selected={state.selected} id ={state.index}  onClick = {onClick} number={state.size}/>;
                    return null;
                }
            )}
        </div>
    );
}
export default Cups;