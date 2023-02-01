import styles from "./app.module.css";

function SearchBar() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        include in stock products only.
      </label>
    </div>
  );
}

function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function FilterableProductTable(props) {
  return (
    <div className={styles.fpt}>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}
