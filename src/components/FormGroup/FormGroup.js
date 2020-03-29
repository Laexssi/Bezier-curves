import React from 'react'
import './FormGroup.css'

const Form = ({onChange, coords}) => {
    return (
        <div className="Form">
            <fieldset>
            <legend>Set start point</legend>
            <label htmlFor="startPointX">X:</label>
            <input id="startPointX" name="sx" value={coords.sx} onChange={onChange}></input>
            <label htmlFor="startPointY">Y:</label>
            <input id="startPointY" name="sy" value={coords.sy} onChange={onChange}></input>
            </fieldset>
            <fieldset>
            <legend>Set end point</legend>
            <label htmlFor="endPointX">X:</label>
            <input id="endPointX" name="ex" value={coords.ex} onChange={onChange}></input>
            <label htmlFor="endPointY">Y:</label>
            <input id="endPointY" name="ey" value={coords.ey} onChange={onChange}></input>
            </fieldset>
            <fieldset>
            <legend>Set start control point</legend>
            <label htmlFor="c1PointX">X:</label>
            <input id="c1PointX" name="c1x" value={coords.c1x} onChange={onChange}></input>
            <label htmlFor="endPointY">Y:</label>
            <input id="c1PointY" name="c1y" value={coords.c1y} onChange={onChange}></input>
            </fieldset>
            <fieldset>
            <legend>Set end control point</legend>
            <label htmlFor="c2PointX">X:</label>
            <input id="c2PointX" name="c2x" value={coords.c2x} onChange={onChange}></input>
            <label htmlFor="endPointY">Y:</label>
            <input id="c2PointY" name="c2y" value={coords.c2y} onChange={onChange}></input>
            </fieldset>
        </div>
    )
}

export default Form
