/**
 * - when creating custom hooks or reusable componnets,
 *      you hide complexity behind a clean API
 * - this is how we think in react;
 *      definition of a component and abstracting logic
 */

import { useState } from "react";

// abstract hidden logic, reusable
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue((v) => !v);

  return [value, toggle] as const;
}

// abstract component, reusable
function ToggleSwitch() {
  const [on, toggle] = useToggle();

  return (
    <div>
      <p>{on ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
