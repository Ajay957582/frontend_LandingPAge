import React, { useEffect } from "react";

const LocalStorageCleaner = ({ children }) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return children;
};

export default LocalStorageCleaner;
