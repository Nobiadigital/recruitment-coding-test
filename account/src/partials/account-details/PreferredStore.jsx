import Button from "../../components/button/Button";

const PreferredStore = () => {
  return (
    <div className="preferred-store col col--md--6 col--12">
      <div className="title">
        <h4>Preferred store</h4>
      </div>
      <div className="col alert alert--assistive">
        <p className="p--small">
          The preferred store can be different from the holding branch.
        </p>
      </div>
      <div className="preferred-store__col">
        <h5>Greenwich</h5>
        <p>1 Fenton Parade, Woolwich Road, London, SE10 0FY</p>
      </div>
      <Button
        text="Change store"
        variant="secondary"
        size="regular"
        icon="icon-map-pin"
        alignIcon="left"
      />
      <a className="link__text">View store details</a>
    </div>
  );
};

export default PreferredStore;
