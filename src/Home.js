import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN93HN/A  (13.3 inch, Silver, 1.29 kg)"
                        price={81990}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/khdqnbk0/computer/f/y/t/apple-original-imafxfyqydgvrkzv.jpeg?q=70"
                    />
                    <Product
                        id="3254354345"
                        title="APPLE iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only)"
                        price={43990}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg?q=70"
                    />
                    <Product
                        id="29639017"
                        title="APPLE iPhone 14 (Purple, 128 GB)"
                        price={70999}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70"
                    />
                    
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Ikigai - to a Long and Happy life  (English, Hardcover, Garcia Hector)"
                        price={346}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/book/w/b/f/ikigai-original-imaggkyuzdwwghrq.jpeg?q=70"
                    />
                    <Product
                        id="23445930"
                        title="Google Nest Mini (2nd Gen) with Google Assistant with Google Assistant Smart Speaker  (Charcoal)"
                        price={3999}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/832/832/k33c4nk0/smart-assistant/a/j/k/nest-mini-ga00781-in-google-original-imafmauqguud8wsz.jpeg?q=70"
                    />
                     <Product
                        id="70829345"
                        title="Women Black Hand-held Bag - Extra Spacious  (Pack of: 4)"
                        price={499}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/832/832/ki214sw0-0/hand-messenger-bag/k/j/o/pu-leather-latest-handbags-for-women-s-ladies-combo-of-4-black-original-imafxxksnjw6kf3s.jpeg?q=70"
                    />
                   
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="LG UQ7500 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV 2022 Edition  (55UQ7500PSF)"
                        price={45990}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/television/n/h/y/-original-imagg24zpbk2h7tx.jpeg?q=70"
                    />
                     <Product
                        id="49538094"
                        title="Haier 531 L Frost Free French Door Bottom Mount Inverter Technology Star Convertible Refrigerator  (Black, HRB-550KG)"
                        price={80990}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/k0tw13k0/refrigerator-new/g/r/e/hrb-550kg-inverter-technology-haier-original-imafkgumychrnqjs.jpeg?q=70"
                    />

                    <Product
                        id="45803029"
                        title="Whirlpool 6 kg Magic Clean 5 Star "
                        price={13990}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/washing-machine-new/s/e/b/-original-imagzcg5zgb7bvfh.jpeg?q=70"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
