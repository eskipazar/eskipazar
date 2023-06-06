import { exhibitions } from "./exhibitions";

type BodyProps = {
  language: string;
};

function Body({ language }: BodyProps) {
  const index = exhibitions.length - 1;

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
          dangerouslySetInnerHTML={{
            __html:
              language === "en-US"
                ? exhibitions[index].contentEN
                : exhibitions[index].contentTR,
          }}
        />
      </div>
    </div>
  );
}

export default Body;
