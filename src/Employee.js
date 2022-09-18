import { useState } from "react";

const Employee = () => {
    const [emplist, empchange] = useState([
        { 'code': '1001', 'name': 'Fancis Xavier', 'salary': '10000', 'status': 'Active' },
        { 'code': '1002', 'name': 'Alex Raj', 'salary': '11000', 'status': 'Active' },
        { 'code': '1003', 'name': 'Robert wilson', 'salary': '11000', 'status': 'Active' },
        { 'code': '1004', 'name': 'Rahul sharma', 'salary': '12000', 'status': 'Active' },
        { 'code': '1005', 'name': 'sandeep kumar', 'salary': '13000', 'status': 'Active' }
    ]);
    return (
        <div>
            <h3>Employee listing</h3>
            <table>
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {emplist.map((item)=>(
<tr key={item.code}>
    <td>{item.code}</td>
    <td>{item.name}</td>
    <td>{item.salary}</td>
    <td>{item.status}</td>
    <td><button>Click</button></td>

</tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
}

export default Employee;