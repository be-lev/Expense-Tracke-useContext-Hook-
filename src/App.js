import "./App.css";
import { Headers } from "./components/Headers";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransction } from "./components/AddTransction";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Headers />
      <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransction />
      </div>
    </GlobalProvider>
  );
}

export default App;
