using ApiStories.Entities;
using ApiStories.Enums;

namespace ApiStories.Services
{
    public class StoryService
    {
        private readonly CosmosService _serviceCosmos;

        public StoryService(CosmosService serviceCosmos)
        {
            _serviceCosmos = serviceCosmos;
        }

        public async Task<CreateResult> CreateStory(Story story)
        {
            var storyCreated = await _serviceCosmos.FindItemAsync<Story>(story.Title, nameof(Story.Title));
            if (storyCreated == null)
            {
                story.Id = Guid.NewGuid().ToString();
                await _serviceCosmos.CreateItemAsync(story);
                return CreateResult.Success;
            }
            else
            {
                return CreateResult.Duplicate;
            }
        }
    }
}
