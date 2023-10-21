type NavProps = {
  language: string;
  setLanguage: (value: string) => void;
};

function Nav({ language, setLanguage }: NavProps) {
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
    </>
  );
}

export default Nav;
