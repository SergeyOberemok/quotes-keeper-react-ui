import { Component } from 'react';
import './QuoteComponent.scss';

class QuoteComponent extends Component {
  render() {
    return (
      <div className="quote--wrapper">
        <div>Quote {this.props.quote.id}</div>
        <div>{this.props.quote.phrase}</div>
        <div>{this.props.quote.author}</div>
      </div>
    );
  }
}

export default QuoteComponent;
