import { useContext, useState } from 'react';
import { Quote } from '../../BL/quote';
import QuotesContext from '../QuotesContext';
import './AddNewQuoteComponent.scss';

function useNewQuoteInputsHandler() {
  const defaultValue = '';
  const [phrase, setPhrase] = useState(defaultValue);
  const [author, setAuthor] = useState(defaultValue);

  return {
    inputs: {
      phrase: {
        value: phrase,
        onChange: (event) => setPhrase(event.target.value),
      },
      author: {
        value: author,
        onChange: (event) => setAuthor(event.target.value),
      },
    },
    phrase: () => phrase,
    author: () => author,
    clear: () => {
      setPhrase(defaultValue);
      setAuthor(defaultValue);
    },
  };
}

function AddNewQuoteComponent(props) {
  const { addNewQuote } = useContext(QuotesContext);
  const inputsHandler = useNewQuoteInputsHandler('');

  function handleSubmit(event) {
    event.preventDefault();

    if (inputsHandler.phrase()) {
      addNewQuote(new Quote({ phrase: inputsHandler.phrase(), author: inputsHandler.author() }));
    }

    inputsHandler.clear();
  }

  return (
    <div className="add-new-quote--wrapper">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="twelve wide field">
            <label htmlFor="phrase">Phrase</label>
            <input type="text" id="phrase" {...inputsHandler.inputs.phrase} placeholder="phrase" />
          </div>
          <div className="four wide field">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" {...inputsHandler.inputs.author} placeholder="author" />
          </div>
        </div>
        <button className="ui button" type="submit" disabled={props.disabled}>
          Add new quote
        </button>
      </form>
    </div>
  );
}

export default AddNewQuoteComponent;
