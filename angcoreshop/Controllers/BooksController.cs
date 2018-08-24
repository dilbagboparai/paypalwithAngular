using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angcoreshop.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace angcoreshop.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        public BooksController()
        {
            
        }
        dbCodFirstContext obj = new dbCodFirstContext();
        // GET: api/<controller>
        [HttpGet("[action]")]
        [Route("api/Books/Disp_Rec")]
        public IEnumerable<Books> Disp_Rec()
        {
           
            //return obj.Books.ToList();
            return books;
        }

        // GET api/<controller>/5
        [HttpGet]
        [Route("Detail_Rec/{id}")]
        public Books Detail_Rec(int id)
        {
            return books.FirstOrDefault();
            //return obj.Books.Find(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        IEnumerable<Books> books = new List<Books>
            {
                new Books
                {
                    BId=1,
                    BName="Test Book",
                    BPrice= 100,
                    BDsc="This is test descption of book",
                    BPic="/img/asp.jpg"

                }
            };
    }
}
