import useTimeout from "hooks/useTimeout";
import { useEffect } from "react";

function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
export default useDebounce;
