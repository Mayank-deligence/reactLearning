import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    price: 10,
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald",
  },
  {
    id: "p4",
    price: 25,
    title: "Wireless Bluetooth Earbuds",
    description: "High-quality earbuds with noise-cancelling technology",
  },
  {
    id: "p5",
    price: 15,
    title: "Organic Cotton T-Shirt",
    description: "A comfortable and sustainable t-shirt made from organic cotton",
  }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
