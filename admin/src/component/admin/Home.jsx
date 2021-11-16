import React from 'react';
import { Route, Switch } from 'react-router';
import Menu from './Header/Menu';
import Navbar from './Header/Navbar';
import Patient_info from './Patient/Patient_info ';
import Add_doctor from './Doctor/Add_doctor';
import Search_doctor from './Doctor/Search_doctor';
import Add_spec from './Speciality/Add_spec.';
import Recent_app from './Appointment/Recent_app';

const Home = () =>{

    return (
        <>
        <div className="main_admin">
            <Navbar />
            <div className="admin_body">
                <Menu />
                <div>
                    <Switch>
                        <Route exact path='/admin/patient_info' component={Patient_info} />
                        <Route exact path='/admin/doctor/add_doctor' component={Add_doctor} />
                        <Route exact path='/admin/doctor/search_doctor' component={Search_doctor} />
                        <Route exact path='/admin/add_speciality' component={Add_spec} />
                        <Route exact path='/admin/recent_app' component={Recent_app} />
                    </Switch>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;