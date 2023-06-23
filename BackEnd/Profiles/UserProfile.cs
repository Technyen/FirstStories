using ApiStories.Models;
using AutoMapper;

namespace ApiStories.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile() 
        {
            CreateMap<CreateUserModel, User>();
            CreateMap<LoginUserModel, User>();
        }
    }
}
