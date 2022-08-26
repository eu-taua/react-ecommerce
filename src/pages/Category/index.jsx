import "./styles.scss"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { ProductList } from "../../components/ProductList"
import { Pagination } from "../../components/Pagination"

export const Category = ({ products }) => {
  const { category } = useParams()

  const [selector, setSelector] = useState("FEMININO")

  return (
    <div className="container">
      <div className="title-bar-wrapper">
        <div className="title-bar">
          <h1>{category.toUpperCase()}</h1>
          <p>
            Home - {category === "blusas" || category === "camisas" ? "Blusas e Camisas -" : ""} {category}
          </p>
        </div>
      </div>

      <main>
        <nav className="categories">
          <button
            className={selector === "FEMININO" ? "selected" : ""}
            onClick={e => setSelector(e.target.textContent)}
          >
            FEMININO
          </button>
          <button
            className={selector === "MASCULINO" ? "selected" : ""}
            onClick={e => setSelector(e.target.textContent)}
          >
            MASCULINO
          </button>
          <button
            className={selector === "ACESSÓRIOS" ? "selected" : ""}
            onClick={e => setSelector(e.target.textContent)}
          >
            ACESSÓRIOS
          </button>
        </nav>

        <div className="show-models">
          <p>
            ORDENAR: <span>NAME</span>
          </p>
          <p>
            VISUALIZAR: <span>9</span>
          </p>
          <p>
            VIEW: <span>  </span>
          </p>
        </div>

        <ProductList products={Array.from([...products, ...products])} />
        <Pagination />
      </main>
    </div>
  )
}
