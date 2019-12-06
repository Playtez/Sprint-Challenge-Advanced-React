import React from "react";

import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/NavBar";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("new data state");
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          {this.state.data.map(user => {
            return (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                country={user.country}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
