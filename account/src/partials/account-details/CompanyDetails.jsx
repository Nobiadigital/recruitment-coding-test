import Button from "../../components/button/Button";
import { useContext } from "react";
import Context from "../../data/Context";

const CompanyDetails = () => {
  const customerInfo = useContext(Context).customerInfo;

  return (
    <div className="company-details-account col col--md--6 col--12">
      <div className="title">
        <h4>Company details</h4>
      </div>
      <div className="border border--after">
        <div className="company-details-account__col">
          <label className="label--small">Company name</label>
          <p>Bob the builder, Ida</p>
        </div>
        <div className="company-details-account__col">
          <label className="label--small">Contact name</label>
          <p>{customerInfo.customerName}</p>
        </div>
        <div>
          <label className="label--small">Address</label>
          <p>{customerInfo.address2}</p>
          <p>{customerInfo.address3}</p>
          <p>{customerInfo.postcode}</p>
        </div>
        <Button
          text="Request change"
          variant="secondary"
          size="regular"
          icon="icon-edit-2"
          alignIcon="left"
        />
      </div>
      <div className="divider" />
    </div>
  );
};

export default CompanyDetails;
