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
        {
          title: "Heute war tolles Wetter",
          datum: "12.12.2027",
          text: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen. Manchmal Sätze, die alle Buchstaben des Alphabets enthalten ",
          url: "/img/vite.svg",
        },
        {
          title: "Ich finde das Wetter war heute nicht so toll",
          datum: "12.12.2017",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
          url: "/img/vite.svg",
        },
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
