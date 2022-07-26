import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="name-input" name="name" type="text" />
        <textarea data-testid="description-input" name="Desc" id="" cols="30" rows="10" />
        <input data-testid="attr1-input" type="number" />
        <input data-testid="attr2-input" type="number" />
        <input data-testid="attr3-input" type="number" />
        <input data-testid="image-input" type="text" placeholder="Insira imagem" />
        <select data-testid="rare-input" name="" id="">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <input data-testid="save-button" type="button" value="Salvar" />
      </div>
    );
  }
}

export default Form;
