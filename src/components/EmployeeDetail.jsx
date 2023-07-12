import {useLocation, useNavigate} from "react-router-dom";

export const EmployeeDetail = () => {
	const {state} = useLocation()
	const navigate = useNavigate()
	const back = () =>{
		navigate("/home")
	}
	return (
		<>
		<p>{state.id}</p>
		<p>{state.name}</p>
		<p>{state.age}</p>
			<button onClick={back}>Back</button>
		</>
	)
}