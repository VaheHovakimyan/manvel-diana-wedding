import type { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'light' | 'dark' | 'lightweight';
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps['variant']>, string> = {
  light: 'border-white text-white hover:text-black hover:bg-white',
  dark: 'bg-[#645340] text-[#FAE7CF] border-none hover:opacity-80',
  lightweight: 'bg-[#FAE7CF] text-[#864E35] border-none hover:opacity-80',
};

const Button: FC<ButtonProps> = ({
  text = '',
  onClick,
  className = '',
  type = 'button',
  variant = 'light',
}) => {
  const baseClasses =
    'px-6 py-3 rounded-lg cursor-pointer border transition-all duration-300 ease-in-out hover:scale-[1.02]';
  const variantClass = VARIANT_CLASSES[variant];
  const finalClassName = `${baseClasses} ${variantClass} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} className={finalClassName}>
      {text}
    </button>
  );
};

export default Button;
