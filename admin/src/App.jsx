import React from 'react';
import './Style.css';
import { Route, Switch } from 'react-router';
import Menu from './component/admin/Header/Menu';
import Navbar from './component/admin/Header/Navbar';
import Patient_info from './component/admin/Patient/Patient_info ';
import Add_doctor from './component/admin/Doctor/Add_doctor';
import Search_doctor from './component/admin/Doctor/Search_doctor';
import Add_spec from './component/admin/Speciality/Add_spec.';
import Recent_app from './component/admin/Appointment/Recent_app';

const App = () =>{

    return (
        <>
        <div className="main_admin">
            <Navbar />
            <div className="admin_body">
                <Menu />
                <div>
                    <Switch>
                        <Route exact path='/patient_info' component={Patient_info} />
                        <Route exact path='/doctor/add_doctor' component={Add_doctor} />
                        <Route exact path='/doctor/search_doctor' component={Search_doctor} />
                        <Route exact path='/add_speciality' component={Add_spec} />
                        <Route exact path='/recent_app' component={Recent_app} />
                    </Switch>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;