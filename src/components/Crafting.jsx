import React, { Children } from "react";
import CraftingBackground from '@site/static/img/crafting/crafting_background.png';

function Crafting(props) {
    const output = props.output;
    if (!output.isValidOutput()) throw "Invalid output ingredient supplied"

    const children = Children.toArray(props.children)

    return <div id='crafting' style={{position: "relative"}}>
        <img src={CraftingBackground} alt='Crafting Background'/>
        <img src={require(`@site/static/img/crafting/${output.texture}.png`).default} alt={output.getName()} title={output.getName()} width='32' height='32' style={{ position: "absolute", left: 204, top: 52 }}/>
        {children}
    </div>
}

function CraftingSlot(props) {
    const ingredient = props.ingredient;
    const { oreDict, col, row } = props

    const ingredientName = ingredient.getName();
    const name = oreDict ? oreDict + " | " + ingredientName : ingredientName;

    let xPos = 16 + (col - 1) * 36;
    let yPos = 16 + (row - 1) * 36;
    return <img src={require(`@site/static/img/crafting/${ingredient.texture}.png`).default} alt={name} title={name} width='32' height='32' style={{ position: "absolute", left: xPos, top: yPos }}/>
}

export {
    Crafting,
    CraftingSlot
}