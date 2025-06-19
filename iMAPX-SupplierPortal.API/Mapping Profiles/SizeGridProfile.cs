using AutoMapper;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Mapping_Profiles
{
    public class SizeGridProfile : Profile
    {
        public SizeGridProfile() 
        {
            CreateMap<SizeGrid, SizeGridDto>()
                .ForMember(dest => dest.SizeGridCode, opt => opt.MapFrom(src => src.SizeGridCode));
        }
    }
}
