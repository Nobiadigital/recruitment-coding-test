import { useContext } from 'react';
import Context from '../../data/Context';

const CompanyDetails = () => {
  const customerInfo = useContext(Context).customerInfo;

  return (
    <div className="company-details">
      <div className="col col--12 company-details__title">
        <h4>Company details</h4>

        <a href="#" className="text-button">
          <span>Update details</span>
          <i className="icon icon-arrow-right"></i>
        </a>
      </div>
      <div className="grid__inner grid__inner--collapsed">
      <div className="col col--md--4 col--12">
        <div className="company-details__col">
          <label className="label--small">Company</label>
          <p>Bob the builder, lda</p>
          <p>
            {customerInfo.address2}
            <br />
            {customerInfo.address3}
            <br />
            {customerInfo.postcode}
          </p>
        </div>
      </div>

      <div className="col col--md--4 col--12">
        <div className="company-details__col">
          <label className="label--small">Contacts</label>
          <p>{customerInfo.customerName}</p>
          <p>{customerInfo.mobile}</p>
          <p>{customerInfo.email}</p>
        </div>
      </div>

      <div className="col col--md--4 col--12">
        <div className="company-details__col">
          <label className="label--small">Preffered store</label>
          <p>Greenwich</p>
          <p>1 Fenton Parade, Woolwich Road, London, SE10 0FY</p>
          <p className="p--micro">Same as your holding branch</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CompanyDetails;
