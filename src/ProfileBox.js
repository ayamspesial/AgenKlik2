import React from "react";


export default function ProfileBox (props){
return(
    
    <div className="ProfileBox">
        <div className="TopBox">
            <div className="TopHeader">
      
        <h1>{props.Location} || {props.WorkExperience}</h1>
        </div>
<img src = {props.profilePic}/>

</div>
    <div className="Bottombox">
        <div className="Information">
         
           <h1>{props.firstName} {props.lastName}, {props.Age}</h1>
    <h2>{props.occupation} || {props.askingSalary}</h2>
    </div>
    </div>
</div>

)
}