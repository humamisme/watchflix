import { forwardRef } from 'react';
import combineClasses from '../utils/combineClasses';

const classes = {
  base: 'rounded-lg p-2 ring-primary/50 transition hover:ring-2 active:ring active:ring-primary/60',
  disabled: 'opacity-75 cursor-not-allowed',
};

const Button = forwardRef(function Button(
  { type = 'button', className, children, disabled = false, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={combineClasses(
        classes.base,
        disabled ? classes.disabled : '',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
