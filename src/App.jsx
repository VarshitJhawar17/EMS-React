import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Autho/Login';
import AdminDashboard from './Components/DashBoard/AdminDashboard';
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard';
import { AuthoContext } from './Context/AuthoProvider';

function App() {
  const [User, setUser] = useState(null);
  const [LoggedUserData, setLoggedUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthoContext);

  // Check localStorage on initial load to set the logged-in user and data
  useEffect(() => {
    const LoggedInUser = localStorage.getItem("LoggedInUser");
    if (LoggedInUser) {
      const userData = JSON.parse(LoggedInUser);
      setUser(userData.role);
      setLoggedUserData(userData.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }));
    }
    else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedUserData(employee);
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!User && <Login HandleLogin={HandleLogin} />}
      {User === 'admin' && <AdminDashboard changeUser = {setUser}/>}
      {User === 'employee' && <EmployeeDashboard changeUser={setUser} data={LoggedUserData} />}
    </>
  );
}

export default App;
