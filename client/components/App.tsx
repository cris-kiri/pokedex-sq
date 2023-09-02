import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <a href="/">
        <img
          src="/images/pokemon-logo.png"
          alt="pokemon logo"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '350px',
            height: 'auto',
          }}
        />
      </a>
      <img
        src="/images/pokedex-logo.png"
        alt="pokedex logo"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '300px',
          height: 'auto',
        }}
      />
      <Outlet />
    </>
  )
}

export default App
