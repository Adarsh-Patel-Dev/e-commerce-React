const Button = ({ name, className, onClickFunc = () => {} }) => {
    return (
      <button className={`btn ${className}`} onClick={onClickFunc}>
        {name}
      </button>
    );
  };
  
  export { Button };
  