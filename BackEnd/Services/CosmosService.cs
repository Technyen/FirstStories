using ApiStories.Entities;
using Microsoft.Azure.Cosmos;
using User = ApiStories.Entities.User;

namespace ApiStories.Services
{
    public class CosmosService
    {
        private readonly CosmosClient _client;
        private readonly Database _database;
        private readonly Dictionary<string, string> _containerNames;

        public CosmosService(CosmosClient client)
        {
            _client = client;
            _database = _client.GetDatabase("cosmosapistories");
            _containerNames = new Dictionary<string, string>();
            _containerNames.Add(nameof(User), "users");
            _containerNames.Add(nameof(Story), "stories");
        }

        public async Task<T> CreateItemAsync<T>(T user)
        {
            var container = _database.GetContainer(_containerNames[typeof(T).Name]);
            return  await container.CreateItemAsync<T>(user);
        }

        public async Task<T> FindItemAsync<T>(string value, string property)
        {
            var container = _database.GetContainer(_containerNames[typeof(T).Name]);
            var queryString = $"SELECT * FROM {_containerNames[typeof(T).Name]} p WHERE p.{property} = '{value}'".ToLower();
            using var filteredFeed = container.GetItemQueryIterator<T>(queryDefinition: new QueryDefinition(query: queryString));
            var items = await filteredFeed.ReadNextAsync();
            return items.FirstOrDefault();
        }

    }
}