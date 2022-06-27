const MarketingPreferences = () => {
  return (
    <div className="marketing-preferences">
      <div className="col col--12 marketing-preferences__title">
        <h4>Marketing preferences</h4>
      </div>
      <div className="grid__inner grid__inner--collapsed">
      <div className="col col--md--6 col--12">
        <div className="marketing-preferences__col form">
          <div className="form__checkbox form__checkbox--large">
            <input type="checkbox" name="newsletter" id="newsletter" />
            <label htmlFor="newsletter">Receive Magnet Trade newsletter</label>
          </div>

          <p className="p--small">
            Receive the latest news about Magnet Trade and related
            communications or service updates.
          </p>
          <p className="p--small">
            By subscribing you agree with <a href="#">terms and conditions</a>{" "}
            of the service.
          </p>
        </div>
      </div>

      <div className="col col--md--6 col--12">
        <div className="marketing-preferences__col form">
          <div className="form__checkbox form__checkbox--large">
            <input type="checkbox" name="promotional" id="promotional" />
            <label htmlFor="promotional">Receive promotional emails</label>
          </div>
          <p className="p--small">
            Get the latest promotions in your inbox, be the first to know and
            make sure you don't miss out.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarketingPreferences;
