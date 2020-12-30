const Showtodos = ({ todos }) => {
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{todos}</div>
        <div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"></label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Showtodos;
