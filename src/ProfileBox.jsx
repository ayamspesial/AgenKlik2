import React from "react";
import DefaultPhoto from "./360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

export default function ProfileBox (props){
return(
    
    <div className="ProfileBox">
        <div className="TopBox">
            <div className="TopHeader">
      
        <h1>{props.Location} || {props.WorkExperience}</h1>
        </div>
<img src = {props.ProfilePic} className="ProfilePicture"/>

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