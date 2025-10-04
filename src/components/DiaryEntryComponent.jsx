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

  return (
    <>
      <div>
        {localStorageData.map((article, index) => (
          <article
            key={index}
            data-id={index}
            className="border p-3 flex gap-3 rounded-xl cursor-pointer mb-3"
            onClick={(e) => {
              showInfo(e);
            }}
          >
            <div>
              <img
                src={article.url ? article.url : "/img/react.svg"}
                onError={(e) => {
                  e.currentTarget.src = "/img/vite.svg";
                }}
                alt="IMG"
                className="w-[100px] h-[100px] border"
              ></img>
            </div>
            <div>
              <p>{article.datum}</p>
              <h2 className="text-2xl pb-2">{article.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
