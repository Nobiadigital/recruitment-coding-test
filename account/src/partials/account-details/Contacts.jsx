import Button from "../../components/button/Button";
import Context from "../../data/Context";
import { useContext } from "react";

const Contacts = () => {
  const customerInfo = useContext(Context).customerInfo;

  return (
    <div className="contacts col col--md--6 col--12">
      <div className="title">
        <h4>Contacts</h4>
      </div>
      <div className="contacts__col">
        <label className="label--small">Phone</label>
        <p>{customerInfo.mobile}</p>
      </div>
      <div className="contacts__col">
        <label className="label--small">Alternative phone</label>
        <p>{customerInfo.telephone}</p>
      </div>
      <div className="">
        <label className="label--small">Contact allowed</label>
        <p>Yes</p>
      </div>
      <Button
        text="Update contact details"
        variant="secondary"
        size="regular"
        icon="icon-edit-2"
        alignIcon="left"
      />
    </div>
  );
};

export default Contacts;
