export default function SearchBar (props) {
  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.setFilterText(e.target.value)}/>

      <input
        name="product-name"
        type="checkbox"
        checked={props.inStockOnly}
        onChange={(e) => props.setInStockOnly(e.target.checked)}/>
      <label htmlFor="product-name">Only show products in stock</label>
    </>
  );
}
