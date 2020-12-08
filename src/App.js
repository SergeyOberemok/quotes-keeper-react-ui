import { memo } from 'react';
import './App.scss';
import QuotesComponent from './Quotes/QuotesComponent/QuotesComponent';

const App = memo(() => {
  return (
    <div className="App">
      <header></header>

      <main>
        <QuotesComponent />
      </main>
    </div>
  );
});

export default App;
