import { useEffect } from "react"

export const useAsyncEffect = (asyncFunc, deps) => {
  useEffect(() => {
    (async () => {
      asyncFunc()
    })()
  }, deps)
}