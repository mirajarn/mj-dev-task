/* Summary: The Button component renders a button element with customizable click behavior, content, and CSS class.*/

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;