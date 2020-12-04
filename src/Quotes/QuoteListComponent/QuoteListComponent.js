import { Component } from 'react';
import QuoteComponent from '../QuoteComponent/QuoteComponent';
import './QuoteListComponent.scss';

class QuoteListComponent extends Component {
  render() {
    return (
      <div className="quote-list--wrapper">
        <div>
          <h3>Quotes</h3>
        </div>
        <div className="ui divided items">
          {this.props.quotes.map((quote) => {
            return (
              <div className="item" key={quote.id}>
                <div className="content">
                  <QuoteComponent quote={quote} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QuoteListComponent;
