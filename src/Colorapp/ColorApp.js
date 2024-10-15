import React, { useState } from "react";
import FormHandling from "./FormHandling";
import FormHandling2 from "./FormHandling-2";

function ColorApp(){
const [color, setColor] = useState("")
    return(
        <>
        <FormHandling color = {color} onColorChange = {setColor}/>
        <FormHandling2 color ={color}/>
        </>
    )
}
export default ColorApp