"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleSwitch = () => {
  const [darkModeActive, setDarkModeActive] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();
  const handleToggleSwitch = () => {
    setDarkModeActive((prev) => !prev);
    if (resolvedTheme === "dark") {
      setTheme("light");
      setDarkModeActive(false);
    }
    if (resolvedTheme === "light") {
      setTheme("dark");
      setDarkModeActive(true);
    }
  };

  useEffect(() => {
    if (resolvedTheme === "dark") setDarkModeActive(true);
    else {
      setDarkModeActive(false);
    }
  }, [resolvedTheme]);
  return (
    <div className="flex items-center gap-2">
      <span className="whitespace-nowrap text-sm font-semibold">Dark Mode</span>
      <label
        htmlFor="check"
        className="relative h-[24px] w-[50px] cursor-pointer rounded-full bg-neutral-200"
      >
        <input
          id="check"
          type="checkbox"
          className="peer sr-only"
          checked={darkModeActive}
          onChange={handleToggleSwitch}
        />
        <span className="absolute left-1 top-1 aspect-square w-1/3 rounded-full bg-white transition-all duration-150 peer-checked:left-7 dark:bg-black" />
        {darkModeActive ? (
          <span className="absolute left-1 top-[3px] text-sm font-medium dark:text-black">
            On
          </span>
        ) : (
          <span className="absolute left-6 top-[3px] text-sm font-medium dark:text-black">
            Off
          </span>
        )}
      </label>
    </div>
  );
};

export default ToggleSwitch;
