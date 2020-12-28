import { memo } from 'react';
import './App.scss';
import QuotesComponent from './Quotes/QuotesComponent/QuotesComponent';

const App = memo(() => {
  return (
    <div className="App">
      <header></header>

      <main>
        <h2 className="ui center aligned header">Quotes</h2>

        <QuotesComponent />
      </main>
    </div>
  );
});

export default App;
