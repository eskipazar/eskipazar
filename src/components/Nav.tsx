type NavProps = {
  language: string;
  setLanguage: (value: string) => void;
  setSection: (section: string) => void;
};

function Nav({ language, setLanguage, setSection }: NavProps) {
  const handleLanguageChange = (lang: string) => {
    if (lang === "en") {
      setLanguage("en-US");
    } else {
      setLanguage("tr-TR");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <img src="/logo.jpg" style={{ height: "110px" }} />
        </h1>
        <div>
          <button onClick={() => handleLanguageChange("en")}>EN</button>
          <span> | </span>
          <button onClick={() => handleLanguageChange("tr")}>TR</button>
        </div>
      </div>
      <nav className="flex justify-evenly">
        <button onClick={() => setSection("body")}>
          {language === "tr-TR" ? "Sergiler" : "Exibitions"}
        </button>
        <button onClick={() => setSection("about")}>
          {language === "tr-TR" ? "Eskipazar Nedir?" : "Whats Eskipazar?"}
        </button>
        <button
          onClick={() =>
            window.open("https://forms.gle/niKN88AgrHcZrLrY9", "_blank")
          }
        >
          {language === "tr-TR" ? "Rezidans" : "Residency"}
        </button>
      </nav>
    </>
  );
}

export default Nav;
