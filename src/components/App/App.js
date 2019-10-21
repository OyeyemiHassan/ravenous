import React from 'react';
import logo from '/Users/mac/ravenous/src/logo.svg';
import './App.css';
import SearchBar from '/Users/mac/ravenous/src/components/SearchBar/SearchBar';
import BusinessList from '/Users/mac/ravenous/src/components/BusinessList/BusinessList';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
    );
  }
}

export default App;
