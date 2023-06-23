using Azure.Identity;
using Microsoft.Azure.Cosmos;
using ApiStories.Models;
using User = ApiStories.Models.User;
using System.Net;

namespace ApiStories.Services
{
  
    public class CosmosService
    {
        private readonly Container container;
        private readonly CosmosClient _client;
        public CosmosService(CosmosClient client) 
        {
            _client = client;
            Database database = _client.GetDatabase("cosmosapistories");
            container = database.GetContainer("stories");
        }
       

        public async Task<User> CreateItemAsync(User user)
        {// Create new object and upsert (create or replace) to container
            
            
            var userCreated = await container.CreateItemAsync<User>(
               user 
            );

            return userCreated;
        }

        public async Task<User> ReadItemAsync(User user)
        {
                   
                    ItemResponse<User> readResponse = await container.ReadItemAsync<User>(
                        id: "a192c2fc-b122-4418-b83c-5170dab20ce1",
                        partitionKey: new PartitionKey("a192c2fc-b122-4418-b83c-5170dab20ce1"));
                       return readResponse;
                
               

        
            
        }
         
           
    }
}