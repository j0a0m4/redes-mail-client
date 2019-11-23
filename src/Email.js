import React, { Component } from 'react'
import './Email.css'

class Email extends Component {
  state = {
    from: '',
    to: '',
    subject: '',
    text: ''
  }

  handleEmail = async message => {
    const API_URL = 'http://localhost:9000/send'
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(message)
    }
    const res = await fetch(API_URL, options)
    console.log(res)
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    console.log(this.state)
    this.handleEmail(this.state)
    this.setState({ from: '', to: '', subject: '', text: '' })
  }

  render() {
    return (
      <div className="Email">
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">De</label>
            <input
              name="from"
              value={this.state.from}
              onChange={this.handleChange}
              placeholder="Ex: example@provider.com"
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">Para</label>
            <input
              name="to"
              value={this.state.to}
              onChange={this.handleChange}
              placeholder="Ex: example@provider.com"
              type="text"
              id="to"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <input
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              placeholder="Ex: Confirmar reunião"
              type="text"
              className="form-control"
              id="subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="texto">Mensagem</label>
            <textarea
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Texto"
              className="form-control"
              rows="5"
              id="texto"
              name="text"
            ></textarea>
          </div>
          <button className="btn btn-outline-primary">Enviar email</button>
        </form>
      </div>
    )
  }
}

export default Email
