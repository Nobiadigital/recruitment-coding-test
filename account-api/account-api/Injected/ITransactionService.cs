using MagnetTradeAccountApi.Models.Transactions;

namespace MagnetTradeAccountApi.Injected
{
    public interface ITransactionService
    {
        public TransactionSummary GetSummaryFake();
        public IEnumerable<TransactionMonth> GetByMonthFake();
    }
}
