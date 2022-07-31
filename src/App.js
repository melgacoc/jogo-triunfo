import React from 'react';
import Form from './components/Form';
import './components/Form.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form classname="form-box" />
        <Card />
      </div>
    );
  }
}

export default App;
