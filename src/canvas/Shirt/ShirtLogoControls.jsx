import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../../store';

const ShirtLogoControls = () => {
  const snap = useSnapshot(state);

  const handlePositionChange = (type, index, direction) => {
    const step = 0.01; // You can adjust the step size as needed

    if (type === 'front') {
      switch (direction) {
        case 'left':
          state.frontLogoPosition[index] -= step;
          break;
        case 'right':
          state.frontLogoPosition[index] += step;
          break;
        case 'up':
          state.frontLogoPosition[index] += step;
          break;
        case 'down':
          state.frontLogoPosition[index] -= step;
          break;
        default:
          break;
      }
    } else if (type === 'back') {
      switch (direction) {
        case 'left':
          state.backLogoPosition[index] -= step;
          break;
        case 'right':
          state.backLogoPosition[index] += step;
          break;
        case 'up':
          state.backLogoPosition[index] += step;
          break;
        case 'down':
          state.backLogoPosition[index] -= step;
          break;
        default:
          break;
      }
    }
  };

  const handleScaleChange = (type, direction) => {
    const step = 0.01; // You can adjust the step size as needed

    if (type === 'front') {
      if (direction === 'increase') {
        state.frontLogoScale += step;
      } else if (direction === 'decrease') {
        state.frontLogoScale -= step;
      }
    } else if (type === 'back') {
      if (direction === 'increase') {
        state.backLogoScale += step;
      } else if (direction === 'decrease') {
        state.backLogoScale -= step;
      }
    }
  };

  return (
    <div className="absolute left-full ml-3">
      <div className="flex flex-col space-y-2">
        {/* Front Logo Controls */}
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

        {/* Back Logo Controls */}
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

export default ShirtLogoControls;