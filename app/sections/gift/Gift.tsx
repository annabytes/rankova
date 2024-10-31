import Image from "next/image";
import Link from "next/link";
import "./Gift.css";

import giftCards from "@/app/img/gift-cards.png";

export const Gift = () => {
    return (
        <section className="gift-section" id="gift-card">
            <div className="gift">
                <Image className="gift-card" src={giftCards} alt="gift card" />

                <div className="gift-card-content">
                    <h2 className="gift-card-title">Подарункові сертифікати</h2>
                    <p className="gift-card-desc">
                        У нас ти можеш придбати сертифікати та подарувати
                        музичні враження своїм рідним та друзям.
                    </p>
                    <Link target="_blank" href="https://o2102.alteg.io/loyalty">
                        <button className="enroll-btn buy-btn">Придбати</button>
                    </Link>
                </div>
            </div>
            <Link target="_blank" href="https://o2102.alteg.io/loyalty">
                <button className="enroll-btn buy-btn_mobile">Придбати</button>
            </Link>
        </section>
    );
};
