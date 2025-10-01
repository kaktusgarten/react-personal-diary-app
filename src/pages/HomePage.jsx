import { useState } from "react";
import DialogModal from "../components/DialogModal";
import DiaryEntryComponent from "../components/DiaryEntryComponent";
import FullInfoModal from "../components/FullInfoModal";

const HomePage = () => {
  return (
    <>
      <div className="HOMEPAGE border p-5">
        <div className="mb-5 flex justify-between flex-wrap">
          <h2>Tagebucheinträge:</h2>
          <DialogModal />
          <FullInfoModal />
        </div>
        <div>
          <DiaryEntryComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
