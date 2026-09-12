import { ReactNode, useEffect, useRef } from "react";
import "./Modal.css";
import Button from "../Button/Button";
import { X } from "lucide-react";

export default function Modal({
  children,
  show,
  setShow,
}: {
  children: ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutsideModal(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [show]);
  return (
    <div
      className={
        show
          ? "fixed showModal inset-0 w-full h-svh bg-gray-600/50 z-999 flex items-center justify-center"
          : "hidden hideModal fixed inset-0 w-full h-svh bg-gray-600/50 items-center justify-center"
      }
    >
      <div className="modal" ref={modalRef}>
        <div className="absolute top-5 left-10 md:left-20">
          <Button
            onClick={() => setShow(false)}
            theme="normal"
            className="bg-red-600/50 hover:bg-red-600/75 group"
          >
            <X className="group-hover:text-red-400" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
