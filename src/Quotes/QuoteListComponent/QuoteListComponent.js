import QuoteComponent from '../QuoteComponent/QuoteComponent';
import './QuoteListComponent.scss';

function QuoteListComponent(props) {
  return (
    <div className="quote-list--wrapper">
      <div>
        <h3>Quotes</h3>
      </div>
      {props.quotes.length > 0 ? (
        <div className="ui divided items">
          {props.quotes.map((quote) => {
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

export default QuoteListComponent;
