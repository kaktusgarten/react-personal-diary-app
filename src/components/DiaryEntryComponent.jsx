export default function DiaryEntryComponent() {
  const showInfo = (e) => {
    const id = e.target.closest("article").dataset.id;
    console.log(id);
    // id MUSS HIER IN DEN GLOBAL STATE..
    document.getElementById("fullInfoModal").showModal();
  };

  return (
    <>
      <article
        //   HIER GEHTS WEITER, id muss hier rein:
        data-id="ID-des-articles-fehlt-noch"
        className="border p-3 flex gap-3 rounded-xl cursor-pointer"
        onClick={(e) => {
          showInfo(e);
        }}
      >
        <div>
          <img scr="/" alt="IMG" className="w-[100px] h-[100px] border"></img>
        </div>
        <div>
          <h2 className="text-2xl pb-2">Titel</h2>
          <p>Datum</p>
        </div>
      </article>
    </>
  );
}
