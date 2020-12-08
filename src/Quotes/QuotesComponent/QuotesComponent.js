import React from 'react';
import AddNewQuoteComponent from '../AddNewQuoteComponent/AddNewQuoteComponent';
import { Quote } from '../../BL';
import QuoteListComponent from '../QuoteListComponent/QuoteListComponent';
import './QuotesComponent.scss';
import QuotesContext from '../QuotesContext';

class QuotesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: Array.from({ length: 5 }, (quote, i) => new Quote({ id: ++i })),
      counter: 5,
    };
  }

  addNewQuote(quote) {
    const counter = this.state.counter + 1;
    const quotes = [...this.state.quotes, { ...quote, id: counter }];

    this.setState({ quotes, counter });
  }

  removeQuote(quote) {
    const quotes = [...this.state.quotes];
    const index = quotes.findIndex((item) => item.id === quote.id);

    quotes.splice(index, 1);

    this.setState({ quotes });
  }

  render() {
    return (
      <QuotesContext.Provider
        value={{
          addNewQuote: this.addNewQuote.bind(this),
          removeQuote: this.removeQuote.bind(this),
        }}
      >
        <div className="ui container">
          <QuoteListComponent quotes={this.state.quotes} />

          <div className="ui divider"></div>

          <AddNewQuoteComponent />
        </div>
      </QuotesContext.Provider>
    );
  }
}

export default QuotesComponent;
