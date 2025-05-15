import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Welmess = () => {
  const [messageType, setMessageType] = useState("regular");
  const [contentType, setContentType] = useState("text");
  const [messageBody, setMessageBody] = useState("");

  return (
    <div className="modal-dialog modal-lg shadow border rounded-3 p-4 bg-white">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <h5 className="fw-bold text-primary">CONFIGURE WELCOME MESSAGE</h5>
        <button className="btn btn-sm btn-light border-0">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {/* Message Type */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Select Message Type:</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="preApproved"
            name="messageType"
            checked={messageType === "preapproved"}
            onChange={() => setMessageType("preapproved")}
          />
          <label htmlFor="preApproved" className="form-check-label">
            Pre-approved template message
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="regular"
            name="messageType"
            checked={messageType === "regular"}
            onChange={() => setMessageType("regular")}
          />
          <label htmlFor="regular" className="form-check-label">
            Regular message
          </label>
        </div>
      </div>

      {/* Type */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Type:</label>
        <div className="d-flex gap-3">
          {["text", "image", "video", "document"].map((type) => (
            <div className="form-check" key={type}>
              <input
                type="radio"
                className="form-check-input"
                id={type}
                name="contentType"
                checked={contentType === type}
                onChange={() => setContentType(type)}
              />
              <label htmlFor={type} className="form-check-label text-capitalize">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Message Body */}
      <div className="mb-4">
        <label htmlFor="messageBody" className="form-label fw-semibold">
          Message Body <span className="text-danger">*</span>
        </label>
        <textarea
          id="messageBody"
          className="form-control"
          rows="4"
          maxLength={4096}
          placeholder="Enter your message here"
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-between mt-2">
          <div>
            <button className="btn btn-sm btn-light fw-bold me-1">B</button>
            <button className="btn btn-sm btn-light fst-italic me-1">I</button>
            <button className="btn btn-sm btn-light text-decoration-underline me-1">U</button>
            <button className="btn btn-sm btn-light"><i className="bi bi-emoji-smile"></i></button>
          </div>
          <small>{messageBody.length}/4096</small>
        </div>
      </div>

      {/* WhatsApp Preview */}
      <div className="mb-4">
        <div className="border rounded shadow-sm p-3 bg-light" style={{ maxWidth: "350px" }}>
          <div className="mb-2">
            <span className="badge bg-success">
              <i className="bi bi-whatsapp"></i> WA
            </span>
          </div>
          <div className="text-muted" style={{ whiteSpace: "pre-wrap" }}>
            Hi , please find details in attached pdf as discussed over call and click on demo link to explore demo.  
            id :demo password : 1289  
            <br />
            Thank You 
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-outline-secondary">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};

export default Welmess;
