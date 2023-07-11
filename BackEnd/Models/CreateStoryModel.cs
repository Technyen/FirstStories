namespace ApiStories.Models
{
    public class CreateStoryModel
    {
        public string Title { get; set; }
        public string Classification { get; set; }
        public int AgeAppropiate { get; set; }
        public string Description { get; set; }
    }
}
