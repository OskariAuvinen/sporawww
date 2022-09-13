import React from 'react';

export const Business = () => {
    return (
        <div>
            <div className="product">
                <img
                    src={process.env.PUBLIC_URL + "assets/images/spora_business.jpg"}
                    alt='SporaHeroIMG'
                />
                <div className="description">
                    <h3>Business Lippu</h3>
                    <h5>25 rahaa</h5>
                </div>
            </div>
            <form action="store/create-checkout-session-business" method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </div>
    )
}