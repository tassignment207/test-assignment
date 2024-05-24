import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  ...props
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 max-w-button mx-auto ${props.className}`}
    {...props}>
    {children}
  </button>
);

export default Button;
