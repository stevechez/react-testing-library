import React from "react";
import "./button.css";

export default function Button({ label }) {
  return (
    <div>
      <div data-testid="btn" className="button-style">
        {label}
      </div>
    </div>
  );
}
