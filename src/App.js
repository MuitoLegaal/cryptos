import './App.css';
import CoinsList from './components/coinsList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <CoinsList />
    </Provider>
  );
}

export default App;