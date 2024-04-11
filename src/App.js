import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function App() {
  const users = [
    {id: 1, name: 'Salman', email: 'salman123@gmail.com', contact: '9999123498'},
    {id: 2, name: 'John', email: 'john.doe@example.com', contact: '1234567890'},
    {id: 3, name: 'Emily', email: 'emily.smith@example.com', contact: '9876543210'},
    {id: 4, name: 'Michael', email: 'michael87@gmail.com', contact: '5555555555'},
    {id: 5, name: 'Sara', email: 'sara.miller@example.com', contact: '7777777777'},
    {id: 6, name: 'Ahmed', email: 'ahmed_22@hotmail.com', contact: '3333333333'},
    {id: 7, name: 'Sophia', email: 'sophia.jackson@example.com', contact: '2222222222'},
    {id: 8, name: 'David', email: 'david.smith@example.com', contact: '6666666666'}
  ];
  
  return (
    <div  className='container text-center p-20'>
      <h1>Data Listing</h1>
      <Table striped border hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, contact }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
