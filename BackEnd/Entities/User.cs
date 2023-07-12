﻿using System.ComponentModel.DataAnnotations;

namespace ApiStories.Entities
{
    public class User
    {
        public string Type = nameof(User);
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}