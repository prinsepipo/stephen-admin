import { useEffect, useState } from "react";

export const useClassName = (base, other) => {
  const [classes, setClasses] = useState(base);

  useEffect(() => {
    if (other) {
      setClasses(base + ' ' + other);
    }
  }, [base, other, setClasses]);

  return classes;
};
