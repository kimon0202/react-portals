import React, { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="app">
        <h1>This is the normal page!</h1>
        <button type="button" onClick={() => setShowModal(true)}>
          Open Modal
        </button>
      </div>
      <Modal
        show={showModal}
        onBackdropClick={() => setShowModal(false)}
      >
        <div className="modal-background">
          <h1>Hello from Portal Modal</h1>
        </div>
      </Modal>
    </>
  );
}

export default App;
