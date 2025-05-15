import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OptInManagement = () => {
  const [optInResponseEnabled, setOptInResponseEnabled] = useState(true);
  const [optOutResponseEnabled, setOptOutResponseEnabled] = useState(true);
  const [optInKeywords, setOptInKeywords] = useState(["Keyword1", "Keyword2"]);
  const [optOutKeywords, setOptOutKeywords] = useState(["Keyword3", "Keyword4"]);
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = (type) => {
    if (!newKeyword.trim()) return;
    if (type === "optin") setOptInKeywords([...optInKeywords, newKeyword.trim()]);
    if (type === "optout") setOptOutKeywords([...optOutKeywords, newKeyword.trim()]);
    setNewKeyword("");
  };

  const removeKeyword = (type, index) => {
    if (type === "optin") setOptInKeywords(optInKeywords.filter((_, i) => i !== index));
    if (type === "optout") setOptOutKeywords(optOutKeywords.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      {/* Opt-in Section */}
      <div className="card p-4 mb-4 shadow">
        <h5>Opt-In Management</h5>
        <p>A text that explains what opt-in is</p>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={optInResponseEnabled}
            onChange={() => setOptInResponseEnabled(!optInResponseEnabled)}
          />
          <label className="form-check-label">Opt-in Response</label>
        </div>
        <button className="btn btn-primary mb-2">Configure</button>
        {optInResponseEnabled && (
          <div className="alert alert-success mt-2">Hi! Thanks for connecting. Someone from our team will get in touch soon.</div>
        )}

        <h6 className="mt-4">Opt-in Keywords</h6>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add keyword"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={() => addKeyword("optin")}>
            Add
          </button>
        </div>
        <div>
          {optInKeywords.map((keyword, index) => (
            <span key={index} className="badge bg-secondary me-2 mb-2">
              {keyword}{" "}
              <button
                className="btn-close btn-close-white btn-sm ms-1"
                onClick={() => removeKeyword("optin", index)}
              ></button>
            </span>
          ))}
        </div>
      </div>

      {/* Opt-out Section */}
      <div className="card p-4 shadow">
        <h5>Opt-out</h5>
        <p>A text that explains what opt-out is</p>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={optOutResponseEnabled}
            onChange={() => setOptOutResponseEnabled(!optOutResponseEnabled)}
          />
          <label className="form-check-label">Opt-out Response</label>
        </div>
        <button className="btn btn-primary mb-2">Configure</button>
        {optOutResponseEnabled && (
          <div className="alert alert-success mt-2">Hi! Thanks for connecting. Someone from our team will get in touch soon.</div>
        )}

        <h6 className="mt-4">Opt-out Keywords</h6>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add keyword"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={() => addKeyword("optout")}>
            Add
          </button>
        </div>
        <div>
          {optOutKeywords.map((keyword, index) => (
            <span key={index} className="badge bg-secondary me-2 mb-2">
              {keyword}{" "}
              <button
                className="btn-close btn-close-white btn-sm ms-1"
                onClick={() => removeKeyword("optout", index)}
              ></button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptInManagement;
