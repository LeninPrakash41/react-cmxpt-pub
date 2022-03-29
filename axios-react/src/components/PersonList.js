import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component {
    //write a state for empty array 

    state = {
        persons: []
    }

    // Call the API - Data is ususally retrieved in a LifeCycle Method name componentDidmount.

    // rendered and put into the DOM. Also, we have access to "this.state" which we need to store the retrieved data from the API.

    // GET - transfer teh data over the URL (parameters), 
    // POST - transfer the data via body (parameters ) as JSON.
    
    componentDidMount(){
        //axios.get() - send request to base URL

        // Status Code and Data 
        // Sucess - 200, Server Error - 500, Not found - 404


        axios.get('https://jsonplaceholder.typicode.com/users').then(response => { const persons = response.data;
        this.setState({ persons });
        })
    }


    render() {
        return (
            <ul>
                {
                    this.state.persons.map(person => <li key={person.id} >{person.name}</li>)
                }
            </ul>
        )

    }

}