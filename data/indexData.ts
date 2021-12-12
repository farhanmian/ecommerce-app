import discountItemCouch from "../assets/img/couch.png";
import discountItemPlasticChair from "../assets/img/discountItemChair.png";
import chair1 from "../assets/img/chair1.png";
import chair2 from "../assets/img/chair2.png";
import chair3 from "../assets/img/chair3.png";
import chair4 from "../assets/img/chair4.png";
import chair5 from "../assets/img/chair5.png";
import chair6 from "../assets/img/chair6.png";
import chair7 from "../assets/img/chair7.png";
import chair8 from "../assets/img/chair8.png";
import chair9 from "../assets/img/chair9.png";
import chair10 from "../assets/img/chair10.png";
import chair11 from "../assets/img/chair11.png";
import chair12 from "../assets/img/chair12.png";
import otherTrendingChair1 from "../assets/img/other-trending-chair1.png";
import otherTrendingChair2 from "../assets/img/other-trending-chair2.png";
import otherTrendingChair3 from "../assets/img/other-trending-chair3.png";
import woodChair from "../assets/img/wood-chair.png";
import trendingClock from "../assets/img/trending-clock.png";
import trendingDrawer from "../assets/img/trending-drawer.png";
import freeDelivery from "../assets/img/free-delivery.png";
import fullHoursSupport from "../assets/img/24-hours-support.png";
import cashback from "../assets/img/cashback.png";
import premiumQuality from "../assets/img/premium-quality.png";

export const featuredProductData = [
  {
    img: chair1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair2,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair3,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair4,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
];

export const latestProductsLink = [
  "New Arrival",
  "Best Seller",
  "Featured",
  "Special Offer",
];

export const shopexFeaturesData = [
  {
    img: freeDelivery,
  },
  {
    img: cashback,
  },
  {
    img: premiumQuality,
  },
  {
    img: fullHoursSupport,
  },
];

export const latestProductsData = [
  {
    img: chair8,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 1,
  },
  {
    img: chair5,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: true,
    id: 2,
  },
  {
    img: chair1,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 3,
  },
  {
    img: chair6,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 4,
  },
  {
    img: chair7,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 5,
  },
  {
    img: chair4,
    title: "Comfort Handy Craft",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 6,
  },
];

export const trendingProductsData = [
  {
    title: "Cantilever chair",
    img: chair9,
    price: 26.0,
    orignalPrice: 42,
    id: 1,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair10,
    price: 26.0,
    orignalPrice: 42,
    id: 2,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair11,
    price: 26.0,
    orignalPrice: 42,
    id: 3,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair7,
    price: 26.0,
    orignalPrice: 42,
    id: 4,
    category: "mainTrendingProduct",
  },
];
export const trendingProductsOtherTrendingData = [
  {
    title: "23% off in all products",
    link: "Shop Now",
    goto: "clock",
    img: trendingClock,
    imgStyle: { width: 213, height: 207 },
  },
  {
    title: "23% off in all products",
    link: "View Collection",
    goto: "drawer",
    img: trendingDrawer,
    imgStyle: { width: 312, height: 173 },
  },
];
export const otherTrendingChairData = [
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair1,
  },
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair2,
  },
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair3,
  },
];
export const discountItemLink = [
  "Wood Chair",
  "Plastic Chair",
  "Sofa Collection",
];
export const discountItemData = [
  {
    offer: "20% Discount Of All Products",
    img: woodChair,
    imgStyle: { width: 699 },
    productTitle: "Eams Wood Chair Compact",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Wood Chair",
    id: 1,
    features: [
      "High Quality Soft foam.",
      "Adjustable Seat Height, Armrest.",
      "Simple neutral colours.",
      "Frame Material: Solid Wood.",
    ],
  },
  {
    offer: "18% Discount Of All Products",
    img: discountItemPlasticChair,
    imgStyle: {
      width: 500,
      height: "max-content",
      top: "50%",
      transform: "translateY(-50%)",
    },
    productTitle: "Eams Plastic Chair Compact",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Plastic Chair",
    id: 2,
    features: [
      "High Quality Frame Material",
      "Clear lines and geomatric figures",
      "Simple neutral colours.",
      "Material expose like metals",
    ],
  },
  {
    offer: "25% Discount Of All Products",
    img: discountItemCouch,
    imgStyle: { width: 580 },
    productTitle: "Sofa Collection",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Sofa Collection",
    id: 3,
    features: [
      "Material expose like metals",
      "Clear lines and geomatric figures",
      "Simple neutral colours.",
      "Material expose like metals",
    ],
  },
];
export const topCategoriesItemData = [
  {
    img: chair12,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 1,
  },
  {
    img: chair1,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 2,
  },
  {
    img: chair9,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 3,
  },
  {
    img: chair2,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 4,
  },
  {
    img: chair3,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 5,
  },
  {
    img: chair11,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 6,
  },
  {
    img: chair5,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 7,
  },
  {
    img: chair6,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 8,
  },
  {
    img: chair7,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 9,
  },
  {
    img: chair8,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 10,
  },
  {
    img: chair10,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 11,
  },
  {
    img: chair4,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 12,
  },
];
export const topCategoryBtnData = [1, 2, 3];
