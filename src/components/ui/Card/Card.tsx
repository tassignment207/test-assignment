interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">{children}</div>
);

export default Card;
