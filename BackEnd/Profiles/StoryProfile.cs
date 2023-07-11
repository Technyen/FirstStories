using ApiStories.Models;
using AutoMapper;

namespace ApiStories.Profiles
{
    public class StoryProfile : Profile
    {
        public StoryProfile() 
        {
            CreateMap<CreateStoryModel, Story>();
        }
    }
}
