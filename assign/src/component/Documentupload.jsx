import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomeMessage = () => {
  const [messageType, setMessageType] = useState("regular");
  const [mediaType, setMediaType] = useState("document");
  const [mediaUrl, setMediaUrl] = useState("https://unsplash.com/photos/people-sitting-at-the-table-");
  const [messageBody, setMessageBody] = useState("Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demo password : 1289\n\nThank You {{2}}");
  const [variables, setVariables] = useState([
    { name: "1", value: "Client" },
    { name: "2", value: "Team" }
  ]);

  const handleVariableChange = (index, field, value) => {
    const newVars = [...variables];
    newVars[index][field] = value;
    setVariables(newVars);
  };

  const addVariable = () => {
    setVariables([...variables, { name: "", value: "" }]);
  };

  const renderPreviewMessage = () => {
    let rendered = messageBody;
    variables.forEach(({ name, value }) => {
      rendered = rendered.replaceAll(`{{${name}}}`, value);
    });
    return rendered;
  };

  const renderMediaPreview = () => {
    if (mediaType === "document") {
      return (
        <div className="text-center">
          <i className="bi bi-file-earmark-text fs-1 text-muted"></i>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container my-5">
      <div className="p-4 shadow rounded bg-white">
        <h5 className="mb-4 text-primary fw-bold">CONFIGURE WELCOME MESSAGE</h5>

        {/* Message Type */}
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="template" name="msgType" checked={messageType === "template"} onChange={() => setMessageType("template")} />
            <label className="form-check-label" htmlFor="template">Pre-approved template message</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="regular" name="msgType" checked={messageType === "regular"} onChange={() => setMessageType("regular")} />
            <label className="form-check-label" htmlFor="regular">Regular message</label>
          </div>
        </div>

        {/* Media Type */}
        {messageType === "regular" && (
          <div className="mb-3">
            <label className="form-label fw-semibold">Type</label>
            <div className="d-flex flex-wrap gap-3">
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
            <p className="text-muted small">Supported file type: {mediaType === "document" ? ".pdf, .docx, .xlsx" : ".png / .jpeg"} | Max size: 5 MB</p>
            <button className="btn btn-primary w-100 mb-2">Upload From Media Library</button>
            <div className="text-center text-muted">or</div>
            <input className="form-control mt-2" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} placeholder="Enter media URL" />
          </div>
        )}

        {/* Variables */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Variables</label>
          {variables.map((v, i) => (
            <div key={i} className="row g-2 mb-2">
              <div className="col-6">
                <input className="form-control" placeholder="Variable" value={v.name} onChange={(e) => handleVariableChange(i, "name", e.target.value)} />
              </div>
              <div className="col-6">
                <input className="form-control" placeholder="Value" value={v.value} onChange={(e) => handleVariableChange(i, "value", e.target.value)} />
              </div>
            </div>
          ))}
          <button className="btn btn-outline-secondary btn-sm" onClick={addVariable}>Add Variable</button>
        </div>

        {/* Message Body */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Message Body <span className="text-danger">*</span></label>
          <textarea className="form-control" rows="4" maxLength={4096} placeholder="Enter your message here" value={messageBody} onChange={(e) => setMessageBody(e.target.value)} />
        </div>

        {/* Message Preview */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Preview</label>
          <div className="border p-3 bg-light rounded shadow-sm" style={{ maxWidth: 500 }}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-success">WA</span>
              {renderMediaPreview()}
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>{renderPreviewMessage()}</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
