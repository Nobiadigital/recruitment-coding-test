import { useContext } from 'react';
import Context from '../../data/Context';

const Balance = () => {
  const transactionSummary = useContext(Context).transactionSummary;
  console.log(transactionSummary);

  return (
    <div className="credit-information col col--lg--4 col--12">
      <div className="balance__outer">
        <div className="balance__col">
          <em className="h3">{transactionSummary.todayBalance}</em>
          <span>Current balance</span>
        </div>
      </div>
      <div className="balance__outer">
        <div className="balance__col">
          <em className="h3">{transactionSummary.dueTotal}</em>
          <span>Due by {transactionSummary.dueDate}</span>
        </div>
      </div>
      <label className="label--small">Secure payment</label>
    </div>
  );
};

export default Balance;
