import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () =>{
   
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userId.trim() !== ''){
            navigate(`/chatWindow/${encodeURIComponent(userId)}`);
        }else{
            alert("아이디를 입력하세요. ")
        }
    }

    return(
        <>
            <h1>웹 소켓 채팅</h1>
            <form onSubmit={handleSubmit}>
                <label>사용할 아이디 입력 : </label><br/>
                <input 
                    type="text"
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={e=>setUserId(e.target.value)}
                    required/>
                <button type="submi">채팅방 입장</button>
            </form>
        </>
    )
}
export default Main;