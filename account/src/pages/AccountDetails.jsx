import Header from "../components/header/Header";
import Authentification from "../partials/account-details/Authentification";
import DeactivateAccount from "../partials/account-details/DeactivateAccount";
import CompanyDetails from "../partials/account-details/CompanyDetails";
import Contacts from "../partials/account-details/Contacts";
import CreditInformation from "../partials/account-details/CreditInformartion";
import PreferredStore from "../partials/account-details/PreferredStore";

const AccountDetails = () => {
  return (
    <main className="col col--lg--9 overview box-shadow--primary-80">
      <Header
        title="Account Details"
        preamble="Verify and update your account details"
      />
      <div className="grid__inner grid__inner--stretch main-box">
        <CompanyDetails />
        <Contacts />
        <div className="divider" />
        <Authentification />
        <div className="divider" />
        <CreditInformation />
        <PreferredStore />
        <div className="divider" />
        <DeactivateAccount />
      </div>
    </main>
  );
};

export default AccountDetails;
