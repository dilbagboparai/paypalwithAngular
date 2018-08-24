
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace angcoreshop.Models
{
    public partial class dbCodFirstContext : DbContext
    {
        public dbCodFirstContext()
        {
        }

        public dbCodFirstContext(DbContextOptions<dbCodFirstContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Books> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source = DESKTOP-OPO5CNI; Initial Catalog = DemoApplicatonDb; Integrated Security = True; MultipleActiveResultSets = True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Books>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId).HasColumnName("bId");

                entity.Property(e => e.BDsc).HasColumnName("bDsc");

                entity.Property(e => e.BName).HasColumnName("bName");

                entity.Property(e => e.BPic).HasColumnName("bPic");

                entity.Property(e => e.BPrice).HasColumnName("bPrice");
            });
        }
    }
}
