export default function FullInfoModal({ id }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('dialogFormEintrag').showModal() method */}
      {/* <button
        className="btn btn-info"
        onClick={() => document.getElementById("fullInfoModal").showModal()}
      ></button> */}
      <dialog id="fullInfoModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-5">Tagebuch Eintrag:</h3>

          <p>Das ist alles passiert...ID: {id}</p>

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
