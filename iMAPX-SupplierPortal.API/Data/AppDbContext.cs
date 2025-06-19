using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Data;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ColorGrid> ColorGrids { get; set; }

    public virtual DbSet<ColorM> ColorMs { get; set; }

    public virtual DbSet<ColorMaster> ColorMasters { get; set; }

    public virtual DbSet<CompanyM> CompanyMs { get; set; }

    public virtual DbSet<CompanyShipToAddress> CompanyShipToAddresses { get; set; }

    public virtual DbSet<ComponentsM> ComponentsMs { get; set; }

    public virtual DbSet<CountryM> CountryMs { get; set; }

    public virtual DbSet<CurrencyTypeM> CurrencyTypeMs { get; set; }

    public virtual DbSet<ForwarderM> ForwarderMs { get; set; }

    public virtual DbSet<FreightTermM> FreightTermMs { get; set; }

    public virtual DbSet<POM> POMs { get; set; }

    public virtual DbSet<POStatusM> POStatusMs { get; set; }

    public virtual DbSet<POTD> POTDs { get; set; }

    public virtual DbSet<PaymentTermM> PaymentTermMs { get; set; }

    public virtual DbSet<SeasonsM> SeasonsMs { get; set; }

    public virtual DbSet<SectionM> SectionMs { get; set; }

    public virtual DbSet<ShiftM> ShiftMs { get; set; }

    public virtual DbSet<ShipTypeM> ShipTypeMs { get; set; }

    public virtual DbSet<Size> Sizes { get; set; }

    public virtual DbSet<SizeGrid> SizeGrids { get; set; }

    public virtual DbSet<StyleCategoryM> StyleCategoryMs { get; set; }

    public virtual DbSet<VendorM> VendorMs { get; set; }

    public virtual DbSet<iMAP_CutDet> iMAP_CutDets { get; set; }

    public virtual DbSet<iMAP_CutDetComponent> iMAP_CutDetComponents { get; set; }

    public virtual DbSet<iMAP_FGHeader> iMAP_FGHeaders { get; set; }

    public virtual DbSet<iMAP_FGPackDatum> iMAP_FGPackData { get; set; }

    public virtual DbSet<iMAP_POHeader> iMAP_POHeaders { get; set; }

    public virtual DbSet<iMAP_POSizeDet> iMAP_POSizeDets { get; set; }

    public virtual DbSet<iMAP_SGComponent> iMAP_SGComponents { get; set; }

    public virtual DbSet<iMAP_SGHeader> iMAP_SGHeaders { get; set; }

    public virtual DbSet<iMAP_SOHeader> iMAP_SOHeaders { get; set; }

    public virtual DbSet<iMAP_SOSizeDet> iMAP_SOSizeDets { get; set; }

    public virtual DbSet<iMAP_SRPDetail> iMAP_SRPDetails { get; set; }

    public virtual DbSet<iMAP_SRPID> iMAP_SRPIDs { get; set; }

    public virtual DbSet<iMAP_STOHeader> iMAP_STOHeaders { get; set; }

    public virtual DbSet<iMAP_STOSizeDet> iMAP_STOSizeDets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=10.40.47.30;Initial Catalog=iMAPX;User ID=sa;Password=Test@123;Encrypt=False;Trust Server Certificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ColorGrid>(entity =>
        {
            entity.HasKey(e => e.ColorGridCode);

            entity.ToTable("ColorGrid");

            entity.Property(e => e.ColorGridCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ColorGridDescription)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ColorGridName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ColorM>(entity =>
        {
            entity.HasKey(e => e.ColorCode);

            entity.ToTable("ColorM");

            entity.Property(e => e.ColorCode)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.ColorDescription)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ColorGridCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ColorName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.MasterColorCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ColorMaster>(entity =>
        {
            entity.HasKey(e => e.ColorCode);

            entity.ToTable("ColorMaster");

            entity.Property(e => e.ColorCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ColorDescription)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ColorName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<CompanyM>(entity =>
        {
            entity.HasKey(e => e.CompanyCode);

            entity.ToTable("CompanyM");

            entity.Property(e => e.CompanyCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Address)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CompanyDescription)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.CompanyName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ContactPerson)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CountryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PostalCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.State)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Tel1).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<CompanyShipToAddress>(entity =>
        {
            entity.HasKey(e => new { e.CompanyCode, e.AddressCode });

            entity.ToTable("CompanyShipToAddress");

            entity.Property(e => e.CompanyCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.AddressCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Address)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.AddressName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CountryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PostalCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.State)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Tel1).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ComponentsM>(entity =>
        {
            entity.HasKey(e => e.COMPO_ID);

            entity.ToTable("ComponentsM");

            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.ComponentDesc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ComponentName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreateDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.TrnUser)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<CountryM>(entity =>
        {
            entity.HasKey(e => e.CountryCode);

            entity.ToTable("CountryM");

            entity.Property(e => e.CountryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CountryName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DialingCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<CurrencyTypeM>(entity =>
        {
            entity.HasKey(e => e.CurrencyTypeCode);

            entity.ToTable("CurrencyTypeM");

            entity.Property(e => e.CurrencyTypeCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.CurrencyType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ForwarderM>(entity =>
        {
            entity.HasKey(e => e.ForwarderCode);

            entity.ToTable("ForwarderM");

            entity.Property(e => e.ForwarderCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.ForwarderName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<FreightTermM>(entity =>
        {
            entity.HasKey(e => e.FreightTermCode);

            entity.ToTable("FreightTermM");

            entity.Property(e => e.FreightTermCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.FreightTerm)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<POM>(entity =>
        {
            entity.HasKey(e => new { e.PONumber, e.Version });

            entity.ToTable("POM");

            entity.Property(e => e.PONumber)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Version).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.ApprovedBy)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.Comment)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.CompanyCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.CurrencyTypeCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ForwarderCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FreightTermCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GUID)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.IssueDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.LastHandOverDate).HasColumnType("datetime");
            entity.Property(e => e.POQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.POStatus)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("((1))");
            entity.Property(e => e.PaymentTermCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PreparedBy)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.RevieseDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ShipToAddressCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ShipTypeCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StartShipDate).HasColumnType("datetime");
            entity.Property(e => e.StyleCode)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UnitCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.VendorCode)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<POStatusM>(entity =>
        {
            entity.HasKey(e => e.StatusCode);

            entity.ToTable("POStatusM");

            entity.Property(e => e.StatusCode).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.StatusDescription)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<POTD>(entity =>
        {
            entity.HasKey(e => new { e.PONumber, e.Version, e.ColorCode, e.SizeGridCode, e.Size });

            entity.ToTable("POTD");

            entity.Property(e => e.PONumber).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Version).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ColorCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SizeGridCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Size)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Comment)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.POQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ShipDate).HasColumnType("datetime");
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UnitCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<PaymentTermM>(entity =>
        {
            entity.HasKey(e => e.PaymentTermCode);

            entity.ToTable("PaymentTermM");

            entity.Property(e => e.PaymentTermCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PaymentTerm)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<SeasonsM>(entity =>
        {
            entity.HasKey(e => e.SeasonCode);

            entity.ToTable("SeasonsM");

            entity.Property(e => e.SeasonCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SeasonImagePath)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.SeasonName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<SectionM>(entity =>
        {
            entity.HasKey(e => e.SectionID);

            entity.ToTable("SectionM");

            entity.Property(e => e.SectionID).ValueGeneratedNever();
            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FactoryId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ID).ValueGeneratedOnAdd();
            entity.Property(e => e.SectionHead)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SectionName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ShiftM>(entity =>
        {
            entity.ToTable("ShiftM");

            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Shift)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ShipTypeM>(entity =>
        {
            entity.HasKey(e => e.ShipTypeCode);

            entity.ToTable("ShipTypeM");

            entity.Property(e => e.ShipTypeCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ShipType)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<Size>(entity =>
        {
            entity.HasKey(e => new { e.SizeGridCode, e.Size1 });

            entity.ToTable("Size");

            entity.Property(e => e.SizeGridCode)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.Size1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Size");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SizeDescription)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.SizeGridCodeNavigation).WithMany(p => p.Sizes)
                .HasForeignKey(d => d.SizeGridCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Size_SizeGrid");
        });

        modelBuilder.Entity<SizeGrid>(entity =>
        {
            entity.HasKey(e => e.SizeGridCode);

            entity.ToTable("SizeGrid");

            entity.Property(e => e.SizeGridCode)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SizeGridName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<StyleCategoryM>(entity =>
        {
            entity.HasKey(e => e.StyleCategoryCode);

            entity.ToTable("StyleCategoryM");

            entity.Property(e => e.StyleCategoryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.StyleCategoryName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<VendorM>(entity =>
        {
            entity.HasKey(e => e.VendorCode);

            entity.ToTable("VendorM");

            entity.Property(e => e.VendorCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Address)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ContactPerson)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CountryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PostalCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Rating).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.State)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Tel1).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TrnUser).HasMaxLength(256);
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.VendorName)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<iMAP_CutDet>(entity =>
        {
            entity.HasKey(e => new { e.DocketNo, e.PrdOrder, e.SGStyle, e.SGSize }).HasName("PK_iMap_CutDet");

            entity.ToTable("iMAP_CutDet");

            entity.Property(e => e.DocketNo)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.PrdOrder)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.SGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SGSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.BundleRuel).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.CutDate).HasColumnType("datetime");
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(8, 0)");
            entity.Property(e => e.NoOfBundles).HasColumnType("numeric(5, 0)");
            entity.Property(e => e.NoOfPlys).HasColumnType("numeric(5, 0)");
            entity.Property(e => e.OddBundleQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.STO)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Shade).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_CutDetComponent>(entity =>
        {
            entity.HasKey(e => new { e.DocketNo, e.ComponentCode, e.Size }).HasName("PK_CutDetComponent");

            entity.ToTable("iMAP_CutDetComponent");

            entity.Property(e => e.DocketNo)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.ComponentCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Size)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_FGHeader>(entity =>
        {
            entity.HasKey(e => new { e.PlantID, e.Style, e.FGColor });

            entity.ToTable("iMAP_FGHeader", tb => tb.HasTrigger("trg_iMAP_FGHeader_AfterInsert"));

            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.Style)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.FGBulkSMV).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.FGGridID)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGSMV).HasColumnType("numeric(6, 3)");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(8, 0)");
            entity.Property(e => e.PGR)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SeasonCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StyleBackImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StyleCategoryCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StyleFrontImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StyleMainFabric)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.StyleSketchImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.FGColorNavigation).WithMany(p => p.iMAP_FGHeaders)
                .HasForeignKey(d => d.FGColor)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_iMAP_FGHeader_ColorM");

            entity.HasOne(d => d.FGGrid).WithMany(p => p.iMAP_FGHeaders)
                .HasForeignKey(d => d.FGGridID)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_iMAP_FGHeader_SizeGrid");

            entity.HasOne(d => d.SeasonCodeNavigation).WithMany(p => p.iMAP_FGHeaders)
                .HasForeignKey(d => d.SeasonCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_iMAP_FGHeader_SeasonsM");

            entity.HasOne(d => d.StyleCategoryCodeNavigation).WithMany(p => p.iMAP_FGHeaders)
                .HasForeignKey(d => d.StyleCategoryCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_iMAP_FGHeader_StyleCategoryM");
        });

        modelBuilder.Entity<iMAP_FGPackDatum>(entity =>
        {
            entity.HasKey(e => new { e.PlantID, e.FGStyle, e.FGSize });

            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.CartonSize)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(8, 0)");
            entity.Property(e => e.PackQty).HasColumnType("numeric(4, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_POHeader>(entity =>
        {
            entity.HasKey(e => new { e.PO, e.PlantID });

            entity.ToTable("iMAP_POHeader");

            entity.Property(e => e.PO)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(15, 2)");
            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.STO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_POSizeDet>(entity =>
        {
            entity.HasKey(e => new { e.PO, e.POSize });

            entity.ToTable("iMAP_POSizeDet");

            entity.Property(e => e.PO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.POSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SGComponent>(entity =>
        {
            entity.HasKey(e => new { e.SGStyle, e.SGComponent }).HasName("PK_iMap_SGComponent");

            entity.ToTable("iMAP_SGComponent");

            entity.Property(e => e.SGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SGComponent)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.ComponentSketchImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(8, 0)");
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SGHeader>(entity =>
        {
            entity.HasKey(e => new { e.PlantID, e.SGStyle, e.SGColor });

            entity.ToTable("iMAP_SGHeader");

            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.SGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.CustomerStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.Description)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.ID)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(8, 0)");
            entity.Property(e => e.NumberOfSG).HasColumnType("numeric(4, 0)");
            entity.Property(e => e.SGBackImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.SGFrontImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.SGGridID)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SGSMV).HasColumnType("numeric(6, 2)");
            entity.Property(e => e.SGSketchImg)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SOHeader>(entity =>
        {
            entity.HasKey(e => new { e.SO, e.PlantID });

            entity.ToTable("iMAP_SOHeader");

            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.CUSPO)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(15, 3)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SOSizeDet>(entity =>
        {
            entity.HasKey(e => new { e.SO, e.SOSize });

            entity.ToTable("iMAP_SOSizeDet");

            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.SOSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SRPDetail>(entity =>
        {
            entity.HasKey(e => e.SRPID).HasName("PK_iMap_SRPDetails");

            entity.Property(e => e.SRPID)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.CutDate).HasColumnType("datetime");
            entity.Property(e => e.DocketNo)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.INV)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.OrgQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PlantID)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.PrdOrder)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.SRPPrefix)
                .HasMaxLength(7)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.SRPStatus)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.SRPVersion)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.STO)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_SRPID>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("iMAP_SRPID");

            entity.Property(e => e.ID).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SRPID).HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<iMAP_STOHeader>(entity =>
        {
            entity.HasKey(e => new { e.STO, e.PlantID });

            entity.ToTable("iMAP_STOHeader");

            entity.Property(e => e.STO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.FGStyle)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(15, 3)");
            entity.Property(e => e.SGColor)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.SO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<iMAP_STOSizeDet>(entity =>
        {
            entity.HasKey(e => new { e.STO, e.STOSize });

            entity.ToTable("iMAP_STOSizeDet");

            entity.Property(e => e.STO)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.STOSize)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.PlantID)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(256)
                .HasDefaultValueSql("(suser_sname())");
            entity.Property(e => e.UpdatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
