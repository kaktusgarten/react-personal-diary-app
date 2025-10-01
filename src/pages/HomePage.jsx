import { useState, use, useEffect } from "react";
import DialogModal from "../components/DialogModal";
import DiaryEntryComponent from "../components/DiaryEntryComponent";
import FullInfoModal from "../components/FullInfoModal";
import { FullPageContext } from "../context/FullPageContext";

export default function HomePage() {
  // REACT Context - FullPageContext
  const { localStorageData, setLocalStorageData } = use(FullPageContext);

  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) {
      setLocalStorageData(JSON.parse(stored));
    } else {
      // Falls NICHTS drin ist → initial anlegen
      const initialEntries = [];
      localStorage.setItem("diaryEntries", JSON.stringify(initialEntries));
    }
  }, []);

  return (
    <>
      <div className="HOMEPAGE border p-5">
        <div className="mb-5 flex justify-between flex-wrap">
          <h2>Tagebucheinträge:</h2>
          <DialogModal />
          <FullInfoModal />
        </div>
        <div>
          <DiaryEntryComponent />
        </div>
      </div>
    </>
  );
}
