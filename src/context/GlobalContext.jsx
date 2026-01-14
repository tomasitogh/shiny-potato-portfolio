import { createContext, useState, useContext, useEffect } from 'react';

import es from '../translations/es.json';
import en from '../translations/en.json';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Inicializamos estado leyendo localStorage o usando valores por defecto
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  // Guardamos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode'; // Aplica clase al body
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Diccionario de textos cargado desde JSONs
  const translations = { es, en };

  // Función helper para obtener texto (soporta claves anidadas tipo "hero.title")
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <GlobalContext.Provider value={{ theme, setTheme, lang, setLang, t }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para no tener que importar useContext en todos lados
export const useGlobal = () => useContext(GlobalContext);