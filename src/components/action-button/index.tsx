import { cn } from "@/utilities/cs";
import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link";
import { FC } from "react";

const ButtonVariants = cva(
  'mx-1 py-2 rounded flex align-center justify-center w-[100px] last:mr-0 transition hover:-translate-y-1 hover:scale-100',
  {
    variants: {
      type: {
        outlined: 'border-[1px] border-[#4B8078] text-[#4B8078]',
        contained: 'bg-[#4B8078] text-white hover:bg-slate-50 hover:text-[#4B8078]'
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
  href: string,
}

const ActionButton: FC<ButtonProps> = ({
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
      <p>{buttonText}</p>
    </Link>
  );
}
 
export default ActionButton;
