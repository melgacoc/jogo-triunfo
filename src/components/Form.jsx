import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <input
          data-testid="name-input"
          name="name"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          name="Desc"
          id=""
          cols="30"
          rows="10"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          data-testid="image-input"
          type="text"
          placeholder="Insira imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          name=""
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        { hasTrunfo }
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
