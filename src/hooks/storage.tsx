interface ass{
    user:string,
    pass:number
}

export default function storeLocal(userID:string,pass:any)
{
localStorage.setItem("examNo" , pass);
localStorage.setItem("regNo" , userID);
}