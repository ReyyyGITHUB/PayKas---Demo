import React from "react";

const SafeAreaView = ({ children, className = "" }) => {
  return (
    <div
      className={`safe-area flex flex-col ${className}`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {children}
    </div>
  );
};

export default SafeAreaView;
