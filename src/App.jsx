import Header from './components/Header';
import Items from './pages/Items';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './App.css';

export const ShopContext = createContext({
  products: [],
  productCount: [],
  addCart: [],
  handleAddCart: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeItem: () => {},
  checkOut: () => {},
});

function App() {
  const [products, setProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    // async function getItems() {
    //   try {
    //     const response = await axios.get(
    //       'https://fakestoreapi.com/products?limit=9'
    //     );
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error('Error fetching characters:', error);
    //   }
    // }

    // getItems();
    async function getItems() {
      try {
        const response = await axios.get(
          'https://mock.shop/api?query={products(first:%2012){edges%20{node%20{id%20title%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}'
        );

        // Access the product data from the GraphQL response
        const productData = response.data.data.products.edges.map((edge) => {
          const product = edge.node;
          return {
            id: product.id,
            title: product.title,
            image: product.featuredImage.url,
            price: product.variants.edges[0].node.price,
          };
        });

        // Set the products state with the extracted data
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getItems();
  }, []);

  const handleAddCart = (id, title, imgURL, price) => {
    const updatedItems = [...addCart];
    const item = updatedItems.find((item) => item.id === id);

    if (item) {
      item.quantity += 1;
      setAddCart(updatedItems);
    } else {
      setAddCart((prevValue) => {
        return [
          ...prevValue,
          {
            id: id,
            title: title,
            imgURL: imgURL,
            price: price,
            quantity: 1,
          },
        ];
      });
    }
  };

  const increaseCartQuantity = (id) => {
    const updatedItems = [...addCart]; // Create a copy of the array
    const item = updatedItems.find((item) => item.id === id);

    if (item) {
      item.quantity += 1;
      setAddCart(updatedItems); // Update the state
    }
  };

  const decreaseCartQuantity = (id) => {
    const updatedItems = [...addCart]; // Create a copy of the array
    const item = updatedItems.find((item) => item.id === id);

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      setAddCart(updatedItems); // Update the state
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = addCart.filter((item) => item.id !== itemId);
    setAddCart(updatedItems);
  };

  const checkOut = () => {
    setAddCart([]);
  };

  return (
    <>
      <ShopContext.Provider
        value={{
          products,
          addCart,
          handleAddCart,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeItem,
          checkOut,
        }}>
        <Header />
        <Routes>
          <Route path='/' element={<Items />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </ShopContext.Provider>
    </>
  );
}

export default App;
