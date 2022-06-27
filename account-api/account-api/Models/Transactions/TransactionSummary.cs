namespace MagnetTradeAccountApi.Models.Transactions
{
    public class TransactionSummary
    {
        public decimal? CurrentMonth { get; set; }

        public decimal? DueTotal { get; set; }

        public string DueDate { get; set; }

        public decimal? OverDueTotal { get; set; }

        public int DaysOfOverDue { get; set; }

        public decimal? TodayBalance { get; set; }

        public decimal? AvailableCredit { get; set; }

        public string LastUpdated { get; set; }
    }
}