import { Component } from 'react';
import './QuoteComponent.scss';
import QuotesContext from '../QuotesContext';

class QuoteComponent extends Component {
  static contextType = QuotesContext;

  constructor(props) {
    super(props);

    this.removeClicked = this.removeClicked.bind(this);
  }

  removeClicked(event) {
    this.context.removeQuote(this.props.quote);
  }

  render() {
    return (
      <div className="quote--wrapper">
        <div className="ui grid">
          <div className="two column row">
            <div className="left fifteen wide floated column">
              <div>Quote {this.props.quote.id}</div>
              <div>{this.props.quote.phrase}</div>
              <div>{this.props.quote.author}</div>
            </div>
            <div className="right one wide center aligned floated column">
              <i className="close icon" onClick={this.removeClicked}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteComponent;
