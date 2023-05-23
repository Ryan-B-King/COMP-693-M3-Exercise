// let ryan = 'Ryan King'
// let sally = 'Sally Smith'
// let john = 'John Doe'
// let amol = 'Amol Shookup'
// let robin = 'Robin Banks'
// let justin = 'Justin Tyme'
// let chris = 'Chris Columbus'
// let amanda = 'Amanda Bynes'

// const element = (

//         <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
//             <li>{ryan}</li>
//             <li>{sally}</li>
//             <li>{john}</li>
//             <li>{amol}</li>
//             <li>{robin}</li>
//             <li>{justin}</li>
//             <li>{chris}</li>
//             <li>{amanda}</li>
//         </ul>

//     )

// ReactDOM.render(element, document.getElementById('content'))


// // Sample function component
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// ReactDOM.render(<Welcome name = 'Ryan King' />, document.getElementById('content'))

// Sample class component

const employee = [
    {
        id:1,
        name:'Ryan King',
        ext:'1124',
        email: 'ryan13king@gmail.com',
        title:'Escrow Officer',
        dateHired: new Date('2018-08-15'),
        isEmployed: true,
    },
    {
            id:2,
        name:'Sally',
        ext:'1125',
        email: 'sally@gmail.com',
        title:'Director of Sales',
        dateHired: new Date('2015-01-03'),
        isEmployed: false,
    }
    
]
class BorderWrap extends React.Component {
    render() {
        const borderStyle = {border: "3px solid silver",
        padding: 6}
        return(
            <div style={borderStyle}>
                {this.props.children}
            </div>
        )
            
    }
}

class EmployeeFilter extends React.Component {
    render() {
        return(<div>This is a placeholder for the Employee Filter.</div>)
    }
}

class EmployeeTable extends React.Component {
    render() {
        const employeeRows = employee.map(employee =>
            <EmployeeRow key={employee.id} employee={employee}/>)
        
        return (
            <table className = "bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Date Hired</th>
                        <th>Currently Employed?</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeRows}
                </tbody>
            </table>
        )
    }
}

class EmployeeRow extends React.Component {
    render() {
        const employee = this.props.employee
        return (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.ext}</td>
                <td>{employee.email}</td>
                <td>{employee.title}</td>
                <td>{employee.dateHired.toDateString()}</td>
                <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
            </tr>
        )
    }
}

class EmployeeAdd extends React.Component {
    render() {
        return<div>This is a placeholder for a form to add an employee.</div>
    }
}
class EmployeeList extends React.Component {
    render(){
        return(
            <React.Fragment>
                <BorderWrap>
                    <h1>Employee Management Application</h1>
                    <EmployeeFilter/>
                    <hr/>
                    <EmployeeTable/>
                    <hr/>
                    <EmployeeAdd/>
                </BorderWrap>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList/>
    </React.StrictMode>,
    document.getElementById('content')
)