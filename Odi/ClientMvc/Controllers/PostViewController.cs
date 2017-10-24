using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClientMvc.Controllers
{
    public class PostViewController : Controller
    {
        // GET: PostView
        public ActionResult Index()
        {
            return View();
        }
    }
}