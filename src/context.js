import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <AppContext.Provider
      value={{ isNewUser, setIsNewUser, showPopup, setShowPopup }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
