import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleRegister = async(e) => {
        e.preventDefault()
        const user={
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('https://fsd-projects-dkcm.onrender.com/users',user)
        alert('User registered successfully')
      }
    return (
    <div>
        <form onSubmit={handleRegister}>
            <label>Name:</label><input type="text" name="name" /> <br/><br/>
            <label>Age:</label><input type="number" name="age"/> <br/><br/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register