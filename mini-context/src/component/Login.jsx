import React,{useState,useContext} from "react";
import UserContext  from "../context/UserContext";


export const Login = () => {
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    let {setUser} =useContext(UserContext)
    let handleSubmit = (e)=>{
          e.preventDefault()
          setUser({username,password})
    }
  return (
    
    <div >
        <h2>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username"></input>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"></input>
        <button onClick={handleSubmit}>
            Submit
        </button>
        </h2>
    </div>
  )
}
export default Login;
