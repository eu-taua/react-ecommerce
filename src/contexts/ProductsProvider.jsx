import { createContext } from "react"
import useProductsProvider from "../hooks/useProductsProvider"

export const ContextProducts = createContext({})

export default function Provider({ children }) {
  const ProductsProvider = useProductsProvider()
  return <ContextProducts.Provider value={ProductsProvider}>{children}</ContextProducts.Provider>
}
