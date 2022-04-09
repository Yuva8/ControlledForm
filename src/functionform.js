import React,{useState} from 'react';

export default function Functionform() {
const [form,setform] = useState({
    FirstName : "",
    lastName : "",
    Email : "",
    gender : "",
    courses : 'react',
    errors : {
       FirstName : "",
       lastName : "",
       Email : "",
       gender : "", 
    },
})
 const handleSubmit = (e) => {
    e.preventDefault();
    let err = Object.keys(form).filter((keys)=>{
       if(form[keys]==="" && keys != 'errors'){
           return keys
       }
     
    })
    
    if(err.length>=1){
       console.error('please fill all fields')
   }else{
       console.log(form)
   }
    
    
   }
  const handlechange = (e) => {
       let errors = { ...form.errors };
       if (e.target.value === '') {
           errors[e.target.name] = `${e.target.name} is required`;
       } else {
           errors[e.target.name] = '';
       }
       setform({ errors, [e.target.name]: e.target.value });
       let data = {[e.target.name]:e.target.value};
       console.log(data)
   }

    return (
        <div>
               <h3>forms using Functional Component</h3> 
               <forms>
                   <div>
                       <label>First Name : </label>
                       <input type="text" name="FirstName"  
                       value = {form.FirstName} 
                       onChange={(e)=>handlechange(e)}/><br></br>
                       <span style={{color: "red"}}>{form.errors.FirstName}</span>
                   </div><br></br>
                   <div>
                       <label>Last Name : </label>
                       <input type="text" name="lastName" 
                        value = {form.lastName} 
                        onChange={(e)=>handlechange(e)}/>
                        <span style={{color: "red"}}>{form.errors.lastName}</span>
                   </div><br></br>
                   <div>
                       <label>Email : </label>
                       <input type="text" name="Email"
                        value = {form.Email} 
                        onChange={(e)=>handlechange(e)} />
                        <span style={{color: "red"}}>{form.errors.Email}</span>
                   </div><br></br>
                   <div>
                       <label>Gender: </label>
                       <input type="radio" name="gender" 
                        value="male" 
                       
                        onChange={(e)=>handlechange(e)}/>
                        <span style={{color: "red"}}>{form.errors.gender}</span>
                        Male
                       <input type="radio" name="gender" value="female"
                        
                        onChange={(e)=>handlechange(e)}
                        />
                        <span style={{color: "red"}}>{form.errors.gender}</span> 
                        Female
                   </div><br></br>
                   <div>
                       <label>courses : </label>
                       <select name="courses" 
                        value = {form.courses} 
                        onChange={(e)=>handlechange(e)}
                       >
                           <option value="react">react</option>
                           <option value="nodejs">nodejs</option>
                           <option value="mongodb<">mongodb</option>
                           <option value="aws">aws</option>
                       </select>
                   </div><br></br>
                   <div>
                       <button type="submit" onClick= {handleSubmit} >Submit</button>&nbsp;&nbsp;
                       <button type="button">Reset</button>&nbsp;&nbsp;
                   </div>
               </forms>
            </div>
    );
}

