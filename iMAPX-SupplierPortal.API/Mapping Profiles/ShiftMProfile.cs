using AutoMapper;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Mapping_Profiles
{
    public class ShiftMProfile : Profile
    {
        public ShiftMProfile() 
        {
            CreateMap<ShiftM, ShiftMDto>()
                .ForMember(dest => dest.Shift, opt => opt.MapFrom(src => src.Shift));
        }
    }
}
