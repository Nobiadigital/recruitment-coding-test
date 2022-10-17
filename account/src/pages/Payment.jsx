import Header from "../components/header/Header";
import PaymentForm from "../partials/payment/PaymentForm";
import Balance from "../partials/payment/Balance";

const Payment = () => {
  return (
    <main className="´payment col col--12 col--lg--9 overview box-shadow--primary-80">
      <Header
        title="Payment"
        preamble="Make a payment on your outstanding balance below in just a few simple steps"
      />
      <div className="grid__inner grid__inner--stretch main-box">
        <div className="col col--12">
          <div className="title">
            <h4>Pay with debit or credit card</h4>
          </div>
        </div>
        <div className="credit-information col col--lg--8 col--12 border border--after">
          <PaymentForm />
        </div>
        <Balance />
      </div>
    </main>
  );
};

export default Payment;
