import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quos
        veritatis distinctio amet? Sunt nihil accusantium illo optio labore
        nesciunt.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
