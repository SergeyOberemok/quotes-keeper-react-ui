import React from 'react';
import { Quote } from '../../BL/quote';
import './AddNewQuoteComponent.scss';

class AddNewQuoteComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewQuote(new Quote({ phrase: this.state.value }));

    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="add-new-quote--wrapper">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="phrase">Phrase</label>
            <input
              type="text"
              id="phrase"
              value={this.state.value}
              onChange={this.handleChange}
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
