
import { Link } from 'react-router-dom';
import '../../css/SignUp.css'
import { useState } from "react";
import { Axios } from 'axios';


function SignUp() {

    const  [firstname, setFirstName] =useState ('')
    const  [lastname, setLastName] = useState ('')
    const  [birthday, setBirthDay] =useState ('')
    const  [gender, setGender] =useState ('')
    const  [email, setEmail] =useState ('')
    const  [password, setPassword] =useState ('')

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/',{firstname,lastname,birthday,gender,email,password})
        .then(result=> console.log(result))

    };

    return (
      <main>
       <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text"
                 id="first-name"
                 name="first-name"
                 onChange={(e)=> setFirstName(e.target.value)}
                 
                 /> 
            </div>
            <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text"
                 id="last-name"
                 name="last-name"
                 onChange={(e)=> setLastName(e.target.value)}
                 
                 />
            </div>
            <div class="input-group">
               
               <label htmlFor="gender">Gender</label>
               <select
                id="gender" 
                name="gender"
                onChange={(e)=> setGender(e.target.value)}
                >
                   <option value="">Select</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                   
               </select>
           </div>
           <div class="input-group">
               <label htmlFor="birthday">Birthday</label>
               <input 
                type="date"
                id="birthday"
                name="birthday"
                onChange={(e)=> setBirthDay(e.target.value)}
                 />
           </div>
           
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? </p> <Link to="/login">LogIn</Link>
    </div>
      </main>
     
    );
  }
  
  export default SignUp;
  