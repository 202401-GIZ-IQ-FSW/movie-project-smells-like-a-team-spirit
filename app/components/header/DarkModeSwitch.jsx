"use client"

import React, { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { UseTheme, useTheme } from "next-themes"
import react from "react"

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect (() => setMounted(true), []) ;
  return (
    <div>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme('dark')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ))}
    </div>
  );
}
