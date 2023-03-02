import React from 'react';
import { useGlobalContext } from '../context';

const Footer = () => {
  const { wordData } = useGlobalContext();

  return (
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
  );
};

export default Footer;
