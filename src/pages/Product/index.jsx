import { useParams } from "react-router-dom"
import { ProductCard } from "../../components/ProductCard"
import { ProductList } from "../../components/ProductList"
import useProducts from "../../hooks/useProducts"
import "./styles.scss"

export const Product = () => {
  const { products } = useProducts()
  const { id } = useParams()
  const product = products.find(prod => prod.id === Number(id))
  const related = products.slice(0, 4)

  return (
    product && (
      <div className="container">
        <div className="title-bar-wrapper">
          <p>Home - Blusas e Camisas - {product.name}</p>
        </div>
        <main>
          <ProductCard product={product} />
          <div className="related-products">
            <h1>Produtos Relacionados</h1>
            <ProductList products={related} />
          </div>
        </main>
      </div>
    )
  )
}
