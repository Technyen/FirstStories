using ApiStories.Services;
using Microsoft.Azure.Cosmos;
using Microsoft.VisualBasic;
using System.Collections.Generic;

namespace ApiStories.Models
{
    public class CosmosData
    {
        public string ContainerName { set; get; }
        public string PartitionKeyPropName { set; get; } 
        
    }
}
