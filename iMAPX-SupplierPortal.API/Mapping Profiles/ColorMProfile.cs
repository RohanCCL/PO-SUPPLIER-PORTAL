using AutoMapper;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Mapping_Profiles
{
    public class ColorMProfile : Profile
    {
        public ColorMProfile() 
        {
            CreateMap<ColorM, ColorMDto>()
                .ForMember(dest => dest.ColorCode, opt => opt.MapFrom(src => src.ColorCode));
        }
    }
}
