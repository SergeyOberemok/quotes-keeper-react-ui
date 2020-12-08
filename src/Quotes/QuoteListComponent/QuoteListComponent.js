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
        {this.props.quotes.length > 0 ? (
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
        ) : (
          <p>Quote list is empty</p>
        )}
      </div>
    );
  }
}

export default QuoteListComponent;
