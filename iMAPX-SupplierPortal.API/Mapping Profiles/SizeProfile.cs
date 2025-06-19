using AutoMapper;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Mapping_Profiles
{
    public class SizeProfile : Profile
    {
        public SizeProfile()
        {
            CreateMap<Size, SizeDto>()
                .ForMember(dest => dest.Size, opt => opt.MapFrom(src => src.Size1));
        }
    }
}
