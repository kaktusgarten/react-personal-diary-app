import { use } from "react";
import { FullPageContext } from "../context/FullPageContext";

export default function FullInfoModal({ id }) {
  const { articleId, localStorageData } = use(FullPageContext);
  const currentArticle = localStorageData[Number(articleId)];

  // Datum formatieren: "YYYY-MM-DD" → "DD.MM.YYYY", nur wenn currentArticle existiert
  let formattedDate = "";
  if (currentArticle?.datum) {
    const [year, month, day] = currentArticle.datum.split("-");
    formattedDate = `${day}.${month}.${year}`;
  }

  return (
    <>
      <dialog id="fullInfoModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-5">
            Tagebuch Eintrag {articleId}:
          </h3>

          <article>
            <div className="flex gap-4 sm:flex-row flex-col">
              {/* Image */}
              <img
                src={
                  currentArticle?.url ? currentArticle?.url : "/img/react.svg"
                }
                onError={(e) => {
                  e.currentTarget.src = "/img/vite.svg";
                }}
                alt="Image"
                className="border sm:w-1/3 p-3"
              ></img>
              <div className="sm:w-2/3">
                {/* Datum */}
                <p className="mb-2">Datum: {formattedDate}</p>
                {/* Titel */}
                <h2 className="text-2xl mb-3">{currentArticle?.title}</h2>
                {/* Text */}
                <p>{currentArticle?.text}</p>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </article>
        </div>
      </dialog>
    </>
  );
}
