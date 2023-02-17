import React, { useState } from "react";
import { BlogSnackbar } from "../snackbar/BlogSnackbar";

export const HomeUserCard = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const onDelete = async (id) => {
    setOpen(true);
    setMessage("Deleted successfully");
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // setBlogs(data);

        window.location.reload();
      });
  };
  return (
    <div className="card">
      <BlogSnackbar open={open} message={message} />
      <div className="card-header">
        <img
          src={`${props.data.imagestr}`}
          alt="ballons"
        />
      </div>

      <div className="card-body">
        {/* <span className="tag tag-purple">Popular</span> */}
        <div className="user-info" style={{ marginBottom: "10px" }}>
          <small>1w ago</small>
        </div>
        <h4>{props.data?.title}</h4>
        <p style={{ marginTop: "10px" }}>{props.data.content[0]}</p>
        <div className="user" style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 10, width: "100%" }}>
            <button className="button" type="button">
              Edit
            </button>
            <button
              className="button-danger"
              type="button"
              onClick={() => onDelete(props.data.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
