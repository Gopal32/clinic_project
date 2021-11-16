import React from 'react';
import * as BsIcons from 'react-icons/bs';

const Search_doctor = () => {

    return (
        <>
        <div className="main_doctorsearch">
            <div className="search">
                <BsIcons.BsSearch className="search_icon"/>
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div className="doctor_info">
                <table width="100%">
                    <thead>
                        <tr className="table_head">
                            <th>ID</th>
                            <th>photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Description</th>
                            <th>Speciality</th>
                            <th>Available Time</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table_row">
                            <th>asfa</th>
                        </tr>
                        <tr className="table_row">
                            <th>asfa</th>
                        </tr>
                        <tr className="table_row">
                            <th>asfa</th>
                        </tr>
                        <tr className="table_row">
                            <th>asfa</th>
                        </tr><tr className="table_row">
                            <th>asfa</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Search_doctor;