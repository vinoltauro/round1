import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ loading }) {
  return <ClipLoader color="#52bfd9" loading={loading} size={75} />;
}

export default Spinner;
