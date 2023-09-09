/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
export default function Logos() {
  return (
    <>
      <a href="/" tabIndex={0}>
        <h1>
          <img
            src="/images/pokemon-logo.png"
            alt="pokemon logo"
            className="home"
          />
        </h1>
      </a>
      <img
        src="/images/pokedex-logo.png"
        alt="pokedex logo"
        className="home"
        tabIndex={0}
      />
    </>
  )
}
