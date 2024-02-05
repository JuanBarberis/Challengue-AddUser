
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Loggin from './src/screens/Loggin';
import AppNavigator from './src/nav/AppNavigator';
import Home from './src/screens/Home';

export default function App() {

  return (

    <Provider store={store}>
      <Home/>
    </Provider>

  );
}


