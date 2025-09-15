import React, { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppFooter = () => {
  const { layoutConfig } = useContext(LayoutContext);

  return (
    <div className="layout-footer">
      © {new Date().getFullYear()}
      <span className="font-medium ml-2 uppercase">Priti Soni.</span>
      &nbsp;All Rights Reserved.
    </div>
  );
};

export default AppFooter;
