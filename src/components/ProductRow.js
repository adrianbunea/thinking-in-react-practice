export default function ProductRow (props) {
  const product = props.product;
  return (
    <tr>
      <td>
        {product.name}
      </td>
      <td>
        {product.price}
      </td>
      <td>
        {product.stocked ? 'In Stock' : 'Out of Stock'}
      </td>
    </tr>
  );
}
