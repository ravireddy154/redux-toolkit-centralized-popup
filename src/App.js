import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import Modal from './components/Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { popupValue } from './services/reducerslice';
import Header from './components/Header/Header';
function App() {
  const dispatch=useDispatch();
  const popupState = useSelector(state => state.loginPopup.value);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
      dispatch(popupValue(true));

      console.log(popupState);
    }

  return (
    <>
    
    
    <div className="App">
      <header className="App-header">
        <Header/>
        <button
         onClick={handleSubmit}
        >
          Show Modal
        </button>
      </header>
    </div>
  </>
  );
}

export default App;
