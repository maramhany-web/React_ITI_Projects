import React , { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
    let [profile, setProfile] = useState({
        name: "Maram",
        age: 21,
        job: "Front-End Developer",
        isStudent: true
    });
    return (
        <>
            <div>
                <h1 className=" bg-secondary card-title text-center text-white my-4 p-4 ">Parent Component</h1>
                  
            </div>
        <Child profile={profile} />
        
        </>
    );
}
