import TtBox from "./ttBox";

function Cups({states,onClick,border}){

    return(
        <div style={{...border,display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"auto"}}>
            {
                states.map(
                state=>{
                    if(state.left)
                        return <TtBox  key={state.key}  color={state.color} selected={state.selected} index ={state.index}  onClick = {onClick} number={state.size}/>;
                    else
                        return null;
                }
            )}
        </div>
    );
}
export default Cups;