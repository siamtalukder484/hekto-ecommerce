import React from "react";

export const Image = ({ style, source, alt }) => {
  return <img className={style} src={source} alt={alt} />;
};
