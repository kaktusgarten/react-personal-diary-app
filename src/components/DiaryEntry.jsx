export default function DiaryEntry(e) {
  console.log(e);
  return (
    <>
      <article
        key={index}
        data-id="ID-des-articles-fehlt-noch"
        className="border p-3 flex gap-3 rounded-xl cursor-pointer mb-3"
        onClick={(e) => {
          showInfo(e);
        }}
      >
        <div>
          <img
            src={article.url}
            alt="IMG"
            className="w-[100px] h-[100px] border"
          ></img>
        </div>
        <div>
          <p>{article.datum}</p>
          <h2 className="text-2xl pb-2">{article.title}</h2>
        </div>
      </article>
    </>
  );
}
