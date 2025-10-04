import { useActionState, use } from "react";
import { FullPageContext } from "../context/FullPageContext";

// FORM COMPONENT
export default function EingabeFormular() {
  const { localStorageData, setLocalStorageData } = use(FullPageContext);
  //
  // FORM ACTION
  async function addDiaryEntry(_prevState, formData) {
    // FormData in "data" speichern
    const data = Object.fromEntries(formData);
    console.log("FormData:", data);

    // VALIDIERUNG **********
    const validate = (data) => {
      const newErrors = {};

      if (!data.title.trim()) {
        newErrors.title = "Bitte einen Titel eingeben.";
      }
      if (!data.text.trim()) {
        newErrors.text = "Bitte einen Text eingeben.";
      }
      if (!data.datum.trim()) {
        newErrors.datum = "Bitte ein Datum eingeben.";
      } else {
        // Prüfen, ob Datum schon existiert
        const exists = localStorageData.some(
          (entry) => entry.datum === data.datum
        );
        if (exists) {
          newErrors.datum = "Für dieses Datum existiert bereits ein Eintrag.";
        }
      }

      return newErrors;
    };

    const validationErrors = validate(data);

    // IF..ELSE..
    if (Object.keys(validationErrors).length === 0) {
      // Keine Fehler? // Dann ABSENDEN:
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      // EXTRA DADDEL: Image check (Der Block kann auch komplett raus)
      // **********************************
      if (!data.url || !data.url.trim()) {
        data.url = "/img/react.svg";
      } else {
        async function validateImageUrl(url) {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
          });
        }
        const isValid = await validateImageUrl(data.url);
        if (!isValid) {
          data.url = "/img/vite.svg";
        }
      }
      // Datum von YYYY-MM-DD nach DD.MM.YYYY konvertieren
      // const [year, month, day] = data.datum.split("-");
      // data.datum = `${day}.${month}.${year}`;

      // **********************************
      // Speichern im local Storage
      const toLocalStorage = JSON.stringify([...localStorageData, data]);
      localStorage.setItem("diaryEntries", toLocalStorage);
      // Aktualisieren des GlobalContexts für Aktualisierung der Anzeige ohne PageReload
      setLocalStorageData((prev) => [...prev, data]);
      // Modal schließen
      document.getElementById("dialogFormEintrag").close();

      // RETURN ans FORM *********
      return {
        // Rückgabe kommt in state, hier steht nichts weil das From versendet wurde
        // und ich nichts mehr im Form zurück brauche
      };
    } else {
      // RETURN ans FORM *********
      return {
        // Errors zurück ins Form über "state"-Variable, um Fehler auszugeben
        errors: validationErrors,
        input: data,
      };
    }
  }

  // useActionState() HOOK
  const [state, formAction, isPending] = useActionState(addDiaryEntry, {});

  return (
    <>
      <form action={formAction} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Einen Eintrage erstellen</legend>

          {/* TITEL */}
          <label className="label" htmlFor="titleField">
            Title
          </label>
          <input
            defaultValue={state.input?.title}
            disabled={isPending}
            id="titleField"
            name="title"
            type="text"
            className="input w-full"
            placeholder="Titel eingeben"
          />
          {state.errors?.title && (
            <p className="text-sm text-orange-400 mt-1">{state.errors.title}</p>
          )}
          {/* DATUM */}
          <label className="label" htmlFor="datumField">
            Datum
          </label>
          <input
            defaultValue={state.input?.datum}
            disabled={isPending}
            id="datumField"
            name="datum"
            type="date"
            className="input w-full"
            placeholder="Datum wählen"
          />
          {state.errors?.datum && (
            <p className="text-sm text-orange-400 mt-1">{state.errors.datum}</p>
          )}
          {/* URL */}
          <label className="label" htmlFor="urlField">
            URL
          </label>
          <input
            defaultValue={state.input?.url}
            disabled={isPending}
            id="urlField"
            name="url"
            type="text"
            className="input w-full"
            placeholder="Eine Bild URL eingeben (Optional)"
          />

          {/* TEXTAREA */}
          <label className="label" htmlFor="textField">
            Text
          </label>
          <textarea
            defaultValue={state.input?.text}
            disabled={isPending}
            id="textField"
            name="text"
            className="textarea w-full"
            placeholder="Dein Tagebucheintrag Text"
          />
          {state.errors?.text && (
            <p className="text-sm text-orange-400 mt-1">{state.errors.text}</p>
          )}

          {/* BILD */}
          {/* <fieldset className="fieldset">
            <legend className="fieldset-legend">Bild auswählen</legend>
            <input name="image" type="file" className="file-input" />
            <label className="label">Max size 2MB</label>
          </fieldset> */}

          {/* BUTTON */}
          <button type="submit" className="btn btn-info mt-5">
            Absenden
          </button>

          {/* // isPending */}
          {isPending ? (
            <h3 className="text-2xl">Daten werden verarbeitet..</h3>
          ) : (
            ""
          )}
        </fieldset>
      </form>
    </>
  );
}
