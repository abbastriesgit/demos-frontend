import TtBox from "./ttBox";

function TtRow({states,onClick}){
    return(
        <div style={{display:"flex"}}>
            {states.map(
                state=>{
                    return (<TtBox onClick={onClick} key = {state.index} index = {state.index} selected={false} color={state.color} number={state.size}/>);
                }
            )}
        </div>
    );
}
export default TtRow;