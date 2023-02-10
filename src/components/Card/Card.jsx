import "./styles.css";

export const Card = (props) => {
  const { name, time } = props;
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
};
