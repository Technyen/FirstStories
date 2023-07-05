using System.Collections;
using ApiStories.Enums;
using ApiStories.Exceptions;
using ApiStories.Models;
using Microsoft.Identity.Client;
using System.Reflection;
using System.ComponentModel.DataAnnotations;

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
            var userFound = await _serviceCosmos.FindItemAsync<User>(user.Email, nameof(User.Email), nameof(User));
            if (userFound ==null)
            {
                return LoginResult.NotFound;

            }
            else if (user.Password == userFound.Password)
            {
                return LoginResult.Success;
            }
            else
            {
                return LoginResult.InvalidPassword;
            }
        }
    }
}
