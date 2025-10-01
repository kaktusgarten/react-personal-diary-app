import { useState, createContext } from "react";

export const FullPageContext = createContext();

export default function FullPageContextProvider({}) {
  const [localStorage, setLocalStorage] = useState([{ title: "uwe" }]);

  return (
    <FullPageContext value={{ localStorage, setLocalStorage }}>
      {children}
    </FullPageContext>
  );
}
