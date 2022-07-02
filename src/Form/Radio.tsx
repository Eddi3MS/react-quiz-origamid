import React from "react";
import { IPergunta } from "../App";

interface IRadio {
  pergunta: string;
  options: string[];
  onChange: (event: any) => void;
  value: string;
  id: string;
  active: boolean;
}

const Radio = ({ pergunta, options, onChange, value, id, active }: IRadio) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{
            marginBottom: "1rem",
            fontFamily: "monospace",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
