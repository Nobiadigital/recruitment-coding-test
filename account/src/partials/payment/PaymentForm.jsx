import Input from "../../components/form/Input";
import Button from "../../components/button/Button";
import { useEffect, useState, useRef } from "react";
import adyenCheckout from "@adyen/adyen-web";

const paymentResults = {
  NONE: 'none',
  SUCCESSFUL: 'success',
  FAIL: 'fail'
};

const PaymentForm = () => {
  const [amountToPay, setAmountToPay] = useState('');
  const [startPaying, setStartPaying] = useState(false);
  const [paymentSession, setPaymentSession] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentResult, setPaymentResult] = useState(paymentResults.NONE);
  const adyenWrapper = useRef(null);

  function resetForm() {
    setPaymentResult(paymentResults.NONE);
    setStartPaying(false);
    setPaymentCompleted(false);
  };

  useEffect(() => {
    if(adyenWrapper.current){
      (async () => {
        const url = `${window.PUBLIC_APP_SETTING_BACKEND_API}payment/session?returnUrl=${encodeURIComponent(window.location.href + '?completed=true')}&amount=${amountToPay}`;
        const options = {
          mode: "cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${(window.__OMNI__ && window.__OMNI__.access_token) || prompt('bearer token? get one from tokens api!')}`,
          }
        };

        const res = await fetch(url, options);
        let configuration = await res.json();
        setPaymentSession(configuration);
        setPaymentResult(paymentResults.NONE);

        configuration = {
          ...configuration,
          locale: "en_US",
          showPayButton: true,
          paymentMethodsConfiguration: {
            ideal: {
              showImage: true
            },
            card: {
              hasHolderName: true,
              holderNameRequired: true,
              name: "Credit or debit card",
              amount: {
                value: configuration.amount,
                currency: "GBP"
              }
            },
          },
          onPaymentCompleted: (result, component) => {
            setPaymentSession(null);
            setPaymentCompleted(true);
            setPaymentResult(!!result && result.resultCode === 'Authorised'
              ? paymentResults.SUCCESSFUL
              : paymentResults.FAIL);

              component.unmount();
          },
          onError: (error, component) => {
            setPaymentCompleted(true);
            setPaymentResult(paymentResults.FAIL);
            console.error(error.name, error.message, error.stack, component);
            component.unmount();
          }
        };

        const checkout = await new adyenCheckout(configuration);

        adyenWrapper.current.innerHTML = '';
        checkout.create('card').mount(adyenWrapper.current);
      })();
    }

    return () => {
      if(adyenWrapper.current){
        // shutdown adyen if needed
      }
    };
  }, [startPaying, amountToPay]);

  if(!startPaying && !paymentCompleted){
    return (
      <div>
        <form>
          <Input inputLabel={"Amount you want to pay"} placeholder={"£0.00"} value={amountToPay} setState={setAmountToPay} />
        </form>
        <Button
          text="Pay securely"
          variant="primary"
          size="regular"
          icon="icon-lock"
          disabled={!amountToPay || !!isNaN(amountToPay) || amountToPay <= 0}
          alignIcon="left"
          onClick={() => setStartPaying(true)}
        />
      </div>
    );
  }

  if (paymentCompleted) {
    if (paymentResult === paymentResults.SUCCESSFUL) return (
      <div>Payment completed</div>
    );

    if (paymentResult === paymentResults.FAIL) return (
      <div>
        <p>Payment failed</p>
        <Button
          text="Try again"
          variant="secondary"
          size="regular"
          onClick={resetForm} />
      </div>
    );
  }
  
  return (
    <div ref={adyenWrapper}>loading ...</div>
  );
};

export default PaymentForm;
