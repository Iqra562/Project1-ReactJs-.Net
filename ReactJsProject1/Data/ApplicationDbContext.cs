using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using ReactJsProject1.Models;

namespace DotNetConnection.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        
        public DbSet<Category> Categories { get; set; }
       
    }
}