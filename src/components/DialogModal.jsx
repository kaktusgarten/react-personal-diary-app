import EingabeFormular from "./EingabeFormular";

export default function DialogModal() {
  return (
    <>
      {/* You can open the modal using document.getElementById('dialogFormEintrag').showModal() method */}
      <button
        className="btn btn-info"
        onClick={() => document.getElementById("dialogFormEintrag").showModal()}
      >
        NEUER TAGEBUCH EINTRAG
      </button>
      <dialog id="dialogFormEintrag" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-5">Tagebuch Eintrag:</h3>

          <EingabeFormular />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
