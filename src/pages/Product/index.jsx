import { useParams } from "react-router-dom"
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
          <div className="product">
            <div className="images-wrapper">1</div>
            <div className="description-wrapper">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>
                But I must explain to you how all this mistaken idea of ouncing and aising pain was born and I will give
                you a complete count of ut I must explain to you how all this aken idea of enouncing pleasure born and I
                will give you a complete account of
              </p>
            </div>
          </div>

          <div className="related-products">
            <h1>Produtos Relacionados</h1>
            <ProductList products={related} />
          </div>
        </main>
      </div>
    )
  )
}
