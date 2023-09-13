import { useState } from 'react'
import './Signup.css'
import Layout from './Layout';

const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' }
  ];

function Signup() {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [fullname,setFullname]=useState();
    const [orgenization,setOrgenization]=useState();

    const [dataStore,setdataStore] = useState([]); //เก็บข้อมูล

    const SignupSummit =()=>{
        console.log("click");
        let data = {
            username:username,
            password:password,
            fullname:fullname,
            orgenization:orgenization
        };
        // console.log(data);

        setdataStore((predata)=>{
            // console.log(predata);
            // console.log(data);
            return [...predata,data];
        });
    }

    const handleChange =(e)=>{
        setOrgenization(e.value);
    }
    return (
        <Layout>
            <div>
                <h1>Page Sign up</h1>
                <h2>Username</h2>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} required/>
                <h2>Password</h2>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <h2>Fullname</h2>
                <input type="text" onChange={(e)=>setFullname(e.target.value)} required/>
                <h2>Organization</h2>
                {/* <input type="text" onChange={(e)=>setOrgenization(e.target.value)} required/> */}
                <select onChange={(e)=>setOrgenization(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <br />
                <button type='summit' onClick={SignupSummit}>Sign up</button>
                
                <div>
                    <ul>
                        {dataStore.map((e)=>{
                            return <li>{e.username}</li>
                            })}
                    </ul>
                </div>
            </div>
        </Layout>
      
    );
  }
  
  export default Signup