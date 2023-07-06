using ApiStories.Models;
using AutoMapper;

namespace ApiStories.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile() 
        {
            CreateMap<RegisterUserModel, User>();
            CreateMap<LoginUserModel, User>();
        }
    }
}
