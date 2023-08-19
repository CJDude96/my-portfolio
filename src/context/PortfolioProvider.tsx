'use client'
import * as React from "react"
import { useState, createContext } from "react";

interface Context {
    theme: 'light' | 'dark',
    toggleTheme: () => void,
    language: 'esp' | 'eng',
    toggleLanguage: () => void,
}

interface Props {
    children: React.ReactNode
}

const PortfolioContext = createContext<Context>({
    theme: 'light',
    toggleTheme: () => {},
    language: 'esp',
    toggleLanguage: () => {},
});

const PortfolioProvider: React.FC<Props> = ({children}) => {
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<'esp' | 'eng'>('esp')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'esp'? 'eng' : 'esp')
  }

  return (
    <PortfolioContext.Provider value={{
        theme,
        toggleTheme,
        language,
        toggleLanguage
    }}>
        {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext }
export default PortfolioProvider