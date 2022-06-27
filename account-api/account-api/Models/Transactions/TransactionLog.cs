namespace MagnetTradeAccountApi.Models.Transactions
{
    public class TransactionLog
    {
        public Guid DocumentId { get; set; }

        public string TransactionLogClientId { get; set; }

        public string TransactionId { get; set; }

        public string CustomerReference { get; set; }

        public decimal? Amount { get; set; }

        public DateTime? PostingDate { get; set; }

        public string ItemType { get; set; }

        public string DisputeFlag { get; set; }

        public string DocumentReference { get; set; }

        public string ItemStatus { get; set; }

        public DateTime? DocumentCreated { get; set; }

        public DateTime? DocumentModified { get; set; }
    }
}
