
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Loggin from './src/screens/Loggin';

export default function App() {

  return (
  
      <Provider store={store}>
        <Loggin />
      </Provider>
   
  );
}


