import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
}


export function Button({ children, ...props }: ButtonProps): JSX.Element {
  return <button {...props}>{children}</button>
}
