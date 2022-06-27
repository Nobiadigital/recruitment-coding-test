namespace MagnetTradeAccountApi.Models.Transactions
{
    public class TransactionMonth
    {
        public TransactionMonth()
        {
            this.Transactions = Enumerable.Empty<TransactionRow>();
        }

        public string MonthName { get; set; }

        public string Year { get; set; }

        public string Sum { get; set; }

        public IEnumerable<TransactionRow> Transactions { get; set; }
    }
}
