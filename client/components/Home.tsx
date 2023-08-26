import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
      <a href="/pokedex">
        <img
          src="/images/pokedex.png"
          alt="pokedex"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '430px',
            height: 'auto',
          }}
        />
      </a>
    </>
  )
}
