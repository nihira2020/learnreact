import { useState } from "react";

const AppHeader = () => {
    //let titletext="Welcome to Nihira Techiees";
   const[titletext,changetext] =useState("Welcome to Nihira Techiees")
   const[userinfo,changeuser]=useState({'name':'robert','age':'25'});
    const handleclick=()=>{
      //  titletext="Welcome to React Tutorial";
      changetext("Welcome to React Tutorial")
      changeuser({'name':'Alex','age':'29'})
        console.log(titletext);
    };

    
    return ( 
        <div>
            <h2>{titletext}</h2>
            <h3>user name is {userinfo.name} and his age is : {userinfo.age}</h3>
            <button onClick={handleclick}>Change title</button>
        </div>
     );
}
 
export default AppHeader;