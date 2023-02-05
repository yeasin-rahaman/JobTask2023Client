import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AllOrders from './Components/AllOrders/AllOrders';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route>
            <Route path="/" element={<AllOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
