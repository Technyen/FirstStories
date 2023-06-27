using System.ComponentModel.DataAnnotations;

namespace ApiStories.Models
{
    public class User
    {
        public string Category { get; set; }   
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
