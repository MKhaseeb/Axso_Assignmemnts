import React from "react";
import { useState } from "react";


const HomeCompnenet = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    //validation
    const [fistnameError, setfirstnameError] = useState("")
    const [lastnameError, setlastnameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState("")


    const createUser = (e) =>{
        e.preventDefault();

        const newUser= {firstname , lastname , email , password , confirmpassword};
        console.log(newUser);
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")
        setHasBeenSubmitted(true)
    };
    // const formMessage = () =>{
    //     if (hasBeenSubmitted)
    //         return"Thank you!"
    //     else
    //         return"Please sumbit the form"
    // } 


    //validation
    const handelFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 1){
            setfirstnameError("Firstname is required!")
        }
        else if(e.target.value.length < 2){
            setfirstnameError("First name need be greater than 2 char")
        }
        else{
            setfirstnameError("")
        }
    }
    console.log(handelFirstname);

    const handelLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 1){
            setlastnameError("Last name is required!")
        }
        else if(e.target.value.length < 2){
            setlastnameError("Last name need be greater than 2 char")
        }
        else{
            setlastnameError("")
        }
    }
    console.log(handelLastname);

    const handelEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 1){
            setemailError("Email is required!")
        }
        else if(e.target.value.length < 10){
            setemailError("Email need be greater than 10 char")
        }
        else{
            setemailError("")
        }
    }
    console.log(handelEmail);
    
    const handelPassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 1){
            setpasswordError("Password is required!")
        }
        else if(e.target.value.length < 12){
            setpasswordError("Password need be greater than 12 char")
        }
        else{
            setpasswordError("")
        }
    }
    console.log(handelPassword);
    
    const handelConfirmPassword = (e) => {
        setConfirmpassword(e.target.value)
        if (e.target.value.length < 1){
            setconfirmPasswordError("Please confirm your password!")
        }
        else if(e.target.value !== password){
            setconfirmPasswordError("Passwords do not match")
        }
        else{
            setconfirmPasswordError("")
        }
    }
    console.log(handelConfirmPassword);
    
    return(
        <form onSubmit={ createUser }>
            {/* {
            (e) => e.preventDefault()
            } */}
            {
            hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
        <div>
            <label>First Name: </label>
            <input type="text" value={firstname} onChange={(handelFirstname)} />
        {
                fistnameError ?
                <p>{fistnameError}</p>:
                ""
            }
        </div>
        <div>
            <label>Last Name: </label>
            <input type="text" value={lastname} onChange={(handelLastname)} />
            {
                lastnameError ?
                <p>{lastnameError}</p>:
                ""
            }
        </div>

        <div>
            <label>Email: </label>
            <input type="text" value={email} onChange={(handelEmail)} />
            {
                emailError ?
                <p>{emailError}</p>:
                ""
            }
        </div>
        <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={(handelPassword)} />
            {
                passwordError ?
                <p>{passwordError}</p>:
                ""
            }
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmpassword} onChange={(handelConfirmPassword)} />
            {
                confirmPasswordError ?
                <p>{confirmPasswordError}</p>:
                ""
            }
        </div>
        <button type="submit" disabled={
    fistnameError || lastnameError || emailError || passwordError || confirmPasswordError 
}>Submit</button>

        </form>

    )

    
}


export default HomeCompnenet;