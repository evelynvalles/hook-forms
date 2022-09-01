import React, { useState } from  'react';

const UserForm = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_ps, setConfirmPs] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first_name, last_name, email, password, confirm_ps };
        console.log("Welcome", newUser);
        setFirstName(""); setLastName(""); setEmail(""); setPassword(""); setConfirmPs("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div className='container'>
                    <div className='box'>
                        <label>First Name: </label> 
                        <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ first_name } />
                    </div>
                    <div className='box'>
                        <label>Last Name: </label> 
                        <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ last_name } />
                    </div>
                    <div className='box'>
                        <label>Email Address: </label> 
                        <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                    </div>
                    <div className='box'>
                        <label>Password: </label>
                        <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                    </div>
                    <div className='box'>
                        <label>Confirm Password: </label>
                        <input type="password" onChange={ (e) => setConfirmPs(e.target.value) } value={ confirm_ps } />
                    </div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
            <h1>Your Form Data</h1>
            <p value={first_name}>First Name: {first_name}</p>
            <p value={last_name}>Last Name: {last_name}</p>
            <p value={email}>Email: {email}</p>
            <p value={password}>Password: {password}</p>
            <p value={confirm_ps}>Confirm Password: {confirm_ps}</p>
        </div>
    );
};

export default UserForm;