import {React} from 'react';
import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'
import {GlobalProvider} from './Context/GlobalState.js';

function App() {
    return (
    <GlobalProvider >
      <div className="container">
        <Header/>
        <Balance />
        <IncomeExpenses/>
        <Transactions/>
        <Add/>
      </div>
    </GlobalProvider>
  );
}
export default App;
