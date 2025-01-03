import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Popup from './components/popup/Popup';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowPopup = () => {
    setPopupMessage('This is a simple popup!');
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal} className="open-modal-btn">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Sample Modal">
        <p>This is a simple modal popup using React and TypeScript.</p>
      </Modal>

      <button onClick={handleShowPopup} className="show-popup-btn">
        Show Popup
      </button>

      {/* 팝업 컴포넌트 */}
      {popupMessage && <Popup message={popupMessage} duration={3000} />}
    </div>
  );
};

export default App;
