import { ProductCard } from "../../components/ProductCard"
import "./styles.scss"

export const ProductList = ({ products }) => {
  return (
    <div className="products-wrapper">
      {products &&
        products.map(prod => {
          //usualy i don't like to use math.random as key
          //when the key changes react will create a new component instance
          //instead of just update the current
          //but i'm working with duplicated arrays, so, duplicated id's either
          return <ProductCard key={Math.random()} product={prod} />
        })}
    </div>
  )
}
