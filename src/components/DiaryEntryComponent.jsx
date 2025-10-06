import { use } from "react";
import { FullPageContext } from "../context/FullPageContext";

export default function DiaryEntryComponent() {
  const { setArticleId, setLocalStorageData, localStorageData } =
    use(FullPageContext);

  // Open Info Popup
  const showInfo = (e) => {
    const id = e.target.closest("article").dataset.id;
    // ID den GLOBAL-Context für das FullInfoModal um dort den richtigen Artikel anzuzeigen
    setArticleId(id);
    document.getElementById("fullInfoModal").showModal();
  };

  const deleteEntries = (e) => {
    console.log("löschen");
    console.log(localStorageData);
    setLocalStorageData([]);
    localStorage.removeItem("diaryEntries");
  };

  return (
    <>
      <div>
        {localStorageData.map((article, index) => {
          // Datum formatieren: "YYYY-MM-DD" → "DD.MM.YYYY"
          const [year, month, day] = article.datum.split("-");
          const formattedDate = `${day}.${month}.${year}`;

          return (
            <article
              key={index}
              data-id={index}
              className="border p-3 flex gap-3 rounded-xl cursor-pointer mb-3 bg-[#000000] sm:flex-row flex-col"
              onClick={showInfo}
            >
              <div>
                <img
                  src={article.url ? article.url : "/img/react.svg"}
                  onError={(e) => {
                    e.currentTarget.src = "/img/vite.svg";
                  }}
                  alt="IMG"
                  className="w-[100px] h-[100px] border p-1"
                />
              </div>
              <div>
                <p>{formattedDate}</p>
                <h2 className="text-2xl pb-2">{article.title}</h2>
              </div>
            </article>
          );
        })}
      </div>
      <div>
        <button
          className="btn"
          onClick={(e) => {
            deleteEntries();
          }}
        >
          Alle Einträge löschen
        </button>
      </div>
    </>
  );
}
