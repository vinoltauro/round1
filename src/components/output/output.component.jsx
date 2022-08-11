import React from "react";
import useStore from "../../store/store";
import "./output.styles.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Output = () => {
let location = useLocation();
  const paragraph = useStore((state) => state.paragraph);
  return (
    <div className="output_container">
      <p>{paragraph.split(" ").map((word) => {
              return word.length >= 5 ? (
                <span>
                  {" "}
                  <Link
                    key={word}
                    to={{
                      pathname: `/${word}`,
                      state: { background: location },
                    }}
                  >
                    {word}
                  </Link>{" "}
                </span>
              ) : (
                " " + word + " "
              );
            })}</p>
    </div>
  );
};
