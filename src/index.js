import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import './i18n';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={(<div>Loading...</div>)}>
      <Provider store={store}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
          />
      </Provider>
  </Suspense>,
  document.getElementById('root')
);
reportWebVitals();
