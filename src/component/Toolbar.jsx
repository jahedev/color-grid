import React from "react"
import { render } from "react-dom"

// import function
import { rowChanged } from "./Table"

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.rowChanged}> Add Column </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Remove Column{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Add Row{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Remove Row{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Fill All{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Fill Uncolored{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Clear All{" "}
        </button>
        <button
          onClick={() => {
            window.alert("Clicked!")
          }}
        >
          {" "}
          Color Select{" "}
        </button>
      </div>
    )
  }
}

export default Toolbar
