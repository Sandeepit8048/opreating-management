import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const WelcomeForm = () => {
  const [messageType, setMessageType] = useState("preapproved");
  const [templateName, setTemplateName] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [variables, setVariables] = useState([{ name: "1", value: "Mohit" }, { name: "2", value: "Zara" }]);

  const handleVariableChange = (index, field, value) => {
    const updated = [...variables];
    updated[index][field] = value;
    setVariables(updated);
  };

  const addVariable = () => {
    setVariables([...variables, { name: "", value: "" }]);
  };

  const getPreviewText = () => {
    let msg = "Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo.  id :demo password : 1289  Thank You {{2}}";
    variables.forEach(({ name, value }) => {
      const placeholder = new RegExp(`{{${name}}}`, "g");
      msg = msg.replace(placeholder, value);
    });
    return msg;
  };

  return (
    <div className="container mt-5">
      <div className="p-4 border rounded bg-white shadow">
        <h5 className="fw-bold mb-4 text-primary">CONFIGURE WELCOME MESSAGE</h5>

        {/* Message Type */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Message Type</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="msgType"
              id="pre"
              value="preapproved"
              checked={messageType === "preapproved"}
              onChange={() => setMessageType("preapproved")}
            />
            <label className="form-check-label" htmlFor="pre">Pre-approved template message</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="msgType"
              id="reg"
              value="regular"
              checked={messageType === "regular"}
              onChange={() => setMessageType("regular")}
            />
            <label className="form-check-label" htmlFor="reg">Regular message</label>
          </div>
        </div>

        {/* Template Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Template Name <span className="text-danger">*</span></label>
          <select
            className="form-select"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            disabled={messageType === "regular"}
          >
            <option value="">Select</option>
            <option value="welcome-template">Welcome Template</option>
            <option value="followup-template">Follow-up Template</option>
          </select>
        </div>

        {/* Upload Media File */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Media File</label>
          <p className="small text-muted">Supported file type: .png, .jpeg | Max size: 5 MB</p>
          <button className="btn btn-primary w-100 mb-2">Upload From Media Library</button>
          <div className="text-center mb-2">or</div>
          <input
            className="form-control"
            placeholder="Enter media URL"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
          />
        </div>

        {/* Variables Section */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Values</label>
          {variables.map((v, idx) => (
            <div className="row g-2 mb-2" key={idx}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Variable Name"
                  value={v.name}
                  onChange={(e) => handleVariableChange(idx, "name", e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Value"
                  value={v.value}
                  onChange={(e) => handleVariableChange(idx, "value", e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
          <button className="btn btn-outline-primary btn-sm" onClick={addVariable}>Add Variable</button>
        </div>

        {/* WhatsApp Preview */}
        <div className="mb-4">
          <div className="border p-3 rounded shadow-sm bg-light" style={{ maxWidth: 400 }}>
            <div className="mb-2">
              <span className="badge bg-success me-2">
                <i className="bi bi-whatsapp"></i> WA
              </span>
              {mediaUrl && (
                <img
                  src={mediaUrl}
                  alt="Media"
                  className="img-fluid rounded mt-2"
                  style={{ maxHeight: 150 }}
                />
              )}
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>{getPreviewText()}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
