export default function SearchBar (props) {
  return (
    <div className="filter">
      <input
        className="filter__search"
        type="search"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.setFilterText(e.target.value)}
      />

      <label className="filter__checkbox">
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.setInStockOnly(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}
