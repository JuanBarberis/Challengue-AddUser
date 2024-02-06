import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Loggin from './src/screens/Loggin';
import Home from './src/screens/Home';
import AddUser from './src/screens/AddUser';
import  IndexNavigator  from './src/nav/IndexNavigator';

export default function App() {

  return (

    <Provider store={store}>
      <IndexNavigator />
    </Provider>

  );
}


