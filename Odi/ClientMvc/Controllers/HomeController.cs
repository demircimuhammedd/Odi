using System.Web.Mvc;

namespace ClientMvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        } 
    }
}