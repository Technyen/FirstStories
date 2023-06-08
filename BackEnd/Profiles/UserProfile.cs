using ApiCuentos.Models;
using AutoMapper;

namespace ApiCuentos.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile() 
        {
            CreateMap<CreateUserModel, User>();
        }
    }
}
