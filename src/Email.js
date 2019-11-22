import React, { Component } from 'react'

class Email extends Component{
    state = {
        from: "",
        to: "",
        subject: "",
        text: ""
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name || "text"]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        this.setState({from:"", to:"", subject: "", text: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="from" value={this.state.from} onChange={this.handleChange} placeholder="De" type="email"/>
                    <input name="to" value={this.state.to} onChange={this.handleChange} placeholder="Para" type="text"/>
                    <input name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Assunto" type="text"/>
                    <textarea value={this.state.text} onChange={this.handleChange} placeholder="Texto"></textarea>
                    <button>Enviar email</button>
                </form>
            </div>
        )
    }
}

export default Email