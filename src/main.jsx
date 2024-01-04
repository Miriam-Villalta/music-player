import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './stylesheet/App.scss'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
