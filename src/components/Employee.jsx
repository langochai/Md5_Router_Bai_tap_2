import {useLocation, useNavigate} from "react-router-dom";
const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

export const Employee = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const back = () => {
        navigate("/")
    }
    const detail = (employee) =>{
        navigate("/employee",{state:employee})
    }
    return (
        <>
            <p>Welcome {state.username}!</p>
            <button onClick={back}>Back</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {employees.map((employee)=>(
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>
                            <button onClick={()=>detail(employee)}>Detail</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}