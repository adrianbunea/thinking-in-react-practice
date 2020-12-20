export default function ProductCategoryRow (props) {
  return (
    <tr className="product-table__row product-table__row--category">
      <td colSpan={3}>
        {props.category}
      </td>
    </tr>
  );
}
