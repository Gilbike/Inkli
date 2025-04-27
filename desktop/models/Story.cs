using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace desktop.models
{
    public class Story
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public string ShortContent
        {
            get
            {
                int length = Content.Length;
                string cleanedContent = CleanMarkdown(Content);
                if (length <= 150)
                {
                    return cleanedContent;
                }
                else
                {
                    return cleanedContent.Substring(0, 147) + "...";
                }
            }
        }
        public int Highlighted { get; set; }
        public Author Author { get; set; }
        public string FormattedAuthor
        {
            get
            {
                return "by " + Author.Name;
            }
        }
        public int LikeCount { get; set; }
        public Genre Genre { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public static string CleanMarkdown(string input)
        {
            if (string.IsNullOrEmpty(input))
                return string.Empty;

            string withoutMarkdown = Regex.Replace(input, @"[*_`#>\[\](){}!~\-]", "");

            withoutMarkdown = withoutMarkdown.Replace("\r", "").Replace("\n", " ");

            withoutMarkdown = Regex.Replace(withoutMarkdown, @"\s+", " ");

            return withoutMarkdown.Trim();
        }
    }
}
