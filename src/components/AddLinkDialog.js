import React from "react";

const AddLinkDialog = ({ category, register, onSubmit, reset }) => {
  return (
    <div className="modal fade" id={`exampleModal${category}`} tabIndex="-1" aria-labelledby={`exampleModal${category}`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add {category} site</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-1">
                <label htmlFor="name" className="col-form-label">Name:</label>
                <input type="text" className="form-control" id="name" name="name" {...register("name", { required: true })} />
              </div>
              <div className="mb-1">
                <label htmlFor="code" className="col-form-label">Url:</label>
                <input type="url" className="form-control" id="code" name="url" {...register("code", { required: true })} />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="col-form-label">Description:</label>
                <input type="text" className="form-control" id="description" name="description" {...register("description", { required: true })} />
              </div>
              <input type="hidden" name="category" value={category} {...register("category")} />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={reset}>Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLinkDialog;
