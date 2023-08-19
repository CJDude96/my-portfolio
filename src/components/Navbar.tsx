'use client'
import React from 'react'
import usePortfolio from '@/hooks/usePortfolio'

const Navbar = () => {
  
  const { theme, toggleTheme } = usePortfolio()
     
  return (
    <div>
        <p>Tema: {theme}</p>
        <button
            onClick={toggleTheme}
        >
            Cambiar tema
        </button>
    </div>
  )
}

export default Navbar