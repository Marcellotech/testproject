import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [name, setName]=useState('789');

    // const [username, setUsername]=useState('');
    // const [password, setPassword]=useState('');

    const [userpass, setUserpass]=useState({
        username:'',
        password:''
    })

    // const onChangeUserName=(e)=>{
    //     console.log(e.target);
    //     const {value}=e.target;
    //     setUsername(value)
    // }
    // const onChangePassword=(e)=>{
    //     console.log(e.target);
    //     const {value}=e.target;
    //     setPassword(value)
    // }
const a={
    name:'xyz',
    class:'A',
    age:20
}
    const onChangeTextbox=(e)=>{
     console.log(e.target);
        const {value, name}=e.target;
        console.log('********',{value, name});
        setUserpass({...userpass, [name]:value })
    }


    return (
        <>Parent com ---
        <Child data={'Helooooo'} val={'hello 2'} val2={'helo 3'} 
        sendDataxy={(data)=>{
            console.log('data received in parent',data);
            setName(data)
        }}
        >

            $$$$$$$$$$$$$$$$$
            <input name="username" value={userpass.username} onChange={onChangeTextbox} />
        <input name="password" value={userpass.password} onChange={onChangeTextbox} />
        {JSON.stringify(userpass)}
        </Child>
        {name}
        
        {/* {username} */}
        {/* {JSON.stringify({username,password})} */}
        </>
    );
}

export default Parent;