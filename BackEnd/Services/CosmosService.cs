using Azure.Identity;
using Microsoft.Azure.Cosmos;
using ApiStories.Models;
using User = ApiStories.Models.User;
using System.Net;
using ApiStories.Exceptions;
using System.Linq.Expressions;
using Microsoft.Azure.Cosmos.Linq;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Database = Microsoft.Azure.Cosmos.Database;
using System.Collections.Generic;

namespace ApiStories.Services
{
    public class CosmosService
    {
        private readonly CosmosClient _client;
        private readonly Database _database;
        private readonly Container _container;
        private readonly Dictionary<string, CosmosData> _cosmosData;

        public CosmosService(CosmosClient client)
        {
            _client = client;
            _database = _client.GetDatabase("cosmosapistories");
            _container = _database.GetContainer("users");
            _cosmosData = new Dictionary<string, CosmosData>();

            _cosmosData.Add(nameof(User), new CosmosData
            {
                ContainerName = "users",
                PartitionKeyPropName = "type",
            });
        }


        public async Task<T> CreateItemAsync<T>(T user)
        {
            return  await _container.CreateItemAsync<T>(user);
        }

        public async Task<T> FindItemAsync<T>(string value, string property)
        {
            var queryString = $"SELECT * FROM {_cosmosData[typeof(T).Name].ContainerName} p WHERE p.{property} = '{value}'".ToLower();
            using var filteredFeed = _container.GetItemQueryIterator<T>(queryDefinition: new QueryDefinition(query: queryString));
            var items = await filteredFeed.ReadNextAsync();
            return items.FirstOrDefault();
        }
    }
}