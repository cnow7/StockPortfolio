import React from 'react'
var googleFinance = require('google-finance')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    googleFinance.historical({
      symbol: 'NASDAQ:AAPL',
      from: '2016-09-20',
      to: '2016-09-21'
    }, function(err, quotes) {
      if (err) {
        throw err
      }

      this.setState({data: quotes})
    }.bind(this))
  }

  render () {
    return (
      <div>
        { JSON.stringify(this.state.data) }
      </div>
    )
  }
}
