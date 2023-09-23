import { useEffect, useState } from "react";

export const useMs = () => {
  const [s, d] = useState("");
  useEffect(() => {
    d(new Date().getMilliseconds().toString());
  }, []);

  return {
    ms: s,
  };
};
