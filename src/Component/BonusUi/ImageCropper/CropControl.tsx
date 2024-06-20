import React from 'react'
import { Input, Label } from 'reactstrap'
import { ImageLabelProp } from '../../../Types/BonusUi/BonusUiTypes'
import { Btn } from '../../../AbstractElements'

const CropControl:React.FC<ImageLabelProp> = ({ onSelectFile, scale, imgSrc, setScale, rotate, setRotate, aspect, handleToggleAspectClick }) => {
  return (
    <div className="Crop-Controls">
      <Input type="file" accept="image/*" onChange={onSelectFile} />
      <div>
        <Label className="mt-2">Scale:</Label>
        <Input className="mt-1" id="scale-input" type="number" step="0.1" value={scale} disabled={!imgSrc} onChange={(e) => setScale(Number(e.target.value))} />
      </div>
      <div>
        <Label className="mt-2">Rotate:</Label>
        <Input className="mt-1" id="rotate-input" type="number" value={rotate} disabled={!imgSrc} onChange={(e) => setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))} />
      </div>
      <div>
        <Btn color={aspect ? "success" : "primary"} className="m-3 ms-0" onClick={handleToggleAspectClick}>Toggle aspect {aspect ? "off" : "on"}</Btn>
      </div>
    </div>
  )
}

export default CropControl