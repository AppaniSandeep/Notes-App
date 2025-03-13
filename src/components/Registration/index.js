import React, { Component } from 'react';



export default class Registration extends Component {
    state = {name:"",email:"",password:"",created_at:new Date()}

    onChangeName = event => {
        this.setState({name:event.target.value})
    }

    onChangeEmail = event => {
        this.setState({email:event.target.value})
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }


    onSubmitForm = async event => {
        event.preventDefault()
        const {name,email,password,created_at} = this.state
        const userDetails = {name,email,password,created_at}
        const url="https://notes-app-7-3who.onrender.com/signup"
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(userDetails),
            mode: "cors"
        }
        const response = await fetch(url,options)
        const data = await response.json();
        if (response.ok === true){
            const {history} = this.props
            console.log("User Registered")
            history.replace("/login")
        }else{
            console.log(data.error_msg)
        }

    }

  render() {
    const {name,email,password} = this.state
    return (
      <div>
        <div>
            <form onSubmit={this.onSubmitForm}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id="name" type="text" placeholder='Enter Name' value={name} onChange={this.onChangeName}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id="email" type="email" placeholder='Enter Email' value={email} onChange={this.onChangeEmail}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id="password" type="password" placeholder='Enter Password' value={password} onChange={this.onChangePassword}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
        
      </div>
    )
  }
}
