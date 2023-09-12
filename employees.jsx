import React from "react";
import { useApi } from "./contextApi";
export default function Employees(){
    const {employees} = useApi()
    return (
        <div className="employees">

            {  
                employees.map(x=>(
                    <div key={x.id} className="empBlock">
                        <h1>{x.name}</h1>
                        <h2>{x.username}</h2>
                        <p>{x.email}</p>
                    </div>
                ))
            }
        </div>
    )
}