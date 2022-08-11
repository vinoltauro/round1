import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./word-modal.styles.css";
import axios from "axios";
import Spinner from "../spinner/spinner";

export const WordModal = () => {
  let history = useHistory();
  let { word } = useParams();
  const [cleanWord, setCleanWord] = useState(word);
  const [meaning, setMeaning] = useState("");
  const [isError, setisError] = useState(false);
  let [loading, setLoading] = useState(true);
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    word = word.split(".").join("").split(",").join("").split("!").join("");
    setCleanWord(word);
    const options = {
      method: "GET",
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setMeaning(response.data[0].meanings[0].definitions[0].definition);
        setLoading(!loading);
      })
      .catch(function (e) {
        setLoading(!loading);
        setisError(true);
      });
  }, []);

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.65)",
      }}
    >
      <div
        className="modal"
        style={{
          border: "none",
          position: "absolute",
          background: "#fff",
          top: "25%",
          left: "35%",
          right: "35%",
          padding: 20,
        }}
      >
        <button className="modal-button" type="button" onClick={back}>
          X
        </button>
        <div className="spinner">
          <Spinner loading={loading}></Spinner>
        </div>

        {!loading && (
          <div>
            <h1 className="heading">{cleanWord}</h1>
            { !isError ? (<div className="output-data">
              <h3>Definition:</h3>
              <p>{meaning}</p>{" "}
            </div>) : (<p className="error-message">Word not found</p>)}
          </div>
        )}
      </div>
    </div>
  );
};
