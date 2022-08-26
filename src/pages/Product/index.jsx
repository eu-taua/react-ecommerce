import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductList } from "../../components/ProductList"
import useProducts from "../../hooks/useProducts"
import "./styles.scss"

export const Product = () => {
  const { products } = useProducts()
  const { id } = useParams()
  const product = products.find(prod => prod.id === Number(id))
  const related = products.slice(0, 4)
  const productColors = ["blue", "red", "purple", "green"]
  const productSizes = ["P", "M", "G", "XG", "XXG"]

  const [selectedOptions, setSelectedOptions] = useState({ color: "red", size: "M", amount: 1 })

  return (
    product && (
      <div className="container">
        <div className="title-bar-wrapper">
          <p>Home - Blusas e Camisas - {product.name}</p>
        </div>
        <main>
          <div className="product">
            <div className="images-wrapper">
              <img src={product.photo} alt="product image" />
            </div>
            <div className="product-details">
              <div className="description-wrapper">
                <h1>{product.name}</h1>
                <h2>R$ {product.price}</h2>
                <p>
                  But I must explain to you how all this mistaken idea of ouncing and aising pain was born and I will
                  give you a complete count of ut I must explain to you how all this aken idea of enouncing pleasure
                  born and I will give you a complete account of
                </p>
              </div>
              <div className="options-wrapper">
                <div className="product-colors">
                  <h4>
                    CORES <span>*</span>
                  </h4>
                  <div className="colors-wrapper">
                    {productColors.map(color => (
                      <div
                        key={color}
                        onClick={() => setSelectedOptions({ ...selectedOptions, color })}
                        className={`color ${color === selectedOptions.color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="product-sizes">
                  <h4>TAMANHOS</h4>
                  <div className="sizes-wrapper">
                    {productSizes.map(size => (
                      <div
                        key={size}
                        onClick={() => setSelectedOptions({ ...selectedOptions, size })}
                        className={`size ${size === selectedOptions.size ? "selected" : ""}`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="buy-product">
                <div className="product-amount">
                  <button className="dec" onClick={e => handleProductAmount(e)}>
                    -
                  </button>
                  <input
                    value={selectedOptions.amount}
                    onChange={e => setSelectedOptions({ ...selectedOptions, amount: e.target.value })}
                  />
                  <button className="inc" onClick={e => handleProductAmount(e)}>
                    +
                  </button>
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
                    But I must explain to you how all this mistaken denoun aising pain was born and I will give you a
                    complete account of must explain to you how all this ake pain was born and give{" "}
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

          <div className="related-products">
            <h1>Produtos Relacionados</h1>
            <ProductList products={related} />
          </div>
        </main>
      </div>
    )
  )
}
