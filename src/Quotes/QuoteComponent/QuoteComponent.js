import { useContext, useState } from 'react';
import QuotesContext from '../QuotesContext';
import './QuoteComponent.scss';

function QuoteComponent(props) {
  const [isRemoving, setRemoving] = useState(false);
  const { removeQuote } = useContext(QuotesContext);

  function handleRemoving() {
    removeQuote(props.quote);

    setRemoving(true);
  }

  return (
    <div className="item">
      <div className="middle aligned content">
        <div className="header">{props.quote.phrase}</div>
        <div className="description">{props.quote.author}</div>

        <div className="extra">
          <div className="ui right floated">
            {isRemoving ? (
              <i className="spinner loading icon"></i>
            ) : (
              <i className="close icon" onClick={handleRemoving}></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteComponent;
