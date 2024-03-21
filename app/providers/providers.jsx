// "use client"
import { ThemeProvider } from "next-themes"
import React, { Children } from "react"

export default function Providers({ children }) {
  const darkMode = true; // Replace with your logic to determine dark mode

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className={`min-h-screen select-none transition-colors duration-300 bg-${darkMode ? 'darkBackground' : 'lightBackground'}`}>
        {children}
      </div>
    </ThemeProvider>
  )
}
