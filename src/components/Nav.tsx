type NavProps = {
  language: string
  setLanguage: (value: string) => void
}

function Nav({ language, setLanguage }: NavProps) {
  console.log('language', language)
  const handleLanguageChange = (lang: string) => {
    if (lang === 'en') {
      setLanguage('en-US')
    } else {
      setLanguage('tr-TR')
    }
  }

  return (
    <>
      <h1 className='text-3xl font-bold'>Eski Pazar</h1>
      <div className='flex justify-between'>
        <h2>
          {language === 'en-US'
            ? 'exhibition - activity - workshop'
            : 'sergi - etkinlik - atölye'}
        </h2>
        <div>
          <button onClick={() => handleLanguageChange('en')}>EN</button>
          <span> | </span>
          <button onClick={() => handleLanguageChange('tr')}>TR</button>
        </div>
      </div>
    </>
  )
}

export default Nav
