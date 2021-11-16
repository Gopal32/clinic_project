import React from 'react';
import * as BsIcons from 'react-icons/bs'

const patient_info = () =>{
    
    return (
        <>
        <div className="main_patient">
            <div className="search">
                <BsIcons.BsSearch className="search_icon"/>
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div className="patient_info">
                <table width="100%">
                    <thead>
                        <tr className="table_head">
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Appointment Date</th>
                            <th>Speciality</th>
                            <th>Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table_row">
                            <th>asfa</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default patient_info;