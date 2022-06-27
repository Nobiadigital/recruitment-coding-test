import Button from "../../components/button/Button";

const DeactivateAccount = () => {
  return (
    <div className="deactivate-account">
      <div className="col col--12 title">
        <h4>Deactivate online account</h4>
      </div>
      <div className="col col--12">
        <div className="col alert alert--failure">
          <p className="p--small">
            This action will deactivate your online account and{" "}
            <em>you will no longer be able to login.</em> Your account with
            Magnet Trade will remain open and continue to be used in store.
          </p>
        </div>
      </div>
      <div className="col col--12">
        <Button text="Deactivate account" variant="secondary" size="regular" />
      </div>
    </div>
  );
};

export default DeactivateAccount;
