import { cva, VariantProps } from "class-variance-authority"
import { FC } from "react";
import Link from "next/link";
import { cn } from "../../utilities/cs";

const ButtonVariants = cva(
  'p-3 rounded flex items-center align-center justify-center transition',
  {
    variants: {
      type: {
        outlined: 'border-[1px] border-[#4B8078] text-[#4B8078]',
        contained: 'bg-[#4B8078] text-white',
        text: 'bg-transparent text-[#4B8078] hover:bg-[#EDF2F1]'
      }
    },
    defaultVariants: {
      type: 'outlined'
    }
  }
)

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  buttonText: string,
  type: 'outlined' | 'contained' | 'text',
  href: string,
}

const HrefButton: FC<ButtonProps> = ({
  buttonText,
  href,
  type,
}) => {
  return (
    <Link
      href={href}
      className={cn(
      ButtonVariants({
        type
      })
    )}>
      <p className="text-xs">{buttonText}</p>
    </Link>
  );
}
 
export default HrefButton;
