import { useContext } from 'react';
import QuotesContext from '../QuotesContext';
import './QuoteComponent.scss';

function QuoteComponent(props) {
  const { removeQuote } = useContext(QuotesContext);

  return (
    <div className="quote--wrapper">
      <div className="ui grid">
        <div className="two column row">
          <div className="left fifteen wide floated column">
            <div>Quote {props.quote.id}</div>
            <div>{props.quote.phrase}</div>
            <div>{props.quote.author}</div>
          </div>
          <div className="right one wide center aligned floated column">
            <i className="close icon" onClick={() => removeQuote(props.quote)}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteComponent;
