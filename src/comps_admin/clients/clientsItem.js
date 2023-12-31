import React from 'react'
import { API_URL,doApiMethod } from '../../services/apiService';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
export default function ClientItem(props) {
    let item = props.item;

    // משנה תפקיד של משתמש
    const onRoleClick = async() => {
      let bodyData;
      if(item.role == "user"){
        bodyData = {role:"admin"}
      }
      else{
        bodyData = {role:"user"}
      }
  
      let url = API_URL + "/users/changeRole/" + item._id;
      try{
        let resp = await doApiMethod(url,"PATCH",bodyData)
        console.log(resp.data)
        if(resp.data){
           props.doApi()
        }
      }
      catch(err){
        console.log(err.response);
        alert("There problem, or you try to change superAdmin to user");
      }
    }
  
    return (
      <tr>
        <td>{props.index + 1}</td>
        <td>{item.name.firstName}</td>
        <td>{item.name.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{String(item.active)}</td>
        <td>{item.address.city}</td>
        <td>{item.address.street}</td>
        <td>{item.address.building}</td>
        
        <td>
      
        <Link to={"/admin/editClient/"+item._id} ><MDBIcon far icon="edit" style={{ color: "black" }} /></Link>
        </td>
      </tr>
    )
}
