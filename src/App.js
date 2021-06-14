import React from "react"
import StudentList from "./pages/StudentList/StudentList"
import StudentLogin from "./pages/StudentLogin/StudentLogin"
import TeacherAuth from "./pages/TeacherAuth/TeacherAuth"
import Dashboard from "./pages/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dash from "./components/Dash/Dash"
import Studentdashboard from "./components/Dash/DashStudent"



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Dash} />
          <Route path="/students" component={StudentList} />
          <Route path="/studentLogIn" component={StudentLogin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/Studentdashboard" component={Studentdashboard} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
