namespace ApiStories.Models
{
    public class Story
    {
        public string Type = nameof(Story);
        public string Id { get; set; }
        public string Title { get; set; }
        public string Classification { get; set; }
        public int AgeAppropiate { get; set; }
        public string Description { get; set; }
    }
}
