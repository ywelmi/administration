import { useState } from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap';
import { Range, getTrackBackground } from "react-range";

const NegativeValueForm = () => {
  const [values, setValues] = useState([-10]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
            <Col md="10">
                <div style={{ color: "#0DA759" }} className="d-flex justify-content-center flex-wrap m-3">
                    <Range values={values} step={-1} min={-20} max={0} onChange={(values) => setValues(values)} renderTrack={({ props, children }) => (
                        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "30px" }} className="d-flex w-100">
                            <output className="mt-2 me-2">-20</output>
                            <div ref={props.ref} style={{ height: "3px", width: "100%", borderRadius: "4px", background: getTrackBackground({ values: values, colors: ["#0DA759", "#ccc"], min: -20, max: -0 }), alignSelf: "center" }}>
                                {children}
                            </div>
                            <output className="mt-2 ms-2">0</output>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} className="d-flex justify-content-center align-items-center rounded-5" style={{ ...props.style, height: "20px", width: "20px", border: "3px solid #0DA759", backgroundColor: "#0DA759", boxShadow: "0px 2px 6px #AAA" }}>
                            <div style={{ height: "0px", width: "0px", backgroundColor: "#0DA759" }} />
                        </div>
                    )}
                    />
                    <output className="mt-3" id="output">{values[0]}</output>
                </div>
            </Col>
        </Row>
      </FormGroup>
    </Form>
  )
}

export default NegativeValueForm