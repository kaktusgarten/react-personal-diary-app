import { useState } from "react";
import DialogModal from "../components/DialogModal";

const HomePage = () => {
  return (
    <>
      <div className="HOMEPAGE border p-5">
        <div className="mb-5 flex justify-between flex-wrap">
          <h2>Tagebucheinträge:</h2>
          <DialogModal />
        </div>
        <div>
          <article className="border p-3 flex gap-3">
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
