import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Inicializamos estado leyendo localStorage o usando valores por defecto
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  // Guardamos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode'; // Aplica clase al body
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Diccionario de textos (puedes ampliarlo luego)
  const translations = {
    es: { home: "Inicio", projects: "Proyectos", contact: "Contacto", welcome: "Bienvenido a mi Portfolio" },
    en: { home: "Home", projects: "Projects", contact: "Contact", welcome: "Welcome to my Portfolio" }
  };

  // Función helper para obtener texto
  const t = (key) => translations[lang][key] || key;

  return (
    <GlobalContext.Provider value={{ theme, setTheme, lang, setLang, t }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para no tener que importar useContext en todos lados
export const useGlobal = () => useContext(GlobalContext);