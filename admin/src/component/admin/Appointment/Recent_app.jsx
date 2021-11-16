import React from 'react';
import * as BsIcons from 'react-icons/bs';

const Recent_app = () => {

    return (
        <>
        <div className="main_recent">
            <div className="search">
                <BsIcons.BsSearch className="search_icon"/>
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div className="recent_info">
                <table width="100%">
                    <thead>
                        <tr className="table_head">
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone No</th>
                            <th>Appointment Date</th>
                            <th>Slot Time</th>
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

export default Recent_app;