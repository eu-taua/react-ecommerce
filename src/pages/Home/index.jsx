import { Grid } from "../../components/Grid"
import { ProductCard } from "../../components/ProductCard"
import { Slider } from "../../components/Slider"
import "./styles.scss"

export const Home = ({ products }) => {
  return (
    <div className="home-container">
      <Slider />
      <main>
        <section className="trend">
          <h1>TENDÊNCIAS</h1>
          <Grid />
        </section>
        <section className="popular">
          <h1>POPULARES</h1>
          <div className="products-wrapper">
            {products &&
              products.map(prod => {
                return <ProductCard key={prod.id} product={prod} />
              })}
          </div>
        </section>
        <div className="custom-button">
          <button>VER MAIS PRODUTOS</button>
        </div>
      </main>
    </div>
  )
}
