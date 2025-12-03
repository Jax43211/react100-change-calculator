function Due({ value, onChange }) {
  return (
    <div>
      <label htmlFor="amountDue">How much is due?</label>
      <input
        data-testid="amountDue"
        placeholder="Amount Due"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Due;
