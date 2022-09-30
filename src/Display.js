import React, {useState} from "react";
import "./Display.css"
import "./loader.css"
import axios from "axios";

const Display = () =>{
    const [users, setUsers]= useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData=async()=> {   
        setLoading(true);

        const {data}= await axios.get("https://reqres.in/api/users?page=1")
        setUsers(data.data);
        setLoading(false);
    }

    if(loading) return <div className="loader"></div>

    return(
        
        <div className="mainCard">
            <h1>User Details</h1>
            <button onClick ={fetchData}>Get Users</button>

            {users.map(data=>(
                <div className="displayCard" key={data.id}>
                    <div className="card">
                        <div className="card-body">
                                <div className="avatar">
                                    <img
                                        src={data.avatar}
                                        className = "card-img-top"
                                        alt=""
                                    />
                                </div>
                                <h3 className="card-title">
                                    Name: {data.first_name+" "+data.last_name}
                                </h3>
                                <p className="card-email">Email: {data.email}</p>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default Display;

