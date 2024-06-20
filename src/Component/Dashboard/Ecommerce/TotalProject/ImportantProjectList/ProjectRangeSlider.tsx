import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { PropsImportantProjectListType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectRangeSlider:React.FC<PropsImportantProjectListType> = ({ data }) => {
  const [values, setValues] = useState([data.rangeValue]);
  return (
    <div className="range_4">
      <Range
        values={values}
        step={1}
        min={0}
        max={100}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style, height: "36px" }}
            className="d-flex w-100"
          >
            <div
              ref={props.ref}
              className="rounded-2 w-100"
              style={{
                height: "10px",
                background: getTrackBackground({
                  values: values,
                  colors: ["var(--theme-default)", "rgba(0, 102, 102, 0.2)"],
                  min: 0,
                  max: 100,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="d-flex justify-content-center align-items-center"
            style={{
              ...props.style,
              height: "25px",
              width: "40px",
              backgroundColor: "var(--theme-default)",
              boxShadow: "0px 2px 6px #AAA",
              color:"#fff",
              fontWeight:"bold"
            }}
          >{values}%    
          </div>
        )}
      />
    </div>
  );
};

export default ProjectRangeSlider;
