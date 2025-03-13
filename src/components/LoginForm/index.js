import {Component} from "react"

import Cookies from "js-cookie"

import "./index.css";

class LoginForm extends Component{
    state = {name:"",password:"",showSubmitError:false,errorMsg:""}

    onSubmitSuccess = (jwtToken) => {
        Cookies.set("jwt_token",jwtToken,{expires:30})
        console.log(jwtToken)
    }

    onSubmitFailure = errorMsg => {
        this.setState({showSubmitError:true,errorMsg})
    }

    onSubmitForm = async event => {
        event.preventDefault()
        const {name,password} = this.state
        const userDetails = {name,password}
        const url = "https://notes-app-7-3who.onrender.com/login"
        const options = {

            method: "POST",
    
            headers: { 
    
                "Content-Type": "application/json",
    
                "Accept": "application/json"
    
            },
    
            body: JSON.stringify(userDetails),
    
            mode: "cors"
    
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true){
            this.onSubmitSuccess(data.jwt_token)
        }else{
            this.onSubmitFailure(data.error_msg)
        }
        
    }


    onChangeUsername = (event) => {
        this.setState({name:event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password:event.target.value})
    }


renderUsernameFeild = () => {
    const {name} = this.state
    return (
        <div>
            <label htmlFor="username">USERNAME</label>
            <input type="text" placeholder="Username" value={name} id ="username" onChange={this.onChangeUsername}/>
        </div>
    )
}

renderPasswordField = () => {
    const {password} =this.state
    return (
        <div>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="Password" id="password" value={password} onChange={this.onChangePassword}/>
        </div>
    )
}

    render (){
    return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    {this.renderUsernameFeild()}
                    {this.renderPasswordField()}
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}
export default LoginForm