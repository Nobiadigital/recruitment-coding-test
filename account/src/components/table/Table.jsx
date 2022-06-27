import { useState, useEffect } from "react";

const Table = ({ data, index }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (index > 1) {
      setActive(false);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div id={index} className="table col col--12">
      <div className="table__header col col--12">
        <div>
          <h5>
            {data.monthName} {data.year}
          </h5>
          <p className="p--small">
            Total spend: {data.sum} (excluding payments)
          </p>
        </div>
        <a href="#" onClick={(e) => handleClick(e)}>
          <i
            className={
              active ? "icon icon-chevron-up" : "icon icon-chevron-down"
            }
          ></i>
        </a>
      </div>
      <div className={active ? "table__content is-active" : "table__content"}>
        <table>
          <thead>
            <tr>
              <th className="label label--small">Date</th>
              <th className="label label--small">Amount</th>
              <th className="label label--small">Reference</th>
              <th className="label label--small">Type</th>
              <th className="label label--small">Invoice status</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction, index) => (
              <tr key={index}>
                <td data-label="Date">{transaction.date}</td>
                <td data-label="Amount">{transaction.formattedAmount}</td>
                <td data-label="Reference">{transaction.customerReference}</td>
                <td data-label="Type">{transaction.itemType}</td>
                <td data-label="Invoice status">{transaction.itemStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
