    // import React from 'react'
    import { useState } from 'react'
    import '../assets/styles/Form.css'
    import axios from 'axios'

    const Form = () => {

        const [persone , setPersone]= useState({
            name:'',
            email:'',
            password:'',        })

        let handleChange = (e)=>{
            const { name, value } = e.target; 
            setPersone({
              ...persone,
              [name]: value 
            });
        }
        

        let  handleSubmit = (e)=>{
            e.preventDefault();
           try {
            const resp =  axios.post('http://localhost:5000/user/createuser',{
                name:persone.name,
                email:persone.email,
                password:persone.password
            })
            if(resp){
                alert('user cerated successfuly')
                setPersone({
                    name:'',
                    email:'',
                    password:'',        })
            }else{
                alert('Error creating user')
            }

           } catch (error) {
            console.log(error)
           }
        }

    return (
        <>
        <div className="form-container">
        <form  className="form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
            onChange={handleChange}
            value={persone.name}
                placeholder="Enter your name"
                required
            />
            </div>
            <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                onChange={handleChange}
                value={persone.email}
                placeholder="Enter your email"
                required
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                name="password"
                onChange={handleChange}
                value={persone.password}
                placeholder="Enter your password"
                required
            />
            </div>
            <button type="submit" className="form-submit-btn">
            Sign Up
            </button>
        </form>
        </div> 
        </>
    )
    }

    export default Form