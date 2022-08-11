import React from "react";
import { useState } from "react";
import useStore from "../../store/store";
import "./input-form.styles.css";

export const InputForm = ({ rows, cols, limit }) => {
  const paragraph = useStore((state) => state.paragraph);
  const setParagraph = useStore((state) => state.setParagraph);

  const [input, setInput] = useState("");
  const [charLen, setCharLen] = useState(limit);

  const handleChange = (event) => {
    setInput(event.target.value);
    setCharLen(event.target.value.length);
  };

  const handleSubmit = () => {
    setParagraph(input);
  };

  return (
    <>
      <div className="outer_container">
        <form className="form_container">
          <textarea
            className="textArea"
            placeholder="Enter your paragraph here!"
            rows={rows}
            cols={cols}
            value={input}
            onChange={handleChange}
            maxLength={limit}
            required
          />
          <p>{charLen}/{limit}</p>
          
        </form>
        <button type="button" onClick={handleSubmit}>
            SUBMIT
          </button>
       
      </div>
    </>
  );
};
