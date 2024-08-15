/* eslint-disable react/prop-types */
const Card = ({ children, title }) => {
  return (
    <div className="card card-bordered bg-slate-200 p-10">
      <p className="card-title font-bold">{title}</p>

      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
