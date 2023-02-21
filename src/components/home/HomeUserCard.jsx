import { Chip } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BlogSnackbar } from "../snackbar/BlogSnackbar";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const HomeUserCard = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState();

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
  const getDetails = async () => {
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${props.data.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="card">
      <BlogSnackbar open={open} message={message} />
      <div className="card-header">
        <img src={`${data?.imagestr}`} alt="ballons" />
      </div>

      <div className="card-body">
        {/* <span className="tag tag-purple">Popular</span> */}
        <div className="user-info" style={{ marginBottom: "10px" }}>
          <small>1w ago</small>
          {data?.approved === false && data?.reviewed === true && (
            <Chip
              label="Rejected"
              color="error"
              size="small"
              icon={<DoneAllRoundedIcon />}
              sx={{ ml: 2 }}
            />
          )}
        </div>
        <h4>{data?.title}</h4>
        <p
          className="para-line-clamp"
          style={{
            marginTop: "10px",
          }}
        >
          {data?.content[0]}
        </p>

        <div className="user" style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 10, width: "100%" }}>
            <button className="button" type="button">
              Edit
            </button>
            <button
              className="button-danger"
              type="button"
              onClick={() => onDelete(data?.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
