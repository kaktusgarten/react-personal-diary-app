import { use } from "react";
import { FullPageContext } from "../context/FullPageContext";

export default function FullInfoModal({ id }) {
  const { articleId, setArticleId } = use(FullPageContext);

  return (
    <>
      {/* You can open the modal using document.getElementById(fullInfoModal').showModal() method */}

      <dialog id="fullInfoModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-5">Tagebuch Eintrag:</h3>

          <p>Das ist alles passiert, Eintrag-ID : {articleId}</p>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
