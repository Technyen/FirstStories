using Azure.Identity;
using Microsoft.Azure.Cosmos;
using ApiCuentos.Models;
using User = ApiCuentos.Models.User;

namespace ApiCuentos.Services
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
         
           
    }
}