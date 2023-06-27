using System.Collections;
using ApiStories.Enums;
using ApiStories.Exceptions;
using ApiStories.Models;
using Microsoft.Identity.Client;

namespace ApiStories.Services
{
    public class UserService
    {
        private readonly CosmosService _serviceCosmos;

        public UserService(CosmosService serviceCosmos)
        {
            _serviceCosmos = serviceCosmos;
        }


        public async Task<User> CreateUser(User user)
        {
            user.Id = Guid.NewGuid().ToString();
            var result = await _serviceCosmos.CreateItemAsync(user);
            return result;
        }

        public async Task<LoginResult> LoginUser(User user)
        {
            try
            {
                var result = await _serviceCosmos.FindItemAsync(user);
                if (user.Password == result.Password)
                {
                    return LoginResult.Success;
                }
                else
                {
                    return LoginResult.InvalidPassword;

                }



            }
            catch (NotFoundException )
            {
                return LoginResult.NotFound;


            }




        }
    }
}
