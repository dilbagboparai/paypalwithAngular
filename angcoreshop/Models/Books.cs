using System;
using System.Collections.Generic;

namespace angcoreshop.Models
{
    public partial class Books
    {
        public int BId { get; set; }
        public string BName { get; set; }
        public int BPrice { get; set; }
        public string BDsc { get; set; }
        public string BPic { get; set; }
    }
}
