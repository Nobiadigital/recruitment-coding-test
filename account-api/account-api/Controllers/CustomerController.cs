using MagnetTradeAccountApi.Injected;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MagnetTradeAccountApi.Controllers
{
    //[Authorize]
    [Route("customer")]
    public class CustomerController : Controller
    {
        public CustomerController(IThisIsInjected thisIsInjected)
        {
            thisIsInjected.Hello(); // Don't remove this! Fix the Dependency Injection instead!
        }

        [HttpGet("information-fake")]
        public MagnetTradeCustomer GetFake()
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<MagnetTradeCustomer>("{\"documentId\":\"e97786fd-ad0a-4d77-9c51-dce9b6f4affa\",\"magnetTradeCustomerClientId\":\"magnettrade\",\"customerReference\":\"0004925354\",\"legacyNumber\":\"\",\"email\":\"adyen@test.com\",\"address1\":\"Oakdene House\",\"address2\":\"14 Wool Gate\",\"address3\":\"Cottingley\",\"address4\":\"\",\"address5\":\"Bingley\",\"contact\":\"\",\"customerName\":\"Adyen Test Card\",\"postcode\":\"BD16 1PE\",\"telephone\":\"+48505388738\",\"mobile\":\"+44505388738\",\"fax\":\"\",\"balance\":0,\"branch\":\"8012\",\"creditLimit\":0,\"creditCheckDate\":null,\"creditStatus\":\"\",\"stopFlag\":\"\",\"setupDate\":\"2014-12-12T00:00:00Z\",\"documentCreated\":\"2022-05-16T21:06:21.46Z\",\"documentModified\":\"2022-05-16T21:06:21.46Z\"}");
        }
    }
}