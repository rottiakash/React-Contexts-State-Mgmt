import React, { FC } from "react";

interface CenterProps {
  children: any;
}

const Center: FC<CenterProps> = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);

export default Center;
