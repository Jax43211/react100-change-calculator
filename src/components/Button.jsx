function Button({ onClick }) {
  return (
    <button data-testid="calculate" onClick={onClick}>
      Calculate
    </button>
  );
}

export default Button;
