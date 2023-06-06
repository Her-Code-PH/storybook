import { cva, VariantProps } from "class-variance-authority"
import { FC, MouseEventHandler } from "react";
import { cn } from "../../utilities/cs";

const ButtonVariants = cva(
  'my-1 py-2 rounded flex align-center justify-center min-w-[100px]',
  {
    variants: {
      type: {
        outlined: 'border-[1px] border-[#4B8078] text-[#4B8078]',
        contained: 'bg-[#4B8078] text-white'
      }
    },
    defaultVariants: {
      type: 'outlined'
    }
  }
)

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  buttonText: string,
  type: 'outlined' | 'contained',
  onClick: MouseEventHandler
}

const ActionButton: FC<ButtonProps> = ({
  buttonText,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
      ButtonVariants({
        type
      })
    )}>
      <p>{buttonText}</p>
    </button>
  );
}
 
export default ActionButton;
