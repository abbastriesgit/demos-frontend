import TtBox from "./ttBox";

function TtRow({states,getColor}){
    return(
        <div style={{display:"flex"}}>
            {states.map(
                state=>{
                    return (<TtBox selected={false} color={getColor(state)} number={state.number}/>);
                }
            )}
        </div>
    );
}
export default TtRow;