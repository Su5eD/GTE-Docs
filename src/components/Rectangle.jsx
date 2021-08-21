import React from "react";

export const Rectangle = ({ children, size, color }) => (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "2px",
        padding: "0.2rem"
      }}>
      {children}
    </div>
);
