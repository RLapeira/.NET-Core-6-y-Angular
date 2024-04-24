namespace BE_CRUDMascotas.Models.Repository
{
    public interface IMascotaRepository
    {
        Task<List<Mascota>> GetListaMascotas();
        Task<Mascota> GetMascota(int id);
        Task DeleteMascota(Mascota mascota);
        Task<Mascota> AddMascota(Mascota mascota);
        Task UpdateMascota(Mascota mascotaItem, Mascota mascota);
    }
}
