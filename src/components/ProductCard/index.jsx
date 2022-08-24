import "./styles.scss"

export const ProductCard = ({ product }) => {
  return (
    <div className="product-wrapper">
      <img src={product.photo} />
      <div className="description">
        <p>{product.name}</p>
        <span>R$ {product.price}</span>
      </div>
    </div>
  )
}
