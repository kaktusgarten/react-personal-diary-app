import { use } from "react";
import { FullPageContext } from "../context/FullPageContext";

export default function DiaryEntryComponent() {
  const { setArticleId } = use(FullPageContext);

  // Open Info Popup
  const showInfo = (e) => {
    const id = e.target.closest("article").dataset.id;
    // ID den GLOBAL-Context für das FullInfoModal um dort den richtigen Artikel anzuzeigen
    setArticleId(id);
    document.getElementById("fullInfoModal").showModal();
  };

  const { localStorageData } = use(FullPageContext);

  console.log("localStorageData");
  console.log(localStorageData);

  return (
    <>
      <div>
        {localStorageData.map((e, index) => (
          <article
            key={index}
            data-id="ID-des-articles-fehlt-noch"
            className="border p-3 flex gap-3 rounded-xl cursor-pointer"
            onClick={(e) => {
              showInfo(e);
            }}
          >
            <div>
              <img
                scr="/"
                alt="IMG"
                className="w-[100px] h-[100px] border"
              ></img>
            </div>
            <div>
              <h2 className="text-2xl pb-2">Titel</h2>
              <p>Datum</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
