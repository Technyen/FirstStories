﻿using ApiStories.Models;
using ApiStories.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using ApiStories.Enums;

namespace ApiStories.Controllers
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



        [HttpPost("create")]
        public async Task<User> Create(CreateUserModel createUserModel)
        {
            var user = _mapper.Map<User>(createUserModel);

            return await _serviceUsers.CreateUser(user);
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginUserModel loginUserModel)
        {
            var user = _mapper.Map<User>(loginUserModel);
            var result= await _serviceUsers.LoginUser(user);
            if (result == LoginResult.Success)
            {
                return Ok();
            }
            else if (result == LoginResult.NotFound)
            {
                return NotFound();
            }
            else
            {
                return Unauthorized();    
            }
        }


    }
}
