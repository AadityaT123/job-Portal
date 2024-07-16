import React, { useState } from 'react';
import './Countup.css'; // Your custom CSS
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import PropTypes from 'prop-types';

const Countup = ({ mode }) => {
  const [CounterState, setCounterState] = useState(false);
  const sectionClass = mode === 'dark' ? 'countup-section-dark' : 'countup-section-light';
  const textClass = mode === 'dark' ? 'text-light' : 'text-dark';

  return (
    <div className='px-20 py-12'>
      <div className={sectionClass}>
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <div className='row text-center'>
            <div className='col'>
              <h2 className={`display-4 ${textClass}`}>
                <span className="font-weight-bold">
                  {CounterState &&
                    <CountUp
                      start={0}
                      end={95}
                      duration={3.56}
                      decimal=","
                    />
                  }%
                </span>
              </h2>
              <p className={`py-2 ${textClass}`}>Success Rate</p>
            </div>
            <div className='col'>
              <h2 className={`display-4 ${textClass}`}>
                <span className="font-weight-bold">
                  {CounterState &&
                    <CountUp
                      start={0}
                      end={55}
                      duration={3.56}
                      decimal=","
                    />
                  }%
                </span>
              </h2>
              <p className={`py-2 ${textClass}`}>Complete Project</p>
            </div>
            <div className='col'>
              <h2 className={`display-4 ${textClass}`}>
                <span className="font-weight-bold">
                  {CounterState &&
                    <CountUp
                      start={0}
                      end={1000}
                      duration={3.56}
                      decimal=","
                    />
                  }+
                </span>
              </h2>
              <p className={`py-2 ${textClass}`}>Offer Letter</p>
            </div>
            <div className='col'>
              <h2 className={`display-4 ${textClass}`}>
                <span className="font-weight-bold">
                  {CounterState &&
                    <CountUp
                      start={0}
                      end={5000}
                      duration={3.56}
                      decimal=","
                    />
                  }+
                </span>
              </h2>
              <p className={`py-2 ${textClass}`}>Signed Up</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

Countup.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Countup;
