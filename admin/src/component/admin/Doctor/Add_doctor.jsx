import React from 'react'

const Add_doctor = () => {

    return (
        <>
        <div className="main_adddoctor">
            <form>
                <fieldset>
                    <div className="add_body">
                        <label><b>First Name</b> : </label>
                        <input type="text" placeholder="First Name" style={{marginLeft:"80px"}} /><br /><br />
                        <label><b>Last Name</b> : </label>
                        <input type="text" placeholder="Last Name" style={{marginLeft:"83px"}} /><br /><br />
                        <label><b>Select Speciality</b> : </label>
                        <select style={{marginLeft:"42px"}}>
                            <option>a</option>
                            <option>e</option>
                        </select><br /><br />
                        <label><b>Select time</b> : </label>
                        <select style={{marginLeft:"82px"}}>
                            <option>a</option>
                            <option>e</option>
                        </select><br /><br />
                        <label><b>Upload Photo</b> : </label>
                        <input type="file" id="img" name="img" accept="image" style={{marginLeft:"60px", border:"none"}}/><br /><br />
                        <label><b>Description</b> : </label><br />
                        <textarea rows="10" cols="65"></textarea><br></br>
                        <center>
                            <button>Submit</button>
                        </center>
                    </div>
                </fieldset>
                
            </form>
        </div>
        </>
    )
}

export default Add_doctor;