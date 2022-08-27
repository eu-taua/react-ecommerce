import { useState } from "react"
import { ProductOptions } from "../ProductOptions"
import "./styles.scss"

export const ProductCard = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState({ color: "red", size: "M", amount: 1 })

  return (
    <div className="product">
      <div className="images-wrapper">
        <img src={product.photo} alt="product image" />
      </div>
      <div className="product-details">
        <div className="description-wrapper">
          <h1>{product.name}</h1>
          <h2>R$ {product.price}</h2>
          <p>
            But I must explain to you how all this mistaken idea of ouncing and aising pain was born and I will give you
            a complete count of ut I must explain to you how all this aken idea of enouncing pleasure born and I will
            give you a complete account of
          </p>
        </div>
        <ProductOptions selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

        <div className="buy-product">
          <div className="product-amount">
            <button className="dec">-</button>
            <input
              value={selectedOptions.amount}
              onChange={e => setSelectedOptions({ ...selectedOptions, amount: e.target.value })}
            />
            <button className="inc">+</button>
          </div>
          <div className="custom-button">
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="accordions">
          <div className="description-accordion">
            <div className="accordion-header">
              <h4>DESCRIÇÃO</h4>
              <h1>-</h1>
            </div>
            <p>
              But I must explain to you how all this mistaken denoun aising pain was born and I will give you a complete
              account of must explain to you how all this ake pain was born and give{" "}
            </p>
          </div>
          <div className="especification-accordion">
            <div className="accordion-header">
              <h4>ESPECIFICAÇÕES</h4>
              <h1>+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
