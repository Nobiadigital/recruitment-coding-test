import Input from "../../components/form/Input";
import Button from "../../components/button/Button";
import { useEffect, useState, useRef } from "react";

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
