import React from 'react';
import { Quote } from '../../BL/quote';
import './AddNewQuoteComponent.scss';
import QuotesContext from '../QuotesContext';

class AddNewQuoteComponent extends React.Component {
  static contextType = QuotesContext;

  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handlers = {
      form: { onSubmit: this.handleSubmit.bind(this) },
      input: { onChange: this.handleChange.bind(this) },
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.context.addNewQuote(new Quote({ phrase: this.state.value }));

    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="add-new-quote--wrapper">
        <form className="ui form" {...this.handlers.form}>
          <div className="field">
            <label htmlFor="phrase">Phrase</label>
            <input
              type="text"
              id="phrase"
              value={this.state.value}
              {...this.handlers.input}
              placeholder="phrase"
            />
          </div>
          <button className="ui button" type="submit">
            Add new quote
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewQuoteComponent;
