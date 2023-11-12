import React from 'react';
import { useSnapshot } from 'valtio';
import { SketchPicker } from 'react-color';
import state from '../../store';

const fonts = [
  "Arial",
  "Times New Roman",
  "Segoe UI",
  "Tahoma",
  "Calibri",
  "Frutiger",
  "Helvetica",
  "Futura PT",
  "Myriad Pro",
  "Open Sans",
  "Roboto",
  "Verdana",
  "Adobe Arabic",
  "Droid Arabic Naskh",
  "GE SS Unique Light",
  "Simplon Norm Arabic",
  "Neue Helvetica Arabic",
  "Noto Naskh Arabic",
  "Ubuntu Arabic",
  "Waseem",
  "Zuhair",
  "Dubai",
  "Amiri",
  "Bukra",
  "Bahij Nazanin",
  "Kufam",
  "Lalezar",
  "Mirza",
  "Sakkal Majalla",
  "Scheherazade",
  "Tajawal",
  "Lateef",
  "Reem Kufi",
  "Almarai",
  "Cairo",
  "Harmattan",
  "Janna LT",
  "Mada",
  "Muna",
  "JF Flat",
  "JF Hitham",
  "JF Nizar",
  "JF Deco",
  "JF Ziba",
  "JF Unicode Naskh",
  "JF Typist",
  "JF Flat Arabic",
  "JF Nizar Serif",
  "JF Zaytoon",
  "JF Zuhair",
  "JF Deco Arabic",
  "JF Hujjat",
  "JF Noon",
  "JF Raya",
  "JF Riqa",
  "JF Tulisan",
  "JF Adeeb",
  "JF Zarkan",
  "JF Besmellah",
  "JF Noori Nastaleeq",
  "JF Noori Nastaleeq Kasheeda",
  "JF Noori Nastaleeq V1.0",
  "JF Noori Nastaleeq V2.0",
  "JF Noori Nastaleeq V3.0",
  "JF Noori Nastaleeq V4.0",
  "JF Noori Nastaleeq V5.0",
  "JF Noori Nastaleeq V6.0",
  "JF Noori Nastaleeq V7.0",
  "JF Noori Nastaleeq V8.0",
  "JF Noori Nastaleeq V9.0",
  "JF Noori Nastaleeq V10.0",
  "JF Noori Nastaleeq V11.0",
  "JF Noori Nastaleeq V12.0",
  "JF Noori Nastaleeq V13.0",
  "JF Noori Nastaleeq V14.0"
];

const PhotocardTextControls = ({

  handleTextChange,
  handlePositionChange,
  handleRotationChange,
  handleScaleChange,
  handleFontChange,
  handleColorChange,

}) => {
  const snap = useSnapshot(state);

  const handleTextChangeLocal = (type, value) => {
    if (type === 'front') {
      state.frontText = value;
    } else if (type === 'back') {
      state.backText = value;
    }
  };

  const handlePositionChangeLocal = (type, index, direction) => {
    const step = 0.01; 

    if (type === 'front') {
      switch (direction) {
        case 'left':
          state.frontTextPosition[index] -= step;
          break;
        case 'right':
          state.frontTextPosition[index] += step;
          break;
        case 'up':
          state.frontTextPosition[index] += step;
          break;
        case 'down':
          state.frontTextPosition[index] -= step;
          break;
        default:
          break;
      }

    } else if (type === 'back') {
      switch (direction) {
        case 'left':
          state.backTextPosition[index] -= step;
          break;
        case 'right':
          state.backTextPosition[index] += step;
          break;
        case 'up':
          state.backTextPosition[index] += step;
          break;
        case 'down':
          state.backTextPosition[index] -= step;
          break;
        default:
          break;
      }
    }
  };

  const handleRotationChangeLocal = (type, index, value) => {
    if (type === 'front') {
      state.frontTextRotation[index] = value;
    } else if (type === 'back') {
      state.backTextRotation[index] = value;
    }
  };

  const handleScaleChangeLocal = (type, index, direction) => {
    const step = 0.01; 

    if (type === 'front') {
      if (direction === 'increase') {
        state.frontTextScale[index] += step;
      } else if (direction === 'decrease') {
        state.frontTextScale[index] -= step;
      }
    } else if (type === 'back') {
      if (direction === 'increase') {
        state.backTextScale[index] += step;
      } else if (direction === 'decrease') {
        state.backTextScale[index] -= step;
      }
    }
  };

  const handleFontChangeLocal = (type, value) => {
    if (type === 'front') {
      state.frontTextFont = value;
    } else if (type === 'back') {
      state.backTextFont = value;
    }
  };

  const handleColorChangeLocal = (type, value) => {
    if (type === 'front') {
      state.frontTextColor = value;
    } else if (type === 'back') {
      state.backTextColor = value;
    }
  };

  return (
    <div className="absolute left-full ml-3 flex flex-wrap space-y-2 overflow-y-scroll w-40 h-80">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.frontText}
          onChange={(event) => handleTextChangeLocal('front', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.backText}
          onChange={(event) => handleTextChangeLocal('back', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Font:</span>
        <select
          value={snap.frontTextFont}
          onChange={(event) => handleFontChangeLocal('front', event.target.value)}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Font:</span>
        <select
          value={snap.backTextFont}
          onChange={(event) => handleFontChangeLocal('back', event.target.value)}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Color:</span>
        <SketchPicker
          color={snap.frontTextColor}
          disableAlpha
          onChange={(color) => handleColorChangeLocal('front', color.hex)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Color:</span>
        <SketchPicker
          color={snap.backTextColor}
          disableAlpha
          onChange={(color) => handleColorChangeLocal('back', color.hex)}
        />
      </div>
    </div>
  );
};

export default PhotocardTextControls;