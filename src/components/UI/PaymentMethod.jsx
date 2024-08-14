import React, { useState } from 'react';
import "../../styles/payment-method.css";

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handleRedirect = (method) => {
        switch(method) {
            case 'paypal':
                window.location.href = 'https://www.paypal.com'; // Replace with your PayPal URL or integration link
                break;
            case 'googlePay':
                window.location.href = 'https://pay.google.com'; // Replace with your Google Pay URL or integration link
                break;
            default:
                console.log('No redirect available');
        }
    };

    return (
        <div className="page-container">
            <div className="payment-container">
                <h2>Order Overview</h2>
                <div className="payment-form">
                    <h3>Please Select a Payment Method</h3>
                    <div className="payment-method-buttons">
                        <button
                            className={paymentMethod === 'paypal' ? 'active' : ''}
                            onClick={() => {
                                setPaymentMethod('paypal');
                                handleRedirect('paypal');
                            }}
                        >
                            PayPal
                        </button>
                        <button
                            className={paymentMethod === 'googlePay' ? 'active' : ''}
                            onClick={() => {
                                setPaymentMethod('googlePay');
                                handleRedirect('googlePay');
                            }}
                        >
                            G Pay
                        </button>
                        <button
                            className={paymentMethod === 'creditCard' ? 'active' : ''}
                            onClick={() => setPaymentMethod('creditCard')}
                        >
                            Credit/Debit Card
                        </button>
                    </div>
                    {paymentMethod === 'creditCard' && (
                        <form>
                            <div className="form-group">
                                <label htmlFor="first-name">First name <span className="optional">(Optional)</span></label>
                                <input type="text" id="first-name" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" id="last-name" placeholder="Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="card-number">Card number</label>
                                <input type="text" id="card-number" placeholder="•••• •••• •••• ••••" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="•••" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiry-month">Valid until</label>
                                <div className="expiry">
                                    <select id="expiry-month">
                                        <option value="">Month</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        {/* Add other months */}
                                    </select>
                                    <select id="expiry-year">
                                        <option value="">Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        {/* Add other years */}
                                    </select>
                                </div>
                            </div>
                            <div className="payment-buttons">
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    )}
                    {paymentMethod === 'paypal' && (
                        <div className="paypal-section">
                            <p>You have selected PayPal. You will be redirected to PayPal to complete your purchase.</p>
                        </div>
                    )}
                    {paymentMethod === 'googlePay' && (
                        <div className="google-pay-section">
                            <p>You have selected Google Pay. You will be redirected to Google Pay to complete your purchase.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
