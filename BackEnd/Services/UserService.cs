using System.Collections;
using ApiStories.Models;

namespace ApiStories.Services
{
    public class UserService
    {
        private readonly CosmosService _serviceCosmos;

        public UserService(CosmosService serviceCosmos)
        {
            _serviceCosmos = serviceCosmos; 
        }


        public  async Task<User> CreateUser(User user)
        {
          user.Id = Guid.NewGuid().ToString();
        var result = await _serviceCosmos.CreateItemAsync(user);
            return result;
        }

        public async Task<User> LoginUser(User user)
        {
                var result = await _serviceCosmos.ReadItemAsync(user);
                return result;
        }
    
    }
}
