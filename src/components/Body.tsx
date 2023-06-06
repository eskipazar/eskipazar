import { exhibitions } from './exhibitions'

type BodyProps = {
  language: string;
};

function Body({language}: BodyProps) {


  return (
    <div>
      {exhibitions.map((exhibition) => (
        <div>
          <h1>
            {language === 'en-US' ? exhibition.titleEN : exhibition.titleTR}
          </h1>
          <span>{exhibition.date}</span>
          <div
            dangerouslySetInnerHTML={{
              __html:
                language === 'en-US'
                  ? exhibition.contentEN
                  : exhibition.contentTR,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default Body
