import "./styles.scss"

export const Pagination = ({ currentPage = 1, totalPages = 5 }) => {
  const pages = [1, 2, 3, "...", 5]

  return (
    <div className="pagination-wrapper">
      <ul>
        {pages.map(page => (
          <li key={page} className={page === 1 ? "selected" : ""}>
            {page}
          </li>
        ))}
      </ul>
      <button>{">"}</button>
    </div>
  )
}
