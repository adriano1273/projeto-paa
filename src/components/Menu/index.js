import React, { useState } from 'react'
import './styles.css'

const Menu = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='menu'>
      <div className='icon' onClick={() => setOpenMenu(!openMenu)}>
        <svg width="82" height="70" viewBox="0 0 90 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="90" height="18" rx="9" fill="#2E2B2B"/>
          <rect y="29" width="90" height="18" rx="9" fill="#2E2B2B"/>
          <rect y="58" width="90" height="18" rx="9" fill="#2E2B2B"/>
        </svg>
      </div>
      {
        openMenu &&
        <div className='sidebar'>
          <ul className='options'>
            <a href="/">Início</a>
            <a href="/">Regras</a>
          </ul>

          <div className="voltar" onClick={() => setOpenMenu(!openMenu)}>
            <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41677e-05 12.0004L20.2316 23.1366L19.7601 0.0473933L1.41677e-05 12.0004ZM48.9592 9.00005L17.9554 9.63325L18.0371 13.6324L49.0408 12.9992L48.9592 9.00005Z" fill="#2E2B2B"/>
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default Menu 