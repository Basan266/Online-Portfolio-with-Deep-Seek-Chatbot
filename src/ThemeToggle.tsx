import { useState, useEffect } from "react";
import { Sun, Moon} from "lucide-react";
import "./ThemeToggle.css"; // Siguraduhing tama ang path ng CSS mo

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="header-container">
    
   

        <div 
          className={`theme-switch-track ${isDark ? "active" : ""}`} 
          onClick={() => setIsDark(!isDark)}
        >
          <div className="theme-switch-thumb">
            {isDark ? (
              <Moon size={14} color="#475569" strokeWidth={2.5} />
            ) : (
              <Sun size={14} color="#475569" strokeWidth={2.5} />
            )}
          </div>
        </div>
    </div>
  );
};

export default ThemeToggle;