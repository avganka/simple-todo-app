import {HTMLAttributes, ReactNode} from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost' | 'success' | 'solid';
}

function Button({children, variant = 'ghost', className, ...props}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.solid]: variant === 'solid',
          [styles.success]: variant === 'success',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
