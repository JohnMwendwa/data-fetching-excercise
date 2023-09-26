import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate("/");
  };
  return createPortal(
    <>
      <div id="backdrop" onClick={closeModalHandler} />
      <dialog className="modal" open>
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
