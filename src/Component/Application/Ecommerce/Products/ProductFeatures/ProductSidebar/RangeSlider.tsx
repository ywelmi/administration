import { useState } from 'react'
import { useAppDispatch } from '../../../../../../ReduxToolkit/Hooks';
import { Range, getTrackBackground } from 'react-range';
import { filterPrice } from '../../../../../../ReduxToolkit/Reducer/FilterSlice';

const RangeSlider = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState([150, 650]);
  const STEP: number = 10;
  const MIN: number = 10;
  const MAX: number = 1250;
  const priceHandle = (value: number[]) => {
    setValues(value);
    dispatch(filterPrice(value))
  };
  return (
    <Range values={values} step={STEP} min={MIN} max={MAX} onChange={values => priceHandle(values)}
    renderTrack={({ props, children }) => (
      <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={{...props.style,height: '36px',display: 'flex',width: '100%'}}
      >
        <output style={{ marginTop: '30px' }}>{values[0]}</output>
        <div
          ref={props.ref}
          style={{ alignSelf: 'center',height: '5px', width: '100%', borderRadius: '4px', background: getTrackBackground({values, colors: ['#ccc', '#35bfbf', '#ccc'], min: MIN, max: MAX}),}}>
          {children}
        </div>
        <output style={{ marginTop: '30px' }}>{values[1]}</output>
      </div>
    )}
    renderThumb={({ props }) => (
      <div
        {...props}
        style={{ ...props.style, height: '16px', width: '16px', borderRadius: '60px', backgroundColor: '#35bfbf', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 2px 6px #AAA'}}
      >
      </div>
    )}
  />
  )
}

export default RangeSlider