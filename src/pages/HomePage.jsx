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
          datum: "2025-10-02",
          text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Wenn's dann um meine Augen dämmert, und die Welt..",
          url: "/img/react.svg",
        },
        {
          title: "Ich finde das Wetter war heute nicht so toll",
          datum: "2025-08-01",
          text: "Es regnet in Strömen, die Straßen glänzen wie frisch poliertes Silber, und ich stehe mit einem viel zu kleinen Regenschirm da, der mehr Tropfen durchlässt als abwehrt. Der Wind spielt verrückt, meine Frisur ist ein Haufen Chaos, und meine Schuhe quaken fröhlich bei jedem Schritt. Trotzdem grinse ich – schlechtes Wetter hat seinen Charme. Es zwingt einen, langsamer zu gehen, die kleinen Dinge zu bemerken, wie das Plätschern in den Rinnsteinen oder den Duft von nassem Asphalt. Und während alle fluchen, genieße ich meinen Kaffee und lache über die launische Natur.",
          url: "/img/react.svg",
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
