type NavProps = {
  language: string;
  setLanguage: (value: string) => void;
};

function Nav({ setLanguage }: NavProps) {
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
      <div className="flex justify-between items-center">
        <div className="flex">
          <button
            onClick={() =>
              window.open("https://forms.gle/niKN88AgrHcZrLrY9", "_blank")
            }
            className="hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 rounded mb-2"
          >
            Residency Application Form
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
