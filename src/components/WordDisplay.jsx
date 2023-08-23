import React, { useState, useEffect } from 'react';
import Search from './Search';

const WordDisplay = () => {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState([]);

  const fetchWord = async word => {
    try {
      if (word) {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        setWordData(data);
      } else {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`
        );
        const data = await response.json();
        setWordData(data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    fetchWord(word);
  };

  const handleChange = event => {
    event.preventDefault();
    setWord(event.target.value);
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const findAudio = wordData[0]?.phonetics.find(phonetic => {
    const { audio } = phonetic;
    return audio;
  })?.audio;

  const audio = new Audio(findAudio);

  return (
    <div className="w-full">
      <Search
        word={word}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <section className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-bold text-3xl">{wordData[0]?.word}</h2>
          <h4 className="text-royal-purple">{wordData[0]?.phonetic}</h4>
        </div>
        <div>
          <button
            type="button"
            className="bg-play-button h-[48px] w-[48px] md:h-[75px] md:w-[75px] bg-contain rounded-full"
            onClick={() => audio.play()}
          ></button>
        </div>
      </section>

      <div className="border-b-[1px] border-[#e9e9e9] mb-4">
        {wordData[0]?.meanings.map((meaning, index) => {
          const { partOfSpeech, definitions, synonyms } = meaning;
          return (
            <section className="mb-8" key={index}>
              <div className="flex items-center gap-1 mb-8">
                <p className="">{partOfSpeech}</p>
                <hr className="inline-block basis-full" />
              </div>
              <div>
                <p className="mb-4 text-faded-gray">Meaning</p>
                <ul className="list-disc list-inside mb-4">
                  {definitions?.map((wordDefinition, index) => {
                    const { definition, example } = wordDefinition;
                    return (
                      <div className="mb-4" key={index}>
                        <li key={index} className="text-lg">
                          {definition}
                        </li>
                        {example ? (
                          <p className="text-lg text-faded-gray pl-6">
                            "{example}"
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </ul>
                <div className="flex flex-wrap">
                  {synonyms.length > 0 && (
                    <p className="mr-4 text-faded-gray">Synonyms</p>
                  )}
                  {synonyms?.map((synonym, index) => {
                    return (
                      <p
                        className="text-royal-purple mr-1 font-bold"
                        key={index}
                      >
                        {synonym.toLowerCase()}
                        {index !== synonyms.length - 1 ? ',' : null}
                      </p>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div className="flex items-center">
        <p className="mr-4 text-sm text-faded-gray">Source</p>
        <p>
          <a
            href={`https://en.wiktionary.org/wiki/${wordData[0]?.word}`}
            target="_blank"
            className="underline"
          >{`https://en.wiktionary.org/wiki/${wordData[0]?.word}`}</a>
        </p>
      </div>
    </div>
  );
};

export default WordDisplay;
