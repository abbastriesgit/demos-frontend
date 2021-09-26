import urls from "../constants/urls";
function ApiCalls(setIsPending,setState,setError) {
    const simulate = (commands,getIntermediateStates,rows,columns,mode) => {
        const url = urls.robot.b.base + urls.robot.b.simulate;
        setIsPending(true);
        setError(false);
        fetch(url,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                "commands":commands,
                "getIntermediateStates":getIntermediateStates,
                "rows":rows,
                "columns":columns,
                "mode":mode
            })
        }).then((res)=>{
                setIsPending(false);
                if(res.ok){
                    res.json().then((data)=>{
                        setState(data)
                        if(!data.success)
                            setError(true);
                    });
                }
            }
        ).catch((err)=>{
            setIsPending(false);
            console.log(err);
        });
    }
    return {simulate};
}
export default ApiCalls;
