import { useCallback, useEffect, useRef, useState } from "react"

function useModalWindow(initialValue = false) {
  const [modalOpen, setModalOpen] = useState(initialValue);
  const modalRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [modalOpen, handleClickOutside]);

  return [modalOpen, setModalOpen, modalRef];
}

export default useModalWindow