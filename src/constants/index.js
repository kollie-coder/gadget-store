import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { phone1, phone2, phone3, customer1, customer2, device1, device2, device3, device4, device5, device6, device7, device8, device9 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const phones = [
    {
        thumbnail: phone1,
        bigPhone: phone1,
    },
    {
        thumbnail: phone2,
        bigPhone: phone2,
    },
    {
        thumbnail: phone3,
        bigPhone: phone3,
    },
];

export const statistics = [
    { value: '20+', label: 'Brands' },
    { value: '300+', label: 'Shops' },
    { value: '5m+', label: 'Customers' },
];

export const products = [
    {
        imgURL: device1,
        name: "Ipad 15",
        price: "$1200.10",
    },
    {
        imgURL: device2,
        name: "Macbook Pro 2022",
        price: "$1600.20",
    },
    {
        imgURL: device3,
        name: "Macbook Air 2022",
        price: "$1520.20",
    },
    {
        imgURL: device4,
        name: "Ipad 10",
        price: "$810.20",
    },
    {
        imgURL: device5,
        name: "Ipad Pro",
        price: "$1230.20",
    },
    {
        imgURL: device6,
        name: "Ipod 3",
        price: "$400.20",
    },
    {
        imgURL: device7,
        name: "Airpod Pro Max",
        price: "$730.20",
    },
    {
        imgURL: device8,
        name: "Airpod Pro",
        price: "$380.20",
    },
    {
        imgURL: device9,
        name: "Airpod 2",
        price: "$200.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "iPhone", link: "/" },
            { name: "iPad", link: "/" },
            { name: "iWatch", link: "/" },
            { name: "Macbook Air", link: "/" },
            { name: "Macbook Pro", link: "/" },
            { name: "AirPod 2", link: "/" },
            { name: "AirPod Pro Max", link: "/" },
            { name: "AirPod Pro", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@applestores.com", link: "mailto:customer@applestores.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];