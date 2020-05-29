import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { productContext } from "./contexts/productContext";
import { cartContext } from './contexts/cartContext';

console.log("ea: App.js: shoppingContext: ", productContext);

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//console.log('ea: app.js additem item:', item)
		setCart([...cart, item]);
	};

	return (
		<div className="App">
		<productContext.Provider value={{ products, addItem }}>
		<cartContext.Provider value={{ cart }}>
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</cartContext.Provider>
			</productContext.Provider>
		</div>
	);
}

export default App;
