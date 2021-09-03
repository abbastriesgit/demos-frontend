import urls from "../constants/urls";

function TicTacTowApiCalls(setIsPending,getStateFromResponse,state){
    const create = () => {
        const url = urls.ttt.b.base + urls.ttt.b.create;
        setIsPending(true);
        fetch(url,{
            method:'POST',
            headers : {'Content-Type':'application/json'}
        }).then((res)=>{
                setIsPending(false);
                if(res.ok){
                    res.json().then((data)=>{
                        getStateFromResponse(data)
                    });
                }
            }
        ).catch((err)=>{
            setIsPending(false);
            console.log(err);
        });
    }
    const restart = () => {
        const url = urls.ttt.b.base + urls.ttt.b.restart + "?gameId=" + state.gameId + "&player=" + state.player;
        setIsPending(true);
        fetch(url,{
            method:'POST',
            headers : {'Content-Type':'application/json'}
        }).then((res)=>{
                setIsPending(false);
                if(res.ok){
                    res.json().then((data)=>{
                        getStateFromResponse(data)
                    });
                }
            }
        ).catch((err)=>{
            setIsPending(false);
            console.log(err);
        });
    }
    const submit = (index,size) => {
        const url = urls.ttt.b.base + urls.ttt.b.move;
        setIsPending(true);
        fetch(url,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                "boxIndex": index,
                "boxSize": size,
                "gameId": state.gameId,
                "player": state.player
            })
        }).then((res)=>{
                setIsPending(false);
                if(res.ok){
                    res.json().then((data)=>{
                        getStateFromResponse(data)
                    });
                }
            }
        ).catch((err)=>{
            setIsPending(false);
            console.log(err);
        });
    }
    const refresh = () => {
        const url = urls.ttt.b.base + urls.ttt.b.state + "?gameId="+state.gameId + "&player=" + state.player;
        setIsPending(true);
        fetch(url,{
            method:'GET',
            headers : {'Content-Type':'application/json'}
        }).then((res)=>{
                setIsPending(false);
                if(res.ok){
                    res.json().then((data)=>{
                        getStateFromResponse(data)
                    });
                }
            }
        ).catch((err)=>{
            setIsPending(false);
            console.log(err);
        });
    }
    return {create,refresh,submit,restart};
}
export default TicTacTowApiCalls;