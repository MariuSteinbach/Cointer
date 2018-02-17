using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cointer.Models
{
    public class Coin
    {
        public string CoinID { get; set; }
        public string OwnerID { get; set; }
        public string ValueID { get; set; }
        public DateTime Added { get; set; }
    }
}
