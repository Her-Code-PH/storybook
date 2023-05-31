import { cn } from "@/utilities/cs";
import { cva, VariantProps } from "class-variance-authority"
import { FC } from "react";

const ButtonVariants = cva(
  'py-2 rounded-full text-sm w-[100px]',
  {
    variants: {
      type: {
        outlined: 'border-[1px] border-white text-white',
        contained: 'bg-white text-black'
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
}

const ActionButton: FC<ButtonProps> = ({
  buttonText,
  type,
}) => {
  return (
    <button className={cn(
      ButtonVariants({
        type
      })
    )}>
      <span className="text-sm">{buttonText}</span>
    </button>
  );
}
 
export default ActionButton;
