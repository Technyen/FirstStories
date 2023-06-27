using Azure.Identity;
using Microsoft.Azure.Cosmos;
using ApiStories.Models;
using User = ApiStories.Models.User;
using System.Net;
using ApiStories.Exceptions;

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

        public async Task<User> FindItemAsync(User user)
        {
            try
            {
                ItemResponse<User> readResponse = await container.ReadItemAsync<User>(
                       id: "a192c2fc-b122-4418-b83c",
                       partitionKey: new PartitionKey("a192c2fc-b122-4418"));
                return readResponse;

            }
            catch (CosmosException e)
            {
                if (e.StatusCode == HttpStatusCode.NotFound)
                {
                    throw new NotFoundException("The user Not found CosmosException cod 404");
                }
                else
                {
                    throw e;
                }


                
            }






        }
         
           
    }
}