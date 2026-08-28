using Microsoft.EntityFrameworkCore;

namespace appZero.Models
{
    public class dbContextTask
    {
        public class DbContextTask : DbContext
        {

            public DbContextTask()
            {
            }

            public DbContextTask(DbContextOptions<DbContextTask> options)
                : base(options)
            {
            }

        }
    }
}
