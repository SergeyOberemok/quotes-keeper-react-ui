import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';
import AddNewQuoteComponent from '../AddNewQuoteComponent/AddNewQuoteComponent';
import QuoteListComponent from '../QuoteListComponent/QuoteListComponent';
import QuotesContext from '../QuotesContext';
import { API_URLS } from '../../core';

import './QuotesComponent.scss';

function QuotesComponent() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isAdding, setAdding] = useState(false);

  useEffect(() => {
    Axios.get(API_URLS.quotes.read)
      .then((response) => response.data)
      .then((quotes) => setQuotes(quotes))
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  function addNewQuote(quote) {
    setAdding(true);

    Axios.post(API_URLS.quotes.create, quote)
      .then((response) => response.data)
      .then((newQuote) => {
        setQuotes([...quotes, newQuote]);
      })
      .then(() => NotificationManager.success('Quote added successfully', 'New quote'))
      .then(() => setAdding(false))
      .catch(console.error);
  }

  function removeQuote(quote) {
    Axios.delete(API_URLS.quotes.delete.replace('<id>', quote._id))
      .then((response) => {
        const index = quotes.findIndex((item) => item._id === quote._id);

        quotes.splice(index, 1);

        setQuotes([...quotes]);
      })
      .then(() => NotificationManager.warning('Quote was deleted', 'Delete quote'))
      .catch(console.error);
  }

  return (
    <QuotesContext.Provider
      value={{
        addNewQuote,
        removeQuote,
      }}
    >
      <div className="ui container">
        {isLoading ? (
          <i className="spinner loading icon"></i>
        ) : (
          <QuoteListComponent quotes={quotes} />
        )}

        <div className="ui divider"></div>

        <div className="ui one column centered grid">
          <div className="one column centered row">
            <div className="center aligned column">
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                disabled={quotes.length < 5}
                totalPages={3}
              />
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        <AddNewQuoteComponent disabled={isAdding} />
      </div>
    </QuotesContext.Provider>
  );
}

export default QuotesComponent;
