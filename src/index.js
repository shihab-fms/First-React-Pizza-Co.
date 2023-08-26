import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello React!!!</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: 'red', fontSize: '3rem', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

const Pizza = ({ pizzas }) => {
  // if (!pizzas.soldOut) return null ;
  return (
    <div>
      <li className={`pizza ${!pizzas.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzas.photoName} alt={pizzas.name} />
        <h3>{pizzas.name}</h3>
        <p>{pizzas.ingredients}</p>

        <span>{!pizzas.soldOut ? 'Sold Out' : pizzas.price}</span>
      </li>
    </div>
  );
};

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <div>
      <main className="menu">
        <h2>Our Menue</h2>
        {numPizza > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to chooose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((el) => {
                return <Pizza pizzas={el} key={el.name} />;
              })}
            </ul>
          </>
        ) : (
          <p>We are sorry for this time. welcome back later :)</p>
        )}
      </main>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hours <= closeHour && hours >= openHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're close now. You'r welcome till {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open untill {openHour}:00 to {closeHour}, Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
