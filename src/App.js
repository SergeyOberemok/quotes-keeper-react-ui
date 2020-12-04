import { useState, memo, useCallback } from 'react';
import { Quote } from './BL';
import './App.scss';
import QuoteListComponent from './Quotes/QuoteListComponent/QuoteListComponent';
import AddNewQuoteComponent from './Quotes/AddNewQuoteComponent/AddNewQuoteComponent';

const App = memo(() => {
  const [quotes, setQuotes] = useState(() =>
    Array.from({ length: 5 }, (quote, i) => new Quote({ id: ++i }))
  );

  const addNewQuote = useCallback(
    (quote) => {
      setQuotes([...quotes, { ...quote, id: quotes.length + 1 }]);
    },
    [quotes, setQuotes]
  );

  return (
    <div className="App">
      <header></header>

      <main className="ui container">
        <QuoteListComponent quotes={quotes} />

        <div className="ui divider"></div>

        <AddNewQuoteComponent addNewQuote={addNewQuote} />
      </main>
    </div>
  );
});

export default App;
