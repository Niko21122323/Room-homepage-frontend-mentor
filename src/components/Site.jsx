import { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";
import Dark from "../images/image-about-dark.jpg";
import Light from "../images/image-about-light.jpg";

const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: "./images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: "./images/desktop-image-hero-3.jpg",
  },
];

export default function Site() {
  const [items] = useState(data);
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === items.length) {
      slideIndex(1);
    }
  }

  function previousSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(items.length);
    }
  }

  return (
    <>
      <section>
        {items.map((item, index) => (
          <article
            key={item.id}
            className={slideIndex === index + 1 ? "article" : "hidden"}
          >
            <div className="article-container">
              <div className="img-and-btns">
                <picture>
                  <source media="(min-width: 376px)" srcSet={item.desktop} />
                  <img
                    src={item.mobile}
                    alt={item.title}
                    className="main-img"
                  />
                </picture>
                <ul className="buttons">
                  <li>
                    <button onClick={previousSlide} className="arrow-btn">
                      <img src={left} />
                    </button>
                  </li>
                  <li>
                    <button onClick={nextSlide} className="arrow-btn">
                      <img src={right} />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mainText-container">
                <div className="main-text">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <button className="shop-btn">
                    Shop Now <img src={arrow} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
        <article className="about-section">
          <div>
            <img src={Dark} />
          </div>
          <div className="about-text">
            <h2>About our furniture</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div>
            <img src={Light} />
          </div>
        </article>
      </section>
    </>
  );
}
