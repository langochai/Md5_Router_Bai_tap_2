import {useState} from "react";
import {useNavigate} from "react-router-dom";

const defaultUser = {
	username: "admin",
	password:"123"
}

export const Login = () => {
	const [user,setUser] = useState({})
	const navigate = useNavigate()
	const handleChange = (e) =>{
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const handleLogin = ()=>{
		if(user.username === defaultUser.username && user.password === defaultUser.password){
			alert("ok")
			navigate("/home",{state:user})
		} else alert("nope")
	}
	return (
		<>
			<table>
				<tr>
					<td>Username:</td>
					<td><input type="text" name="username" onChange={handleChange}/></td>
				</tr>
				<tr>
					<td>Password:</td>
					<td><input type="password" name="password" onChange={handleChange}/></td>
				</tr>
			</table>
			<button onClick={handleLogin}>Log in</button>
		</>
	)
}