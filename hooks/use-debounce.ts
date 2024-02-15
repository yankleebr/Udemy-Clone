import { useEffect, useState } from "react";

export function useDebounce<T>(value:T, delay?:number):T{
  const [debaunceValeu, setDebaunceValue] = useState<T>(value)

  useEffect(()=>{
    const timer = setTimeout(() =>setDebaunceValue(value),delay || 500)

    return () =>{
      clearTimeout(timer)
    }
  },[value, delay])

  return debaunceValeu
}