import React, { useState, useEffect } from 'react';
import lightModeIcon from '../assets/night-mode-light.png';
import darkModeIcon from '../assets/night-mode-dark.png';

const DarkMode: React.FC = () => {
  // Initialize dark mode state from localStorage, defaulting to false if not found
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  const handleDarkModeToggle = () => {
    // Toggle the dark mode state
    setIsDarkMode((prevMode: boolean) => !prevMode);
  };

  // Use useEffect to update localStorage when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Use useEffect to toggle classes based on the updated state
  useEffect(() => {
    // Toggle classes on HTML body
    (document as any).documentElement.classList.toggle('dark-mode-html', isDarkMode);    // Toggle classes on header if it exists
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('dark-mode-header', isDarkMode);
    }
    // Toggle classes on certain divs if it exists
    const darkDivs = document.getElementsByClassName('dark-div');
    if (darkDivs) {
      for (let i = 0; i < darkDivs.length; i++) {
        darkDivs[i].classList.toggle('dark-mode-div', isDarkMode);
      }
    }
    // Toggle classes on certain header div if it exists
    const headerDiv = document.getElementsByClassName('header-div');
    if (headerDiv) {
      for (let i = 0; i < headerDiv.length; i++) {
        headerDiv[i].classList.toggle('dark-mode-header-div', isDarkMode);
      }
    }
    // Toggle classes on certain svgs if it exists
    const svg = document.getElementsByClassName('svg-icon');
    if (svg) {
      for (let i = 0; i < svg.length; i++) {
        svg[i].classList.toggle('dark-mode-svg', isDarkMode);
      }
    }
    // Toggle classes on footer if it exists
    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.toggle('dark-mode-footer', isDarkMode);
    }
    // Toggle classes on forms if it exists
    const form = document.querySelector('form');
    if (form) {
      form.classList.toggle('dark-mode-form', isDarkMode);
    }
    // Toggle classes on sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.toggle('dark-mode-section', isDarkMode);
    });
    // Toggle classes on input fields
    const inputF = document.querySelectorAll('input');
    inputF.forEach((inputF) => {
      inputF.classList.toggle('dark-mode-input', isDarkMode);
    });
    // Toggle classes on text area
    const textarea = document.querySelectorAll('textarea');
    textarea.forEach((textarea) => {
      textarea.classList.toggle('dark-mode-textarea', isDarkMode);
    });
  }, [isDarkMode]); // Run this effect whenever isDarkMode changes

  return (
    <div className='p-3 fixed bottom-10 z-[4] right-10 cursor-pointer rounded-[5em] bg-[#ee8038]' onClick={handleDarkModeToggle}>
    <img
      id="darkModeToggle"
      className='dark-icon w-[30px] scale-x-[-1] '
      src={isDarkMode ? lightModeIcon : darkModeIcon}
    />
    </div>
  );
};

export default DarkMode;