import { useState } from "react";

import Nav from "./components/Nav";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage]: [string, (value: string) => void] = useState(
    navigator?.language || "tr-TR"
  );
  const [section, setSection] = useState("body"); // Add state for section

  return (
    <>
      <Nav
        language={language}
        setLanguage={setLanguage}
        setSection={setSection}
      />
      <hr className="border-dashed border-2 m-1" />
      {section === "body" ? (
        <Body language={language} />
      ) : (
        <About language={language} />
      )}
      <hr className="border-dashed border-2 m-1" />
      <Footer />
    </>
  );
}

export default App;
