import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { popupValue } from '../../services/reducerslice';
import Modal from '../../components/Modal/Modal'
export default function Header() {

  const dispatch=useDispatch();
  const popupState = useSelector(state => state.loginPopup.value);

  const handleSubmit = event => {
    event.preventDefault();
      dispatch(popupValue(true));

      console.log(popupState);
    }


  return (
    <>
    {popupState && (
      <Modal
        onCloseButtonClick={() => {
          dispatch(popupValue(false));
        }}
      />
    )}
    <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li onClick={handleSubmit} >admin</li>
        </ul>
    </div>
    </>
  )
}
