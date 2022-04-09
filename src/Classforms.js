import React, { Component } from 'react';

export default class Classforms extends Component {
    constructor() {
        super();
        this.state = {
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
        }
    }
    handleSubmit = (e) => {
     e.preventDefault();
     let err = Object.keys(this.state).filter((keys)=>{
        if(this.state[keys]==="" && keys != 'errors'){
            return keys
        }
      
     })
     
     if(err.length>=1){
        console.error('please fill all fields')
    }else{
        console.log(this.state)
    }
     
     
    }
    handlechange = (e) => {
        let errors = {...this.state.errors};
        if(e.target.value === ''){
            errors[e.target.name] = `${e.target.name} is required`;
        }else{
            errors[e.target.name] = ''
        }
        this.setState({errors, [e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
               <h3>Class forms</h3> 
               <forms>
                   <div>
                       <label>First Name : </label>
                       <input type="text" name="FirstName"  
                       value = {this.state.FirstName} 
                       onChange={(e)=>this.handlechange(e)}/><br></br>
                       <span style={{color: "red"}}>{this.state.errors.FirstName}</span>
                   </div><br></br>
                   <div>
                       <label>Last Name : </label>
                       <input type="text" name="lastName" 
                        value = {this.state.lastName} 
                        onChange={(e)=>this.handlechange(e)}/>
                        <span style={{color: "red"}}>{this.state.errors.lastName}</span>
                   </div><br></br>
                   <div>
                       <label>Email : </label>
                       <input type="text" name="Email"
                        value = {this.state.Email} 
                        onChange={(e)=>this.handlechange(e)} />
                        <span style={{color: "red"}}>{this.state.errors.Email}</span>
                   </div><br></br>
                   <div>
                       <label>Gender: </label>
                       <input type="radio" name="gender" 
                        value="male" 
                       
                        onChange={(e)=>this.handlechange(e)}/>
                        <span style={{color: "red"}}>{this.state.errors.gender}</span>
                        Male
                       <input type="radio" name="gender" value="female"
                        
                        onChange={(e)=>this.handlechange(e)}
                        />
                        <span style={{color: "red"}}>{this.state.errors.gender}</span> 
                        Female
                   </div><br></br>
                   <div>
                       <label>courses : </label>
                       <select name="courses" 
                        value = {this.state.courses} 
                        onChange={(e)=>this.handlechange(e)}
                       >
                           <option value="react">react</option>
                           <option value="nodejs">nodejs</option>
                           <option value="mongodb<">mongodb</option>
                           <option value="aws">aws</option>
                       </select>
                   </div><br></br>
                   <div>
                       <button type="submit" onClick= {this.handleSubmit} >Submit</button>&nbsp;&nbsp;
                       <button type="button">Reset</button>&nbsp;&nbsp;
                   </div>
               </forms>
            </div>
        );
    }
}

