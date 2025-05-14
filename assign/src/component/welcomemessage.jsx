import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/Frame 2865.png";

const WelcomeMessage = () => {
  const [messageType, setMessageType] = useState("regular");
  const [mediaType, setMediaType] = useState(img);
  const [mediaUrl, setMediaUrl] = useState("https://unsplash.com/photos/people-sitting-at-the-table-");
  const [messageBody, setMessageBody] = useState("Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demo password : 1289\nThank You {{2}}");
  const [variables, setVariables] = useState([
    { name: "1", value: "Mohit" },
    { name: "2", value: "Zara" },
  ]);

  const handleVariableChange = (index, field, value) => {
    const updated = [...variables];
    updated[index][field] = value;
    setVariables(updated);
  };

  const addVariable = () => {
    setVariables([...variables, { name: "", value: "" }]);
  };

  const getPreviewMessage = () => {
    let msg = messageBody;
    variables.forEach(({ name, value }) => {
      msg = msg.replaceAll(`{{${name}}}`, value);
    });
    return msg;
  };

  return (
    <div className="container mt-5">
      <div className="bg-white shadow rounded p-4">
        <h5 className="fw-bold mb-4 text-primary">CONFIGURE WELCOME MESSAGE</h5>

        {/* Message Type */}
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="pre" name="msgType" value="pre" checked={messageType === "pre"} onChange={() => setMessageType("pre")} />
            <label className="form-check-label" htmlFor="pre">Pre-approved template message</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="regular" name="msgType" value="regular" checked={messageType === "regular"} onChange={() => setMessageType("regular")} />
            <label className="form-check-label" htmlFor="regular">Regular message</label>
          </div>
        </div>

        {/* Type */}
        {messageType === "regular" && (
          <div className="mb-3">
            <label className="form-label fw-semibold">Type</label>
            <div className="d-flex gap-3 flex-wrap">
              {["text", "image", "video", "document"].map((type) => (
                <div key={type} className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id={type} name="mediaType" checked={mediaType === type} onChange={() => setMediaType(type)} />
                  <label className="form-check-label text-capitalize" htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Media */}
        {(mediaType !== "text") && (
          <div className="mb-3">
            <label className="form-label fw-semibold">Upload Media File</label>
            <p className="text-muted small">Supported file type: .png / .jpeg | Max size: 5 MB</p>
            <button className="btn btn-primary w-100 mb-2">Upload From Media Library</button>
            <div className="text-center text-muted">or</div>
            <input className="form-control mt-2" placeholder="Enter media URL" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} />
          </div>
        )}

        {/* Variables */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Variables</label>
          {variables.map((v, i) => (
            <div className="row g-2 mb-2" key={i}>
              <div className="col">
                <input className="form-control" placeholder="Variable Name" value={v.name} onChange={(e) => handleVariableChange(i, "name", e.target.value)} />
              </div>
              <div className="col">
                <input className="form-control" placeholder="Value" value={v.value} onChange={(e) => handleVariableChange(i, "value", e.target.value)} />
              </div>
            </div>
          ))}
          <button className="btn btn-outline-primary btn-sm" onClick={addVariable}>Add Variable</button>
        </div>

        {/* Message Body */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Message Body <span className="text-danger">*</span></label>
          <textarea className="form-control" rows="4" value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Enter your message here (max 4096 chars)" maxLength={4096}></textarea>
        </div>

        {/* Preview */}
        <div className="mb-4">
          <div className="border rounded p-3 bg-light shadow-sm" style={{ maxWidth: 450 }}>
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-success me-2">WA</span>
              {mediaUrl && mediaType === "image" && (
                <img src={mediaUrl} alt="preview" className="img-fluid rounded" style={{ maxHeight: 150 }} />
              )}
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>{getPreviewMessage()}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
