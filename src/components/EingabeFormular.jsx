import { useState, useActionState } from "react";

export default function EingabeFormular() {
  const [formData, setFormData] = useState([]);

  // VALIDIERUNG
  // const validate = ({ name, email, message }) => {
  //   const newErrors = {};
  //   if (!name.trim()) newErrors.name = "Name is required.";
  //   if (!email.trim()) {
  //     newErrors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     newErrors.email = "Invalid email format.";
  //   }
  //   if (!message.trim()) newErrors.message = "Message is required.";
  //   return newErrors;
  // };
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  async function submitData(_prevState, formData) {
    const data = Object.fromEntries(formData);
    await sleep(1000); // Simulate network delay
    console.log("Submitted:", data);
    alert("Form submitted successfully!");
    document.getElementById("dialogFormEintrag").close();
  }

  const [state, formAction, isPending] = useActionState(submitData, {});

  return (
    <>
      <form action={formAction} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Einen Eintrage erstellen</legend>

          {/* TITEL */}
          <label className="label">Title</label>
          <input
            // defaultValue={state.input?.title}
            disabled={isPending}
            name="title"
            id="title"
            type="text"
            className="input w-full"
            placeholder="My awesome page"
          />
          {/* DATUM */}
          <label className="label">Datum</label>
          <input
            disabled={isPending}
            name="datum"
            id="datum"
            type="date"
            className="input w-full"
            placeholder="my-awesome-page"
          />
          {/* URL */}
          <label className="label">URL</label>
          <input
            disabled={isPending}
            name="url"
            id="url"
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
            disabled={isPending}
            name="text"
            id="text"
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
