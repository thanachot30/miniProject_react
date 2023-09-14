import { useState,useEffect} from 'react'
import axios from "axios";
import './User.css'


function User() {

  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    
    getData();
  }, []);

    return (
      <div>
        <table id='customers'>
            <thead>
              <th>Name</th>
              <th>LastName</th>
              <th>Position</th>
            </thead>

            <tbody>
              {members.map((member)=>(
               <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr> 
              ))}

            </tbody>
        </table>
      </div>
    );
  }
  
  export default User