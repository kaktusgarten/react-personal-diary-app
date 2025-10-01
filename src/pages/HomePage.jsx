import { use, useEffect } from "react";
import DialogModal from "../components/DialogModal";
import DiaryEntryComponent from "../components/DiaryEntryComponent";
import FullInfoModal from "../components/FullInfoModal";
// Globalen Context importieren:
import { FullPageContext } from "../context/FullPageContext";

export default function HomePage() {
  // REACT Context
  const { localStorageData, setLocalStorageData } = use(FullPageContext);

  // Initiales LADEN oder ERSTELLEN des LocalStorage:
  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) {
      setLocalStorageData(JSON.parse(stored));
    } else {
      const initialEntries = [
        { title: "Ich bin der Titel", text: "Ich bin der Text, text,text" },
      ];
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
