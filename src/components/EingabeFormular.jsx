import { useState } from "react";

export default function () {
  const handleSubmit = () => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleChange = () => {
    console.log("Handle Change");
  };

  const [formData, setFormData] = useState([]);

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Einen Eintrage erstellen</legend>

          {/* TITEL */}
          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input w-full"
            placeholder="My awesome page"
          />
          {/* DATUM */}
          <label className="label">Datum</label>
          <input
            name="datum"
            type="date"
            className="input w-full"
            placeholder="my-awesome-page"
          />
          {/* URL */}
          <label className="label">URL</label>
          <input
            name="url"
            type="text"
            className="input w-full"
            placeholder="URL eingeben"
          />
          {/* BILD */}
          {/* <fieldset className="fieldset">
            <legend className="fieldset-legend">Bild auswählen</legend>
            <input name="image" type="file" className="file-input" />
            <label className="label">Max size 2MB</label>
          </fieldset> */}

          {/* TEXTAREA */}
          <label className="label">Text</label>
          <textarea
            name="text"
            className="textarea w-full"
            placeholder="Gib einen Text ein"
          />

          {/* BUTTON */}
          <button type="submit" className="btn btn-info mt-5">
            Absenden
          </button>
        </fieldset>
      </form>
    </>
  );
}
