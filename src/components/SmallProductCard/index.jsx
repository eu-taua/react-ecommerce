import { useNavigate } from "react-router-dom"
import "./styles.scss"

export const SmallProductCard = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div className="product-wrapper" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.photo} />
      <div className="description">
        <p>{product.name}</p>
        <span>R$ {product.price}</span>
      </div>
    </div>
  )
}
