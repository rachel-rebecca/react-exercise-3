import { InputGroup, FormControl } from "react-bootstrap";
import {useState} from "react"
import "./React.css";

function Diameter() {

    // const[width, setWidth] = useState(25);
    // const[height, setHeight] = useState(25);

    const[diameter, setDiameter] = useState(0);
    const[circle, setCircle] = useState(false);

    const styles = {
        height: diameter,
        width: diameter,
        backgroundColor: "lightBlue",
        border: "darkBlue"
    }

    // const circle = {
    //     borderRadius: 50 + "%",
        
    // }

  return (
    <div>
        <label>
            <input type="number" onChange={(event) => {setDiameter(event.target.valueAsNumber)}} />
            Diameter
        </label>
        <label>
            <input type="checkBox" onChange={(event) => {setCircle(event.target.checked)}}/>
            Is Circle?
        </label>
        <div style={styles} className={circle ? "circle" : ""}></div>
    </div>

    // <div className="container">
    //   <InputGroup className="inputNumber mb-3">
    //   <FormControl aria-label="Number input with checkbox" />
    //     <p className="pDiameter">Diameter</p>
    //     <InputGroup.Checkbox className="inputCheck" aria-label="Checkbox for following text input" />
    //     <p className="pCheck">Is Circle?</p>
    //   </InputGroup>
    //   <div className="circleSquare" style={styles}></div>
    // </div>
  );
}

export default Diameter;
