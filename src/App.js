import './App.css';
import CurrenciesList from './components/currenciesList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <CurrenciesList />
    </Provider>
  );
}

export default App;