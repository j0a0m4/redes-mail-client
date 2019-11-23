import React, { Component } from 'react'

class Status extends Component {
  state = {
    status: ''
  }

  componentDidMount() {
    this.checkStatus()
  }

  checkStatus = async () => {
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
        <button
          onClick={this.checkStatus}
          className="btn btn-dark my-2 my-sm-0"
          type="submit"
        >
          Refresh
        </button>
      </div>
    )
  }
}

export default Status
