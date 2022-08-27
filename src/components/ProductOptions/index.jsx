import "./styles.scss"

export const ProductOptions = ({ selectedOptions, setSelectedOptions }) => {
  const productColors = ["blue", "red", "purple", "green"]
  const productSizes = ["P", "M", "G", "XG", "XXG"]

  return (
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
  )
}
