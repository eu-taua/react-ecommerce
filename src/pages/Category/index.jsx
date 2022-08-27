import { useParams } from "react-router-dom"
import { useState } from "react"
import { SmallProductList } from "../../components/SmallProductList"
import { Pagination } from "../../components/Pagination"
import useProducts from "../../hooks/useProducts"
import "./styles.scss"

export const Category = () => {
  const { products } = useProducts()
  const { category } = useParams()

  const [selector, setSelector] = useState("FEMININO")

  const selectorsOptions = ["FEMININO", "MASCULINO", "ACESSÓRIOS"]

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
          {selectorsOptions.map(sel => (
            <button
              key={sel}
              className={selector === `${sel}` ? "selected" : ""}
              onClick={e => setSelector(e.target.textContent)}
            >
              {sel}
            </button>
          ))}
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

        <SmallProductList products={Array.from([...products, ...products])} />
        <Pagination />
      </main>
    </div>
  )
}
