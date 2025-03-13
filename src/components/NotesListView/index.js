import { Component } from "react";


class NotesListView extends Component{
    state = {title:"",content:"",created_at:new Date(),updated_at:new Date(),pinned:false,archieved:false}    

componentDidMount(){
    this.getNotes()
}
getNotes = async () => {
    const response = await fetch("https://notes-app-7-3who.onrender.com")
    if (response.ok){
        const data = await response.json()
        console.log(data)
    }else{
        response.send("Fail")
    }
}


    onSubmitForm = (event) => {
        event.preventDefault()
    }


    render (){
        return (
            <>
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input/>
                    <input/>
                    <button type="submit">Add</button>
                </form>
            </div>
            </>
        )
    }
}
export default NotesListView