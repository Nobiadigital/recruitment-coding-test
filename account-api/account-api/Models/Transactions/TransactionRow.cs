namespace MagnetTradeAccountApi.Models.Transactions
{
    public class TransactionRow
    {
        public DateTime Date { get; set; }

        public decimal Amount { get; set; }

        public string FormattedAmount { get; set; }

        public string CustomerReference { get; set; }

        public string DocumentReference { get; set; }

        public string ItemType { get; set; }

        public string ItemStatus { get; set; }
    }
}
