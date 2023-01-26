const FormRowSelect = () => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        status
      </label>
      <select name="status" className="form-select">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  );
};

export default FormRowSelect;
