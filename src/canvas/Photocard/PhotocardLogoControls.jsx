import React from 'react';
import { useSnapshot } from 'valtio';
import Photocard from './Photocard';

import state from '../../store';

const PhotocardLogoControls = ({
  handlePositionChange,
  handleScaleChange,
}) => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Front Logo Position:</span>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('front', 0, 'left')}
          >
            Left ←
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('front', 0, 'right')}
          >
            Right →
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('front', 1, 'up')}
          >
            Up ↑
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('front', 1, 'down')}
          >
            Down ↓
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Front Logo Scale:</span>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('front', 'decrease')}
          >
            -
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('front', 'increase')}
          >
            +
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Back Logo Position:</span>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, 'left')}
          >
            Left ←
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, 'right')}
          >
            Right →
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 1, 'up')}
          >
            Up ↑
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 1, 'down')}
          >
            Down ↓
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Back Logo Scale:</span>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 'decrease')}
          >
            -
          </button>
          <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 'increase')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotocardLogoControls;
