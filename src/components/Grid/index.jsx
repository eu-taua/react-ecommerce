import "./styles.scss"
import menCategory from "/src/assets/men-category.png"
import womenCategory from "/src/assets/women-category.png"
import jewelleryCategory from "/src/assets/jewellery-category.png"

export const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-in ">
        <div className="men-category">
          <div>
            <p>MEN DRESSES</p>
            <a>ver produtos {">"}</a>
          </div>
          <img src={menCategory} />
        </div>
        <div className="jewellery-category">
          <div>
            <p>JEWELLERY</p>
            <a>ver produtos {">"}</a>
          </div>
          <img src={jewelleryCategory} />
        </div>
      </div>
      <div className="women-category">
        <div>
          <p>WOMEN DRESSES</p>
          <a>ver produtos {">"}</a>
        </div>
        <img src={womenCategory} />
      </div>
    </div>
  )
}
