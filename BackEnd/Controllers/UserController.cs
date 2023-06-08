using ApiCuentos.Models;
using ApiCuentos.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace ApiCuentos.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly UserService _serviceUsers;
        private readonly IMapper _mapper;


        public UsersController( ILogger<UsersController> logger, UserService serviceUser, IMapper mapper)
        {
            _logger = logger;
            _serviceUsers = serviceUser;
            _mapper = mapper;
            
        }



        [HttpPost]
        public async Task<User> Create(CreateUserModel createUserModel)
        {
            var user = _mapper.Map<User>(createUserModel);

            return await _serviceUsers.CreateUser(user);
        }

        
    }
}
