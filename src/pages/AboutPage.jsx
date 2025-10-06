const AboutPage = () => {
  return (
    <div className="rounded-2xl p-5 py-15">
      <h2 className="text-4xl mb-4">Über diese Projekt</h2>

      <h3 className="mb-6 text-xl">
        1. Eingesetzt wurden folgende Komponenten und Techniken:
      </h3>
      <ul class="grid grid-cols-2 gap-2 list-disc pl-5 text-2xl">
        <li>VITE</li>
        <li>REACT</li>
        <li>useEffect()</li>
        <li>useState()</li>
        <li>createContext()</li>
        <li>use()</li>
        <li>react-router()</li>
        <li>useActionState()</li>
        <li>tailwindCss</li>
        <li>DaisyUiCss</li>
        <li>VanillaJS</li>
      </ul>
    </div>
  );
};

export default AboutPage;
