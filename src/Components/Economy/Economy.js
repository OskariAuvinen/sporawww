import React from 'react';

export const Economy = () => {
    return (
        <div>
            <div className="product">
                <img
                    src={process.env.PUBLIC_URL + "assets/images/spora_economy.jpg"}
                    alt='SporaHeroIMG'
                />
                <div className="description">
                    <h3>Economy Lippu</h3>
                    <h5>15 rahaa</h5>
                </div>
            </div>
            <form action="store/create-checkout-session-economy" method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </div>
    )
}