import urls from "../constants/urls";

function TicTacTowApiCalls(setIsPending,getStateFromResponse){
    const create = () => {
        const url = urls.base_backend + urls.ttt_create_game;
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
    return {create};
}
export default TicTacTowApiCalls;