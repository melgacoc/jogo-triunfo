import React from 'react';
import Form from './components/Form';
import './components/Form.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisable: true,
    hasTrunfo: false,
  }

  isSaveButtonDisable = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr3,
      cardAttr2 } = this.state;
    const verifyStrings = cardName.length === 0
    || cardImage.length === 0
    || cardDescription.length === 0;
    const maxAttr = 90;
    const maxTotalAttr = 210;
    const verifyAttr1 = Number(cardAttr1) < 0 || Number(cardAttr1) > maxAttr;
    const verifyAttr2 = Number(cardAttr2) < 0 || Number(cardAttr2) > maxAttr;
    const verifyAttr3 = Number(cardAttr3) < 0 || Number(cardAttr3) > maxAttr;
    const verifyAttrs = verifyAttr1 || verifyAttr2 || verifyAttr3;
    const maxCardValues = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3);
    const verifyTotalAttr = maxCardValues > maxTotalAttr;
    const buttonIsDisable = verifyStrings || verifyAttrs || verifyTotalAttr;

    this.setState({
      isSaveButtonDisable: buttonIsDisable,
    });
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.isSaveButtonDisable();
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisable } = this.state;

    return (
      <div className="render-box">
        <h1>Tryunfo</h1>
        <Form
          classname="form-box"
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisable={ isSaveButtonDisable }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
