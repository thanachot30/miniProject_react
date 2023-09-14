import { useState,useEffect} from 'react'
import axios from "axios";
function Admin() {
  const [error,setError] = useState();
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

  // function validateValue(inputvalue){
  //   const regex = /^[A-Za-z]{1}[0-9]{4}$/;  //you will let This will let you enter 1 letter (a-z and A-Z) and 4 numbers (0-9) and 
  //   const found = paragraph.match(regex);
  //   if(!found){
  //     console.log("validate Error")
  //     setError("you will let This will let you enter 1 letter (a-z and A-Z) and 4 numbers (0-9) and")
  //   }
  //   return 
  // }

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