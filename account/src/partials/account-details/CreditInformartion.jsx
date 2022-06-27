import Button from "../../components/button/Button";

const CreditInformartion = () => {

  return (
    <div className="credit-information col col--md--6 col--12">
      <div className="title">
        <h4>Credit information</h4>
      </div>
      <div className="border border--after">
        <div className="col alert alert--assistive">
          <p className="p--small">
            Contact us if you want to change your holding branch. Remember, your
            account is valid at any Magnet Trade store.
          </p>
        </div>
        <div className="credit-information__col">
          <label className="label--small">Credit limit</label>
          <p>€25.000.00</p>
        </div>
        <div>
          <label className="label--small">Holding branch</label>
          <p>Greenwich</p>
        </div>
        <Button
          text="Request new credit limit"
          variant="secondary"
          size="regular"
          icon="icon-arrow-up-right"
          alignIcon="left"
        />
      </div>
      <div className="divider" />
    </div>
  );
};

export default CreditInformartion;
