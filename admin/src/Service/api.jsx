import axios from 'axios';

const adminUrl = 'http://localhost:4000/';

export const add_Speciality = async (Sr_no) => {
    Sr_no = Sr_no || '';
    return await axios.get(`${adminUrl}/${Sr_no}`);
}

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }