import Button from "../../components/button/Button";
import { useContext } from 'react';
import Context from '../../data/Context';
import ContextTest from '../../data/FinancialDataMockup';

const FinancialSummary = () => {
  const transactionSummary = useContext(Context).transactionSummary;

  const financialCol = [
    {
      amount: `${ContextTest[0].amount}`,
      title: 'Total balance',
      desc: 'Your available credit',
      text:  `${ContextTest[0].text}`,
      btnText: 'Request new credit limit',
      btnIcon: 'icon-arrow-up-right',
      btnLink: '#'
    },
    {
      amount: `${transactionSummary.currentMonth}`,
      title: 'Spent this month',
      desc: null,
      text: `Inc. queries on invoice (exc. this month payment [ADJ])`,
      btnText: 'View history',
      btnIcon: 'icon-clock',
      btnLink: '#',
    },
    {
      amount: `${transactionSummary.dueTotal}`,
      title: `Due by ${transactionSummary.dueDate}`,
      desc: null,
      text: 'Amount to be paid',
      btnText: 'Pay an amount',
      btnIcon: 'icon-credit-card',
      btnLink: '#',
    },
    {
      amount: `${transactionSummary}`,
      title: `Test summary fake endpoint`,
      desc: null,
      text: 'Test summary fake endpoint',
    }
  ];
  

  return (
    <div className="financial-summary">
      <div className="col col--12 financial-summary__title">
        <h4>Financial Summary</h4>
      </div>
      <div className="grid__inner grid__inner--collapsed">
      {financialCol.map((col, i) => {
        return (
          <div key={i} className="col financial-summary__outer">
            <div className="financial-summary__col">
              <div>
                <em className="h3">{col.amount}</em>
                <span>{col.title}</span>
                <hr />
                <p>
                  {col.desc && <b>{col.desc}</b>}
                  {col.text}
                </p>
              </div>
            </div>
            <Button
              href={col.btnLink}
              text={col.btnText}
              variant="secondary"
              size="small"
              icon={col.btnIcon}
              alignIcon="left"
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default FinancialSummary;
