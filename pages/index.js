import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>¡Hola mundo!</h1>

        <style jsx>{`
            h1 {
                color: red
            }
        `}</style>

        <style jsx global>{`
            body {
                background-color: yellow
            }
        `}</style>
      </div>
    )
  }
}
