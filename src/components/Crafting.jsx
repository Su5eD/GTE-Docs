import React, { useState, useEffect } from "react";
import CraftingBackground from "@site/static/img/crafting/crafting_background.png";
import TooltipImg from "./TooltipImg";

function mojanglesNumber(number, left, top) {
  const numberOffset = (parseInt(number) - 1) * 16;
  return <div
    style={{
      left: left + "px",
      top: top + "px",
      width: "16px",
      height: "16px",
      position: "absolute",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        left: -numberOffset + "px",
        top: "-3px",
        width: "160px",
        height: "16px",
        position: "absolute"
      }}
    >
      <img src='https://wiki.industrial-craft.net/images/5/5a/GridNumbersCSS.png' alt='Numbers' width='160px'
           height='16px'/>
    </div>
  </div>;
}

function Mojangles({ number, left, top }) {
  return mojanglesNumber(number, left, top);
}

function Crafting({ children, output, count }) {
  if (!output.isValidOutput()) throw new Error("Invalid output ingredient supplied");

  const elements = [
    <img key='background' src={CraftingBackground} alt='Crafting Background' width='260px' height='136px'/>,
    <TooltipImg
      key='output'
      src={require(`@site/static/img/crafting/${output.texture}.png`).default}
      alt={output.getName()}
      tooltip={output.getName()}
      width='32px'
      height='32px'
      style={{
        position: "absolute",
        left: 204,
        top: 52
      }}
    />
  ];

  if (count) elements.push(<Mojangles key='count' number={count} left={225} top={71}/>);

  return <div className='crafting' style={{ position: "relative", display: "inline-block" }}>
    {elements}
    {children}
  </div>;
}

function CraftingSlot({ oreDict, ingredient, col, row }) {
  const ingredientName = ingredient.getName();
  const name = oreDict ? oreDict + " | " + ingredientName : ingredientName;

  const xPos = 16 + (col - 1) * 36;
  const yPos = 16 + (row - 1) * 36;

  return <TooltipImg
    key={col.toString() + row}
    src={require(`@site/static/img/crafting/${ingredient.texture}.png`).default}
    alt={name}
    tooltip={name}
    width='32px'
    height='32px'
    style={{
      position: "absolute",
      left: xPos,
      top: yPos
    }}
  />;
}

function CraftingSlotMulti({ oreDict, ingredients, col, row }) {
  const [ingredient, setIngredient] = useState(ingredients[0]);
  if (ingredients.length > 1) {
    useEffect(() => {
      const timerID = setInterval(() => {
        const nextIngredient = (ingredients.indexOf(ingredient) + 1) % ingredients.length;
        setIngredient(ingredients[nextIngredient]);
      }, 2000);

      return function cleanup() {
        clearInterval(timerID);
      };
    });
  }

  return CraftingSlot({ oreDict, ingredient, col, row });
}

export {
  Crafting,
  CraftingSlot,
  CraftingSlotMulti,
  Mojangles
};
