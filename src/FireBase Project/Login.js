import React , { useState }  from "react"
import './Login.css'

export default function Login()
{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        address:"",
        comment:""
    })
    function handler(e)
    {
        const {type, name, value}=e.target
        setFormData(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    console.log(formData)

  async function Submit(e)
    {
        const {name, email,address, comment}=formData
        e.preventDefault()
        if(name&&email&&address&&comment)
        {
            const res= await fetch(
                `https://react-demo-project-1decf-default-rtdb.asia-southeast1.firebasedatabase.app/Login_Db_Test.json`,
                {method:"POST",
                header:{
                    "Content-Type":"application/json",    
                       },
                body:JSON.stringify({
                    name,
                    email,
                    address,
                    comment
                })
                })
                setFormData({
                    name:"",
                    email:"",
                    address:"",
                    comment:""
                })
                alert("Database Updated")
        }
        else{
            alert("Enter Complete Fields")
        }
        
    }
    

return(
<div className="container d-flex justify-content-center align-items-center">
<div className="border login-box py-3">
  <div className="title">
   Login Form
  </div>
    <form method="POST" className=" d-flex flex-column  align-items-center elements">
    <input type="text" 
    placeholder="Name"
    value={formData.name}
    name="name"
    autoComplete="off"
    onChange={handler}/>

    <input type="email" 
    placeholder="email"
    value={formData.email}
    name="email"
    autoComplete="off"
    onChange={handler}/>

    <input type="text" 
    placeholder="Address"
    value={formData.address}
    name="address"
    autoComplete="off"
    onChange={handler}/>

    <textarea placeholder="Enter comments"
    value={formData.comment}
    name="comment"
    onChange={handler}>

    </textarea>
    <button type="submit" className="my-4" onClick={Submit}>Submit</button>
    </form>
 
  
 </div>
</div>
)
}