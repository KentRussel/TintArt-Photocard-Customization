import React from 'react';
import { useSnapshot } from 'valtio';
import { SketchPicker } from 'react-color';
import state from '../../store';

const fonts = ["Arial", "Times New Roman", "Segoe UI", /* ... and other fonts ... */];

const SintraTextControls = () => {
  const snap = useSnapshot(state);

  const handleTextChange = (type, value) => {
    if (type === 'front') {
      state.frontText = value;
    } else if (type === 'back') {
      state.backText = value;
    }
  };

  const handlePositionChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextPosition[index] = value;
    } else if (type === 'back') {
      state.backTextPosition[index] = value;
    }
  };

  const handleRotationChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextRotation[index] = value;
    } else if (type === 'back') {
      state.backTextRotation[index] = value;
    }
  };

  const handleScaleChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextScale[index] = value;
    } else if (type === 'back') {
      state.backTextScale[index] = value;
    }
  };

  const handleFontChange = (type, value) => {
    if (type === 'front') {
      state.frontTextFont = value;
    } else if (type === 'back') {
      state.backTextFont = value;
    }
  };

  const handleColorChange = (type, value) => {
    if (type === 'front') {
      state.frontTextColor = value;
    } else if (type === 'back') {
      state.backTextColor = value;
    }
  };

  return (
    <div className="absolute left-full ml-3 flex flex-wrap space-y-2  overflow-y-scroll w-40 h-80">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.frontText}
          onChange={(event) => handleTextChange('front', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700"></span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, snap.frontTextPosition[0] - 0.01)}
        >
           Left ← {/* Unicode left arrow symbol */}
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, snap.frontTextPosition[0] + 0.01)}
        >
           Right → {/* Unicode right arrow symbol */}
                   </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700"></span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, snap.frontTextPosition[1] - 0.01)}
        >
        Down ↓ {/* Unicode down arrow symbol */}
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, snap.frontTextPosition[1] + 0.01)}
        >
           Up ↑ {/* Unicode up arrow symbol */}
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Rotate:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] - 0.01)}
        >
          Clockwise
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] + 0.01)}
        >
          Counterclockwise
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Resize:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, snap.frontTextScale[0] - 0.01)}
        >
          Decrease
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, snap.frontTextScale[0] + 0.01)}
        >
          Increase
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Resize:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 1, snap.frontTextScale[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 1, snap.frontTextScale[1] + 0.01)}
        >
          +
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Color:</span>
        <select value={snap.frontTextFont} onChange={(event) => handleFontChange('front', event.target.value)}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700"></span>
         <SketchPicker 
            color={snap.frontTextColor}
            disableAlpha
            onChange={(color) => handleColorChange('front', color.hex)}
          />
      </div>

      {/*  Back text controls */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.backText}
          onChange={(event) => handleTextChange('back', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BX:</span>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, snap.backTextPosition[0] - 0.01)}
         >
            -
         </button>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, snap.backTextPosition[0] + 0.01)}
         >
            +
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, snap.backTextPosition[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, snap.backTextPosition[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 2, snap.backTextPosition[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 2, snap.backTextPosition[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 0, snap.backTextRotation[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 0, snap.backTextRotation[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 1, snap.backTextRotation[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 1, snap.backTextRotation[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BSX:</span>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 0, snap.backTextScale[0] - 0.01)}
         >
            -
         </button>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 0, snap.backTextScale[0] + 0.01)}
         >
            +
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
         <span className="text-gray-700">BSY:</span> 
         <button 
            className="border border-gray-300 rounded-md p-2" 
            onClick={() => handleScaleChange('back', 1, snap.backTextScale[1] - 0.01)} 
         > 
            - 
         </button> 
         <button 
            className="border border-gray-300 rounded-md p-2" 
            onClick={() => handleScaleChange('back', 1, snap.backTextScale[1] + 0.01)} 
         > 
            + 
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
      <span className="text-gray-700">BSZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 2, snap.backTextScale[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 2, snap.backTextScale[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BF:</span>
        <select value={snap.backTextFont} onChange={(event) => handleFontChange('back', event.target.value)}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BC:</span>
        <SketchPicker 
          color={snap.backTextColor}
          disableAlpha
          onChange={(color) => handleColorChange('back', color.hex)}
        />
      </div>
    </div>
  );
};

export default SintraTextControls;