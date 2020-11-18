import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContent from './Components/MainContent';
import UserLogin from './Components/Clients/UserLogin';
import UserCreate from './Components/Clients/UserCreate';
import Members from './Components/Clients/Members';
import LoginInstructor from './Components/Employees/LoginInstructor';
import CreateInstructor from './Components/Employees/CreateInstructor';
// import Classes from './Components/Employees/Classes';
import InstructorClasses from './Components/Employees/InstructrorPage.js';

function App() {

return (
    <div className="App">
        <Router>        
            <Route exact path='/' component={MainContent}>
                <MainContent />
            </Route>

            <Switch>
                <Route exact path='/login' component={UserLogin}>
                    <UserLogin />
                </Route>

                <Route exact path='/createaccount' component={UserCreate} />
                <Route exact path='/instructorlogin' component={LoginInstructor} />
                <Route exact path='/instructor' component={CreateInstructor} />
                {/* <Route exact path='/classes' component={Classes} /> */}
                {/* Main Pages after login */}

                <Route exact path='/members' component={Members} />
                <Route exact path='/instructorpage' component={InstructorClasses} />
            </Switch>
        </Router>
    </div>

    );

}

export default App