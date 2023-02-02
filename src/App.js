import React from "react";
import styles from "./app.module.css";

class SearchBar extends React.Component {
  handleFilteredChange = (e) => {
    this.props.onFilteredTextChange(e.target.value);
  };
  handleInStockChange = (e) => {
    this.props.onStockChange(e.target.checked);
  };
  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filteredText}
          onChange={this.handleFilteredChange}
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          include in stock products only.
        </label>
      </div>
    );
  }
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
    <tr className={styles.productRow}>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  const filteredText = props.filteredText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filteredText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
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
      <thead className={styles.tableHead}>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>{rows}</tbody>
    </table>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredText: "",
      inStockOnly: false,
    };
    this.handleFilteredTextChange = this.handleFilteredTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilteredTextChange = (filteredText) => {
    this.setState({
      filteredText: filteredText,
    });
  };

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };
  render() {
    return (
      <div className={styles.fpt}>
        <SearchBar
          filteredText={this.state.filteredText}
          inStockOnly={this.state.inStockOnly}
          onFilteredTextChange={this.handleFilteredTextChange}
          onStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filteredText={this.state.filteredText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
