import React, { Component } from 'react'

export default class DogIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            url: ''
        }
        this.fetchDog = this.fetchDog.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    async fetchDog(){
        const result = await fetch('https://dog.ceo/api/breeds/image/random')
        const jsonified = await result.json()
        this.setState({
            url: jsonified.message
        })
        console.log('dog successfully fetched')
    }
    
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked')
        this.fetchDog()
    }

    componentDidMount () {
        this.fetchDog()
    }

    componentWillUnmount () {
        console.log('DogFetcher component *will* unmount!')
        clearUrl(this.state.url)
    }

    render(){
    return(
        <div>
            <h1>DogIndex</h1>
            <img src={this.state.url} />
            <button onClick={this.handleClick}>Get Doggie!</button>
        </div>
        );
    }
}

