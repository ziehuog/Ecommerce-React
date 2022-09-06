import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import App from './App';
import './index.css';
import { dataService } from './shares/dataService';

fetch(`https://course-api.com/react-store-products`).then(async (res) => {
  dataService.data = await res.json();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
