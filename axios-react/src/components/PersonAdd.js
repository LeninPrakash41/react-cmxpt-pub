import React from 'react'
import axios from 'axios'

export default class PersonAdd extends React.Component{
    state = {
        name: ''
    }

//Write code for Handle Change Event

handleChange = event =>{
    this.setState({name: event.target.value})
}

handleSubmit = event =>{
    event.preventDefault();

    const user = {
        name: this.state.name
    }   

    // Access API call to POST the data

    axios.post('https://jsonplaceholder.typicode.com/users', {user}).then(response => { console.log(response); console.log(response.data);
    })
}



render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>

                <label>
                Person Name: 
                <input type="text" name ="name" onChange={this.handleChange} />
                </label>
                
                <button type="submit"> Add User </button>

            </form>

        </div>
    )
}

}