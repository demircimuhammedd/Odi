using System;
using System.Collections.Generic;
using System.Globalization;
using System.Web.Mvc;

namespace ClientMvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetMedia()
        {
            var listMedia = new List<Media>
            {
                new Media
                {
                    BegeniSayisi = 35,
                    GonderenIsmi = "Muhittin Topalak",
                    GonderenResmi = "assets/img/a0.png",
                    GonderilenTarih = DateTime.Today.ToString(CultureInfo.InvariantCulture),
                    Icerik = "Karayip korsanlarının yeni filmi çıktı izlemenizi tavsiye ederiz",
                    Id = 1,
                    KategoriAdi = "Film",
                    ResimUrl = "assets/img/film_poster/poster_2.jpg",
                    YorumSayisi = 31,
                    KullaniciAdi = "BigMuhittin"
                }
            };

            return Json(listMedia, JsonRequestBehavior.AllowGet);
        }
    }

    public class Media
    {
        public int Id { get; set; }
        public string KategoriAdi { get; set; }
        public string ResimUrl { get; set; }
        public string GonderenIsmi { get; set; }
        public string GonderenResmi { get; set; }
        public string GonderilenTarih { get; set; }
        public string Icerik { get; set; }
        public int BegeniSayisi { get; set; }
        public int YorumSayisi { get; set; }
        public string KullaniciAdi { get; set; }

    }
}