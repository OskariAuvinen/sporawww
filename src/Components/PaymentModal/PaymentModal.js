import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export const PaymentModal = () => {

    const stripePromise = loadStripe('pk_test_51LHTIkBvZGh44FYuaX3o4oCtYfV5BpDWungAeEjHwYPg1zvKqbUyjF9rEwmkMmo7vM3vd9WsMCySND1ps9Nj4oRE00lmn2O4GO');
    console.log(stripePromise); 

    const options = {
        // passing the client secret obtained from the server
        // clientSecret: 'sk_test_51LHTIkBvZGh44FYuv8edIqDDyauIOgFU6ZZwvH1VK6TMYHi7MK17eZpUMc5HLU4M62NYee7rLzxuSouZXcmZ8TEw00Xcp0Srah',
        clientSecret: 'sk_test_51LHTIkBvZGh44FYuv8edIqDDyauIOgFU6ZZwvH1VK6TMYHi7MK17eZpUMc5HLU4M62NYee7rLzxuSouZXcmZ8TEw00Xcp0Srah',
    };

    return (
        <div className='Modal'>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );

}