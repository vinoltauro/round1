import React from "react";
import "./home.styles.css"
import { InputForm } from "../input-form/input-form.component";
import { Output } from "../output/output.component";

export const HomePage = () => {
  return (
    <div className="home_container">
        <h1>Round 1</h1>
      <InputForm rows="8" cols="70" limit="500"></InputForm>
      <Output></Output>
    </div>
  );
};
