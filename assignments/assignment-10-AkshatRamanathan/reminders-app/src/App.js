import React, { useState } from 'react';
import './App.scss';
import LeftPane from './components/LeftPane/LeftPane';
import MainContainer from './components/MainContainer/MainContainer';
import ReminderContainer from './components/ReminderContainer/ReminderContainer';
import NewForm from './components/Modal/NewForm';
function App() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <NewForm isOpen={isOpen} toggleModal={toggleModal} />
      <LeftPane toggleModal={toggleModal} />
      <MainContainer>
        <h1 id="header">Reminders</h1>
        <br />
        <ReminderContainer />
      </MainContainer>
    </>
  );
}

export default App;
