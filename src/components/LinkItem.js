import React from "react";

const LinkItem = ({ link, handleDelete }) => {
  const handleDeleteItem = () => {
    handleDelete(link._id);
  };

  return (
    <div className="card m-2 text-center">
      <div className="card-header">
        {link.category}
      </div>
      <div className="card-body">
        <h5 className="card-title">{link.name}</h5>
        <p className="card-text">{link.description}</p>
        <a
          href={link.code}
          className="btn btn-success"
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
        <button className="btn btn-danger ms-1" onClick={handleDeleteItem}>
          delete
        </button>
      </div>
    </div>
  );
};

export default LinkItem;