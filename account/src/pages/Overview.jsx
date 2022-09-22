import Header from "../components/header/Header";
import FinancialSummary from "../partials/overview/FinancialSummary";
import CompanyDetails from "../partials/overview/CompanyDetails";
import MarketingPreferences from "../partials/overview/MarketingPreferences";
import { useContext } from 'react';
import Context from '../data/Context';

const Overview = () => {
  const customerInfo = useContext(Context).customerInfo;

  return (
    <main className="overview box-shadow--primary-80">
      <Header
        title={`Hi ${customerInfo.customerName},`}
        preamble="welcome back, here is an overview of your account"
      />
      <div className="grid__inner grid__inner--stretch main-box">
        <FinancialSummary />
        <CompanyDetails />
        <MarketingPreferences />
      </div>
    </main>
  );
};

export default Overview;
