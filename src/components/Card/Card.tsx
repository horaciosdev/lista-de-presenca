import "./styles.css";

type CardProps = {
  name: string;
  time: string;
};

export const Card = (props: CardProps) => {
  const { name, time } = props;
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
};
