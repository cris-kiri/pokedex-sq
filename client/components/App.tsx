import { Outlet } from 'react-router-dom'
import Logos from './Logos'

export default function App() {
  return (
    <>
      <Logos />
      <Outlet />
    </>
  )
}
