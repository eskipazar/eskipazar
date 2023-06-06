import { useState } from "react";
import { exhibitions } from "./exhibitions";

type BodyProps = {
  language: string;
};

function Body({ language }: BodyProps) {
  const [index, setIndex]: [number, (value: number) => void] = useState(
    exhibitions.length - 1
  );

  return (
    <div>
      <div>
        <h1>
          {language === "en-US"
            ? exhibitions[index].titleEN
            : exhibitions[index].titleTR}
        </h1>
        <span>{exhibitions[index].date}</span>
        <div
          className="mb-2"
          dangerouslySetInnerHTML={{
            __html:
              language === "en-US"
                ? exhibitions[index].contentEN
                : exhibitions[index].contentTR,
          }}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow mb-2"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow mb-2"
          onClick={() => setIndex(index + 1)}
          disabled={!exhibitions[index + 1]}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Body;
