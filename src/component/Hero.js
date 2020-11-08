import React, { useContext } from "react";
import phoneImg from "../assets/images/phone.svg";
import { AppContext } from "../context";
const Hero = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments,send payouts, and
            manage their business online.
          </p>
          <button className="btn btn_start">start now</button>
        </article>
        <article>
          <img src={phoneImg} alt="" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
