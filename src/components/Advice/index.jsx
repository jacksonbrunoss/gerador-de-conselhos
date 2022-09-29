import React from "react";
import "./styled.css";
import Icon from "../../assets/pattern-divider-desktop.svg";
import IconBTN from "../../assets/icon-dice.svg";

const Advice = ({ id, advice, setRandom }) => {
  return (
    <section className="Wrapper-advice">
      <header>
        <p>advice {id}</p>
      </header>
      <main>
        <blockquote>
          <h2>{advice}</h2>
          <img src={Icon} alt={advice} />
        </blockquote>
      </main>
      <footer>
        <button onClick={setRandom}>
          <img src={IconBTN} alt={advice} />
        </button>
      </footer>
    </section>
  );
};

export default Advice;
