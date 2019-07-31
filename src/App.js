import React from "react";
import "./App.css";
import Hello from "./Hello";
import NavBar from "./NavBar";
import Login from "./Login";
import TweetBox from "./TweetBox";
import ContactListContainer from "./ContactListContainer";

function App() {
  let messageObj = {
    message: "Good afternoon",
    time: new Date().getMinutes()
  };

  function login(credentials) {
    console.log(credentials);
  }

  function handleSend(message) {
    console.log("Sending message:", message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Settings</li>
          </ul>
        </NavBar>

        <TweetBox onSend={handleSend} />
        <Login onLoginClick={login} />

        <ContactListContainer />

        <p>Welcome to React</p>
        <Hello name="React Class" messageObj={messageObj} />
      </header>
    </div>
  );
}

export default App;
