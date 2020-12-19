import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable (props) {
  const products = renderRows(props.products);

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
        {products}
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

export default ProductTable;
