import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Welmess = () => {
  const [messageType, setMessageType] = useState("regular");
  const [contentType, setContentType] = useState("text");
  const [messageBody, setMessageBody] = useState("");

  const handleSave = () => {
    console.log("save clicked");
  };

  return (
    <div className="modal-dialog modal-lg shadow rounded-3 border p-4 bg-white">
      <h5 className="fw-bold mb-4 text-primary">CONFIGURE WELCOME MESSAGE</h5>

      <div className="mb-4">
        <label className="form-label fw-semibold">Select Message Type:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="messageType"
            id="preApproved"
            value="preapproved"
            checked={messageType === "preapproved"}
            onChange={() => setMessageType("preapproved")}
          />
          <label className="form-check-label" htmlFor="preApproved">
            Pre-approved template message
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="messageType"
            id="regular"
            value="regular"
            checked={messageType === "regular"}
            onChange={() => setMessageType("regular")}
          />
          <label className="form-check-label" htmlFor="regular">
            Regular message
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Type:</label>
        <div className="d-flex gap-3">
          {["text", "image", "video", "document"].map((type) => (
            <div className="form-check" key={type}>
              <input
                className="form-check-input"
                type="radio"
                name="contentType"
                id={type}
                value={type}
                checked={contentType === type}
                onChange={() => setContentType(type)}
              />
              <label className="form-check-label text-capitalize" htmlFor={type}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="messageBody" className="form-label fw-semibold">
          Message Body <span className="text-danger">*</span>
        </label>
        <textarea
          className="form-control"
          id="messageBody"
          rows="4"
          maxLength={4096}
          placeholder="Enter your message here"
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <div className="d-flex justify-content-between mt-1">
          <div>
            <button className="btn btn-sm btn-light me-2 fw-bold">B</button>
            <button className="btn btn-sm btn-light me-2 fst-italic">I</button>
            <button className="btn btn-sm btn-light me-2 text-decoration-underline">U</button>
            <button className="btn btn-sm btn-light">😊</button>
          </div>
          <small>{messageBody.length}/4096</small>
        </div>
      </div>

      <div className="mb-4">
        <div className="bg-light border rounded p-3 shadow-sm" style={{ maxWidth: "300px" }}>
          <div className="mb-2">
            <span className="badge bg-success me-2">
              <i className="bi bi-whatsapp"></i> WA
            </span>
          </div>
          <div className="text-muted" style={{ whiteSpace: "pre-wrap" }}>
            Hi {`{1}`}, please find details in attached pdf as discussed over call and click on demo link to explore demo.  
            id :demo password : 1289  
            Thank You {`{2}`}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-outline-secondary">Cancel</button>
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Welmess;
