import styles from "./app.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const PRODUCTS = `[
  { category: "Sporting Goods", price: "$49.99",
    stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99",
    stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99",
    stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99",
    stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99",
    stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", 
    stocked: true, name: "Nexus 7" }
  ];`;

export default function ReadMe() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Thinking in React</h1>
      <img
        className={styles.image}
        src="/assets/thinking-in-react-mock.png"
        alt="Mock"
      />
      <p>
        let think this is the Mok design of work..
        <br />
        <br />
        Our JSON API returns some data like below:
      </p>
      <SyntaxHighlighter
        children={PRODUCTS}
        language="javascript"
        style={dracula}
      />
      <h1>Step 1: Break The UI Into A Component Hierarchy</h1>
      <div>
        <p>As per mok design, we can divide this into Two component: </p>
        <ul>
          <li>Search Bar</li>
          <li>Product Table</li>
        </ul>
        <p>Product Table can be divided two more component</p>
        <ul>
          <li>Category Row</li>
          <li>Product Row</li>
        </ul>
        <h3>So the final Hierarchy is: </h3>
        <ol>
          <li>FilterableProductTable</li>
          <li>SearchBar</li>
          <li>ProductTable</li>
          <li>ProductCategoryRow</li>
          <li>ProductRow</li>
        </ol>
      </div>
    </div>
  );
}
