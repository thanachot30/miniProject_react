import { useState,useEffect} from 'react'
import './Home.css'
import Layout from './Layout';
import User from './User';
import Admin from './Admin';
import Normal from './Normal';

function Home() {
    const [authen,setAuthen] = useState("normal");
    const [page,setPage] = useState();
    const [tital,settital] = useState(); 

    const checkAuthen =()=>{
        if(authen == "normal"){
            setPage(<Normal />);
            settital("React-Assessment")
        }else if(authen == "user"){
            setPage(<User />);
            settital("Home-User Sector")
        }else if(authen == "admin"){
            setPage(<Admin />);
            settital("Home-Adnmin Sector")
        }
    }
    
    useEffect(checkAuthen,[authen]);

    function handleUserhome(){
        setAuthen("user");
        setPage(<User />);
        // console.log(authen);
    }

    function handleAdminhome(){
        setAuthen("admin");
        // console.log(authen);
    }

    return (
        <Layout>
            <div>
                <div>
                <h1>Generation Thailand</h1>
                <h1>{tital}</h1>
                </div>
                
                <div> 
                    <button onClick={handleUserhome}>User Home Sector</button>
                    <button onClick={handleAdminhome}>Admin Hoem Sector</button>
                </div>

                <div>
                    {page}    
                </div>
                
            </div>
        </Layout>
      
    );
  }
  
  export default Home