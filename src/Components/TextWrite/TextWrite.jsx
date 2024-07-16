import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import PropTypes from 'prop-types';
import './TextWrite.css';

const TextWrite = ({ mode }) => {

  const handleType = (count) => {
    console.log(count);
  }

  const handleDone = () => {
    console.log('Loop done!');
  }

  return (
    <div className={`text-write-container text-write-container-${mode}`}>
      <h1 className={`text-write-heading text-write-heading-${mode}`}>
        Let`s find a new {' '}
        <span className={`text-write-highlight text-write-highlight-${mode} typewriter-text-${mode}`}>
          <Typewriter
            words={['Job', 'Position', 'Opportunities', 'new career path']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
}

TextWrite.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default TextWrite;

