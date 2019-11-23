import React, { Component } from 'react'

class Status extends Component {
  state = {
    status: ''
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:9000')
      console.log(res)
      this.setState({ status: 'on' })
    } catch (err) {
      console.log(err)
      this.setState({ status: 'off' })
    }
  }

  render() {
    return (
      <div
        className={`alert ${
          this.state.status === 'on' ? 'alert-success' : 'alert-warning'
        }`}
      >
        <p>Server is {this.state.status || 'Loading...'}</p>
      </div>
    )
  }
}

export default Status
