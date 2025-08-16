function ListElement({ name, price, inStock }) {
  return (
    <tr>
      <td style={{ color: inStock ? "#ffffffff" : "red" }}>
        {name}
      </td>
      <td>{price} ₹</td>
    </tr>
  );
}
export default ListElement;
