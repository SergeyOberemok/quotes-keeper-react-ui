import React, { useState } from 'react';
import { Quote } from '../../BL';
import AddNewQuoteComponent from '../AddNewQuoteComponent/AddNewQuoteComponent';
import QuoteListComponent from '../QuoteListComponent/QuoteListComponent';
import QuotesContext from '../QuotesContext';
import './QuotesComponent.scss';

function QuotesComponent() {
  const [quotes, setQuotes] = useState(
    Array.from({ length: 5 }, (quote, i) => new Quote({ id: ++i }))
  );
  const [counter, setCounter] = useState(5);

  function addNewQuote(quote) {
    const newQuote = { ...quote, id: counter + 1 };

    setCounter(newQuote.id);
    setQuotes([...quotes, newQuote]);
  }

  function removeQuote(quote) {
    const index = quotes.findIndex((item) => item.id === quote.id);

    quotes.splice(index, 1);

    setQuotes([...quotes]);
  }

  return (
    <QuotesContext.Provider
      value={{
        addNewQuote,
        removeQuote,
      }}
    >
      <div className="ui container">
        <QuoteListComponent quotes={quotes} />

        <div className="ui divider"></div>

        <AddNewQuoteComponent />
      </div>
    </QuotesContext.Provider>
  );
}

export default QuotesComponent;
