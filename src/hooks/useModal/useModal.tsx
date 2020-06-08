import { useState } from 'react';

function useModal(isActive = false) {
  const [modalState, setModalState] = useState<boolean>(isActive);

  function toggleModal() {
    return setModalState(!modalState);
  }

  return [modalState, setModalState, toggleModal];
}

export { useModal };
