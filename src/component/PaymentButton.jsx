import React, { useEffect } from 'react';

const PaymentButton = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {
  useEffect(() => {
    const loadPayPalScript = async () => {
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=Ab7_ZNcPgdSSTiZWkW05_MYmL2m1fPDiL3lS8yVWFLDGX5Km1B7WAyY6o7qckg0plTf9rdLP_chcrRZi&buyer-country=US&currency=USD&components=buttons`;
        script.async = true;
        script.onload = initializePayPalButtons;
        script.onerror = () => onPaymentError(new Error('Failed to load PayPal SDK'));
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      } else {
        initializePayPalButtons();
      }
    };

    const initializePayPalButtons = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalAmount.toFixed(2), // Ensure proper formatting
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            onPaymentSuccess(details);
          });
        },
        onError: (error) => {
          onPaymentError(error);
        },
      }).render('#paypal-button-container');
    };

    loadPayPalScript();
  }, [totalAmount, onPaymentSuccess, onPaymentError]);

  if (!totalAmount || totalAmount <= 0) {
    return <p className="text-danger">Invalid payment amount. Please update your cart.</p>;
  }

  return (
    <div id="paypal-button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* PayPal button will be dynamically rendered here */}
    </div>
  );
};

export default PaymentButton;
