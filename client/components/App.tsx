import { useState, useEffect } from 'react'

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
            width: '625px',
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
          width: '400px',
          height: 'auto',
        }}
      />
      <Outlet />
    </>
  )
}

export default App
