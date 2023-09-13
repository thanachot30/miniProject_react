import { useState,useEffect} from 'react'
import axios from "axios";
function Admin() {

  

  const [members, setMembers] = useState([]);
  const [name,setName] = useState();
  const [lastname,setLastname] = useState();
  const [position,setPosition] = useState();
  const [reload,setreload] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, [reload]);

  const createData = async (name,lastname,position)=>{
    console.log("hi create data");
    const requestData = {
      name:name,
      lastname:lastname,
      position:position
    };
    console.log(requestData);
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",requestData
    );
    console.log(response);

    if(response.status == 200){
      console.log("auto reload");
      setreload(!reload);
    }
  };

  const handleDelete = async (id)=>{
    console.log("Delete");
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`);
      console.log(response);
      if(response.status == 200){
        console.log("auto reload");
        setreload(!reload);
      }
  };

    return (
      <div>
        <div>
          <h2>Create User Here</h2>
          <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder='LastName' onChange={(e)=>setLastname(e.target.value)}/>
          <input type="text" placeholder='Position' onChange={(e)=>setPosition(e.target.value)}/>
          <button onClick={()=>createData(name,lastname,position)}>Save</button>
        </div>
        <div>
        <table>
            <thead>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>LastName</th>
              <th>Position</th>
              <th>Action</th>
            </thead>  

            <tbody>
              {members.map((member)=>(
               <tr>
                {/* <td>{member.id}</td> */}
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                <td><button onClick={()=>handleDelete(member.id)}>Delete</button></td>
             </tr> 
              ))}
              
            </tbody>
        </table>
      </div>
        
      </div>
      
    );
  }
  
  export default Admin