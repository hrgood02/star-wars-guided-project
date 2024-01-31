/* eslint-disable react/prop-types */

export const Button = ({ data, text, handleClick }) => (
  <section className="Button">
    <button onClick={handleClick}>{text}</button>
  </section>
)