import { useContext, useState } from 'react';
import { Quote } from '../../BL/quote';
import QuotesContext from '../QuotesContext';
import './AddNewQuoteComponent.scss';

function useNewQuoteInputHandler(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    input: {
      value,
      onChange: handleChange,
    },
    value: () => value,
    clear: () => setValue(defaultValue ),
  };
}

function AddNewQuoteComponent(props) {
  const { addNewQuote } = useContext(QuotesContext);
  const inputHandler = useNewQuoteInputHandler('');

  function handleSubmit(event) {
    event.preventDefault();

    if (inputHandler.value()) {
      addNewQuote(new Quote({ phrase: inputHandler.value() }));
    }

    inputHandler.clear();
  }

  return (
    <div className="add-new-quote--wrapper">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="phrase">Phrase</label>
          <input type="text" id="phrase" {...inputHandler.input} placeholder="phrase" />
        </div>
        <button className="ui button" type="submit">
          Add new quote
        </button>
      </form>
    </div>
  );
}

export default AddNewQuoteComponent;
