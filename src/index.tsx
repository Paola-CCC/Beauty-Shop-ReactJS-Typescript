import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { showCartFromLocalstorage } from './redux/cart/cartSlice';
import { getproductList } from './redux/products/productsActions';
import { showUserIsLogged } from './redux/auth/authSlice';
import { handleStorage } from './redux/products/productsSlice';

store.getState();
store.dispatch(showCartFromLocalstorage());
store.dispatch(handleStorage());

store.dispatch(getproductList());
store.dispatch(showUserIsLogged());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
