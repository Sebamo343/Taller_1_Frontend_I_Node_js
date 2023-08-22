import { useState } from "react";
import './App.css';

const Employees = () => {
    const [Employees, setEmployees] = useState([
        {
            id: 1,
            fullname: "Sebastian Morales",
            designation: "Maestro",
            gender:"Male",
            teamName:"TeamA"
        },
        {
            id: 2,
            fullname: "Heidy Martinez",
            designation: "Maestra",
            gender:"Female",
            teamName:"TeamA"
        },
        {
            id: 3,
            fullname: "Adriana Pachon",
            designation: "Maestra",
            gender:"Female",
            teamName:"TeamA"
        },
        {
            id: 4,
            fullname: "Daniel Triana",
            designation: "Maestro",
            gender:"Male",
            teamName:"TeamA"
        },
        {
            id: 5,
            fullname: "Esteban vaca",
            designation: "Estudiante",
            gender:"Male",
            teamName:"TeamB"
        },
        {
            id: 6,
            fullname: "Leonardo Botia",
            designation: "Estudiante",
            gender:"Male",
            teamName:"TeamB"
        },
        {
            id: 7,
            fullname: "Geraldine Suarez",
            designation: "Estudiante",
            gender:"Female",
            teamName:"TeamB"
        },
        {
            id: 8,
            fullname: "Antonia castro",
            designation: "estudiante",
            gender:"Male",
            teamName:"TeamB"
        },
        {
            id: 9,
            fullname: "Dayanna Cardenas",
            designation: "Maestra",
            gender:"Female",
            teamName:"TeamC"
        },
        {
            id: 10,
            fullname: "Felipe Salinas",
            designation: "Maestro",
            gender:"Male",
            teamName:"TeamC"
        },
        {
            id: 11,
            fullname: "Andres Sarmiento",
            designation: "Estudiante",
            gender:"Male",
            teamName:"TeamC"
        },
        {
            id: 12,
            fullname: "Kelly Orozco",
            designation: "Estudiante",
            gender:"Female",
            teamName:"TeamC"
}]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee === selectedEmployee ? null : employee);
    };

    return (
        <main className="container">
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees.map((employee) => (
                        <tr
                            key={employee.id}
                            className={selectedEmployee === employee ? 'selected' : ''}
                            onClick={() => handleEmployeeClick(employee)}
                        >
                            <td>{employee.fullname}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedEmployee && (
                <div className="employee-details">
                    <p>Equipo: {selectedEmployee.teamName}</p>
                    {/* Agrega más detalles aquí si lo deseas */}
                </div>
            )}
        </main>
    );
}

export default Employees