import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable (props) {
  return (
    <>
      <SearchBar />
      <ProductTable products={props.products}/>
    </>
  );
}

export default FilterableProductTable;
