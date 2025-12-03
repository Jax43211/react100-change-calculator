function Received({ value, onChange }) {
  return (
    <div>
      <label htmlFor="amountReceived">How much was received?</label>
      <input
        data-testid="amountReceived"
        placeholder="Amount Received"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Received;
