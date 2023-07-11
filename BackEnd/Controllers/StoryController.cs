using ApiStories.Models;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using ApiStories.Services;
using ApiStories.Controllers;
using ApiStories.Enums;

namespace ApiStories.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        private readonly ILogger<StoriesController> _logger;
        private readonly StoryService _serviceStories;
        private readonly IMapper _mapper;



        public StoriesController(ILogger<StoriesController> logger, StoryService serviceStory,IMapper mapper )
        {
            _logger = logger;
            _serviceStories = serviceStory;
            _mapper = mapper;
        }



        [HttpPost("Create")]
        public async Task<ActionResult> Create(CreateStoryModel createStoryModel)
        {
            var story =_mapper.Map<Story>(createStoryModel);

            var result = await _serviceStories.CreateStory(story);
            if (result == CreateResult.Success)
            {
                return Ok();
            }
            else
            {
                return Conflict();
            }
        }
    }
}
