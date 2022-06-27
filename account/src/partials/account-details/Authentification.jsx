import Button from "../../components/button/Button";
import { useContext } from "react";
import Context from "../../data/Context";

const Authentification = () => {
  const customerInfo = useContext(Context).customerInfo;

  return (
    <div className="authentification col--12">
      <div className="col title">
        <h4>Authentification</h4>
      </div>
      <div className="grid__inner grid__inner--collapsed">
      <div className="authentification__col col col--md--6 col--12">
        <label className="label--small">Email</label>
        <p>{customerInfo.email}</p>
      </div>
      <div className="col col--md--6 col--12">
        <label className="label--small">Password</label>
        <p>********</p>
      </div>
      </div>
      <div className="col col--12">
        <Button text="Change password" variant="secondary" size="regular" />
      </div>
    </div>
  );
};

export default Authentification;
