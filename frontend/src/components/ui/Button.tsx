import { ReactElement } from "react";

interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;//ReactElement?
    endIcon?:ReactElement;
    onClick?:() => void;
}

const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}

const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

const defaultStyles="rounded-md flex font-light justify-center items-center"

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${[sizeStyles[props.size]]}`}>
        <div className="pr-2">
          {props.startIcon}
        </div>
        {props.text}
        {props.endIcon}
    </button>
  )
}

export default Button