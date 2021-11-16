import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

const Add_spec = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState({speciality: ""});

    useEffect(() => {
        getSpec();
    }, [])

    const getSpec = async () => {
        const res = await fetch('/add_Speciality');
        setData(await res.json());
    }

    let name, value; 

    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setSpec({...spec, [name]:value})
    }

    const Submit = async(e) => {
        e.preventDefault();

        const {speciality} = spec;

        const res = await fetch('/save_spectiality', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                speciality
            })
        })

        const info = await res.json();

        if(res.send === 422 || !info) {
            window.alert("Invalid")
            console.log("Invaild");
        } else{
            window.alert("Succec")
            console.log("Succ");

            history.push('/add_Speciality')
        }

    }

    return (
        <>
        <div className="main_speciality">
            <div className="speciality_info">
                <table width="100%">
                    <thead>
                        <tr className="table_head">
                            <th>ID</th>
                            <th>Speciality</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((curElem) => (
                        <tr className="table_row" key={curElem.Sr_no}>
                            <td>{curElem.Sr_no}</td>
                            <td>{curElem.speciality}</td>
                            <td></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <form method="POST">
                <div>
                    <label><b>Speciality</b> : </label>
                    <input type="text" name="speciality" value={spec.speciality} onChange={handleInput} /><br /><br />
                    <button onClick={Submit}>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Add_spec;