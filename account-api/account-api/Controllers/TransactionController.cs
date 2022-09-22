using MagnetTradeAccountApi.Injected;
using MagnetTradeAccountApi.Models.Transactions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MagnetTradeAccountApi.Controllers
{
    [Route("transaction")]
    public class TransactionController : Controller
    {
        ITransactionService _transactionService;
        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }
        [HttpGet("summary-fake")]
        public TransactionSummary SummaryFake()
        {
            return _transactionService.GetSummaryFake();
        }

        [HttpGet("by-month-fake")]
        public IEnumerable<TransactionMonth> ByMonthFake()
        {
            return _transactionService.GetByMonthFake();
        }
    }
}