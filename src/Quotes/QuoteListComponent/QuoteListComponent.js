import QuoteComponent from '../QuoteComponent/QuoteComponent';
import './QuoteListComponent.scss';

function QuoteListComponent(props) {
  return (
    <div className="quote-list--wrapper">
      {props.quotes.length > 0 ? (
        <div className="ui divided items">
          {props.quotes.map((quote, index) => {
            return <QuoteComponent key={index} quote={quote} />;
          })}
        </div>
      ) : (
        <p>Quote list is empty</p>
      )}
    </div>
  );
}

export default QuoteListComponent;
