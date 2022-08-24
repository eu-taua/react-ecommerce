import bgSlider from "/src/assets/background-slider.png"
import "./styles.scss"

export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="arrow left center">{"<"}</div>
      <img src={bgSlider} />
      <div className="slider-content">
        <h1>
          SUMMER <br /> COLECTION
        </h1>
        <p>Separamos os melhores looks para você neste 2019</p>
        <div className="custom-button">
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="arrow right center">{">"}</div>
    </div>
  )
}
