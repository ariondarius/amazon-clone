import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="home__image"
          className="home__image"
        />
      </div>
      <div className="home__row">
        <Product
          id="01"
          title="Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches, Multimedia Control for PC and Desktop Computer, with Removable Hand Rest"
          price={43.87}
          image="https://m.media-amazon.com/images/I/61nghmq8GPL._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="02"
          title="RK ROYAL KLUDGE RK61 Wired 60% Mechanical Gaming Keyboard RGB Backlit Ultra-Compact Hot-Swappable Red Switch White"
          price={42.48}
          image="https://m.media-amazon.com/images/I/61UGJ7z-sUL._AC_SY355_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="03"
          title="Gaming Keyboard RGB USB Wired Rainbow Keyboards Designed for PC Gamers, PS4, PS5, Laptop, Xbox, Nintendo Switch, Orzly - RX-250 Hornet Edition (Black) Brand: Orzly"
          price={19.81}
          image="https://m.media-amazon.com/images/I/61Nt8geXzWL._AC_SL1500_.jpg"
          rating={3}
        />
        <Product
          id="04"
          title="Edragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
          price={43.87}
          image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY450_.jpg"
          rating={5}
        />
        <Product
          id="05"
          title="Gaming Keyboard and Mouse Combo, K1 LED Rainbow Backlit Keyboard with 104 Key Computer PC Gaming Keyboard for PC/Laptop(White)"
          price={26.99}
          image="https://m.media-amazon.com/images/I/61AuRwdIkrL._AC_SY450_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="06"
          title="Logitech G213 Prodigy Gaming Keyboard, LIGHTSYNC RGB Backlit Keys, Spill-Resistant, Customizable Keys, Dedicated Multi-Media Keys – Black"
          price={32.66}
          image="https://m.media-amazon.com/images/I/61Nt8geXzWL._AC_SY450_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
