import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable (props) {
  let filteredProducts = filterByName(props.products, props.filterText);
  filteredProducts = filterByStock(filteredProducts, props.inStockOnly);
  const productRows = renderRows(filteredProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}

function renderRows (products) {
  const productsByCategory = products.reduce(groupByCategory, {});

  const rows = [];
  for (const [category, products] of Object.entries(productsByCategory)) {
    rows.push(<ProductCategoryRow category={category} key={`category-${category}`} />);

    products.forEach(product => {
      rows.push(<ProductRow product={product} key={`product-name-${product.name}`} />);
    });
  }

  return rows;
}

function groupByCategory (groupedProducts, currentProduct) {
  const category = currentProduct.category;

  if (!groupedProducts.hasOwnProperty(category)) {
    groupedProducts[category] = [];
  }

  groupedProducts[category].push(currentProduct);
  return groupedProducts;
}

function filterByName (products, name) {
  let filteredProducts = products;

  if (name !== '') {
    filteredProducts = products.filter(product => {
      return product.name.toUpperCase().includes(name.toUpperCase());
    });
  }

  return filteredProducts;
}

function filterByStock (products, availability) {
  let filteredProducts = products;
  if (availability) {
    filteredProducts = products.filter(product => {
      return product.stocked === availability;
    });
  }

  return filteredProducts;
}

export default ProductTable;
