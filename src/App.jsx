import { useState } from "react";
import "./App.css";
import {
  FaBars,
  FaCaretDown,
  FaGlobe,
  FaPen,
  FaPencilAlt,
  FaPlus,
  FaQuestion,
  FaSquareFull,
  FaTh,
} from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { HiCog } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function App() {
  const [state, setState] = useState({
    isDropdownOpen: false,
    size:0,
    lineHeight: 0,
    letterSpacing: 0,
    wordSpacing: 0,
  });

  const blend = ["Normal", "None"];
  const defaultBlend = blend[0];

  const family = ["Roboto", "Open Sans", "Sherif"];
  const defaultFamily = family[0];

  const weight = ["700(bold)", "600(semi bold)"];
  const defaultWeight = weight[0];

  const style = ["default", "italic"];
  const defaultStyle = style[0];

  const decoration = ["default", "None"];
  const defaultDecoration = decoration[0];

  return (
    <div className="grid w-[250px]">
      <div className="border-r">
        <div className="text-white bg-black flex flex-auto py-2 px-2">
          <div className="flex-none">
            <FaBars></FaBars>
          </div>
          <div className="grow">Edit Heading</div>
          <div className="flex-none">
            <FaTh></FaTh>
          </div>
        </div>

        <div className="grid grid-cols-3 border py-1">
          <div className="flex flex-col items-center text-center">
            <div className="py-1">
              <FaPencilAlt />
            </div>
            <h3 className="">Content</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="py-1">
              <BsCircleHalf />
            </div>
            <div>Style </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="py-1">
              <HiCog />
            </div>
            <div>Advance</div>
          </div>
        </div>

        <div className="text-left px-3 py-2">
          <h3 className="flex items-center font-semibold">
            <FaCaretDown></FaCaretDown> Title
          </h3>
        </div>

        <div className="text-left px-3 py-2 flex justify-between">
          <h4>Text color</h4>
          <div className="text-pink-500 border flex gap-2 p-1">
            <FaGlobe />
            <FaSquareFull />
          </div>
        </div>
        <div className="text-left px-3 py-2 flex justify-between">
          <h4>Typography</h4>
          <div className="border flex gap-2 p-1">
            <FaGlobe />
            {/*  dropdown */}
            <button
              className="hover:bg-gray-400"
              onClick={() =>
                setState({ ...state, isDropdownOpen: !state.isDropdownOpen })
              }
            >
              <FaPen />
            </button>
          </div>
        </div>
        <div className="text-left px-3 py-2 flex justify-between">
          <h4>Text Stroke</h4>
          <div className="border p-1">
            <FaPen />
          </div>
          {state.isDropdownOpen && (
            <div className="absolute z-10 w-[225px] mx-auto bg-gray-100 border rounded-md shadow-lg">
              <div className="text-left px-2 py-3 shadow flex justify-between border">
                <h4 className="font-semibold">Typography</h4>
                <div className="border flex gap-2 p-2">
                  <AiOutlineReload></AiOutlineReload>
                  <FaPlus />
                </div>
              </div>
              <div className="p-3 flex justify-between items-center">
                <h3>Family</h3>
                <Dropdown
                  options={family}
                  value={defaultFamily}
                  placeholder="Select an option"
                />
              </div>
              <div className="p-2">
                <h3>Size</h3>
                <div className="flex gap-10">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.size}
                    onChange={(e) =>
                      setState({ ...state, size: e.target.value })
                    }
                    className="slider"
                  />
                  <input
                    type="text"
                    value={state.size}
                    onChange={(e) =>
                      setState({ ...state, size: e.target.value })
                    }
                    className="slider-value w-10"
                  />
                </div>
              </div>
              <div className="p-2 flex gap-8 justify-between items-center">
                <h3>Weight</h3>
                <Dropdown
                  options={weight}
                  value={defaultWeight}
                  placeholder="Select an option"
                />
              </div>
              <div className="p-2 flex justify-between items-center">
                <h3>Style</h3>
                <Dropdown
                  options={style}
                  value={defaultStyle}
                  placeholder="Select an option"
                />
              </div>
              <div className="p-2 flex justify-between items-center">
                <h3>Decoration</h3>
                <Dropdown
                  options={decoration}
                  value={defaultDecoration}
                  placeholder="Select an option"
                />
              </div>
              <div className="p-2">
                <h3>Line-Height</h3>
                <div className="flex gap-10">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.decoration}
                    onChange={(e) =>
                      setState({ ...state, lineHeight: e.target.value })
                    }
                    className="slider"
                  />
                  <input
                    type="text"
                    value={state.lineHeight}
                    onChange={(e) =>
                      setState({ ...state, lineHeight: e.target.value })
                    }
                    className="slider-value w-10"
                  />
                </div>
              </div>
              <div className="p-2">
                <h3>Letter Spacing</h3>
                <div className="flex gap-10">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.letterSpacing}
                    onChange={(e) =>
                      setState({ ...state, letterSpacing: e.target.value })
                    }
                    className="slider"
                  />
                  <input
                    type="text"
                    value={state.letterSpacing}
                    onChange={(e) =>
                      setState({ ...state, letterSpacing: e.target.value })
                    }
                    className="slider-value w-10"
                  />
                </div>
              </div>
              <div className="p-2">
                <h3>Word Spacing</h3>
                <div className="flex gap-10">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.wordSpacing}
                    onChange={(e) =>
                      setState({ ...state, wordSpacing: e.target.value })
                    }
                    className="slider"
                  />
                  <input
                    type="text"
                    value={state.wordSpacing}
                    onChange={(e) =>
                      setState({ ...state, wordSpacing: e.target.value })
                    }
                    className="slider-value w-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-left px-3 py-2 flex justify-between">
          <h4>Text Shadow</h4>
          <div className="border p-1">
            <FaPen />
          </div>
        </div>
        <div className="p-2 flex justify-between items-center">
          <h3 className="px-1">Blend Mode</h3>
          <Dropdown
            options={blend}
            value={defaultBlend}
            placeholder="Select an option"
          />
        </div>
        <div className="flex items-center justify-center py-6">
          <p className="text-center p-1">Need Help</p>
          <div className="border-2 text-sm rounded-full border-black p-[1px]">
            <FaQuestion></FaQuestion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
