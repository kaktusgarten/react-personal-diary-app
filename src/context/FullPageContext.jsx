// REACT CONTEXT:
import { useState, createContext, use } from "react";

export const FullPageContext = createContext();

export default function FullPageContextProvider({ children }) {
  // GLOBALE verfügbare Daten:
  const [data] = useState("Ich bin global verfügbar:-D");
  const [localStorageData, setLocalStorageData] = useState([]);
  const [articleId, setArticleId] = useState(null);

  return (
    <FullPageContext
      value={{
        localStorageData,
        setLocalStorageData,
        articleId,
        setArticleId,
        data,
      }}
    >
      {children}
    </FullPageContext>
  );
}
