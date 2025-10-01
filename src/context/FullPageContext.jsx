import { useState, createContext } from "react";

export const FullPageContext = createContext();

export default function FullPageContextProvider({ children }) {
  // GLOBALE verfügbare Daten:
  const [localStorageData, setLocalStorageData] = useState([]);
  const [data] = useState("Ein Globaler Wert unter DATA im Context");

  return (
    <FullPageContext value={{ localStorageData, setLocalStorageData, data }}>
      {children}
    </FullPageContext>
  );
}
