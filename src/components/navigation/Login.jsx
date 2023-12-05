import React from "react";

export const Login = ({onClick}) => {
  return (
    <form className="d-flex" role="search">
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2" onClick={onClick}>
          Login
        </button>
        <button type="button" className="btn btn-info">
          Sign-up
        </button>
      </div>
    </form>
  );
};
