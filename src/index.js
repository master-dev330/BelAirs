import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import App from './App';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import store from './redux/ConfigStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
      <App />
      <NotificationContainer />
      <Footer />
    </Provider>
  </React.StrictMode>
);
