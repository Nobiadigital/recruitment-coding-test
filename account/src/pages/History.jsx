import { useEffect, useState } from "react";
import { useContext } from 'react';
import Context from '../data/Context';
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import Table from "../components/table/Table";

const History = () => {
  const transactionByMonth = useContext(Context).transactionByMonth;
  console.log(transactionByMonth);
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    let existingYears = [];

    for(let i = 0; i < transactionByMonth.length; i++) {
      if(!existingYears.includes(transactionByMonth[i].year)){
        existingYears.push(transactionByMonth[i].year);
      }
    }

    setYears(existingYears);
    setSelectedYear("2018")
  },[transactionByMonth])
  

  useEffect(() => {
    let selectedData = [];

    for (let i = 0; i < transactionByMonth.length; i++) {
      if (transactionByMonth[i].year === selectedYear) {
        selectedData.push(transactionByMonth[i]);
      }
    }

    setData(selectedData);
  }, [transactionByMonth, selectedYear]);

  const handleClick = (e, year) => {
    e.preventDefault();
    setSelectedYear(year);
  };

  return (
    <main className="col col--12 col--lg--9 overview box-shadow--primary-80">
      <Header
        title="History"
        preamble="Check your payment history and invoice status"
      />
      <div className="history grid__inner grid__inner--stretch main-box">
        <div className="col col--12">
          <label className="label--small">Filtered by year</label>
        </div>
        <div className="col col--12 history__col">
          {years.map((year, index) => (
            <Button
              key={index}
              text={year}
              href={""}
              onClick={(e) => handleClick(e, year)}
              variant={selectedYear === year ? "primary" : "secondary"}
              size="regular"
            />
          ))}
        </div>
        {data.map((data, index) => (
          <Table
            key={index}
            index={index}
            data={data}
          />
        ))}
      </div>
    </main>
  );
};

export default History;
