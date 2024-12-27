import type { FC } from "react";
import { MdClose } from "react-icons/md";

export interface ButtonCloseProps {
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const ButtonClose: FC<ButtonCloseProps> = ({
  className = "",
  iconClassName = "w-5 h-5",
  onClick = () => {},
}) => {
  return (
    <button
      className={`flex size-8 items-center justify-center  rounded-full hover:bg-neutral-700 ${className}`}
      onClick={onClick}
      type="button"
    >
      <span className="sr-only">Close</span>
      <MdClose className={iconClassName} />
    </button>
  );
};

export default ButtonClose;
