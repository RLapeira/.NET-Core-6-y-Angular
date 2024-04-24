using Microsoft.EntityFrameworkCore;

namespace BE_CRUDMascotas.Models.Repository
{
    public class MascotaRepository: IMascotaRepository
    {
        public readonly AplicationDbContext _context;

        public MascotaRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Mascota>> GetListaMascotas()
        {
            return await _context.Mascotas.ToListAsync();
        }

        public async Task<Mascota> GetMascota(int id)
        {
            return await _context.Mascotas.FindAsync(id);
        }

        public async Task DeleteMascota(Mascota mascota)
        {
            _context.Mascotas.Remove(mascota);
            await _context.SaveChangesAsync();
        }

        public async Task<Mascota> AddMascota(Mascota mascota)
        {
            _context.Add(mascota);
            await _context.SaveChangesAsync();
            return mascota;
        }

        public async Task UpdateMascota(Mascota mascotaItem, Mascota mascota)
        {
            mascotaItem.Nombre = mascota.Nombre;
            mascotaItem.Raza = mascota.Raza;
            mascotaItem.Color = mascota.Color;
            mascotaItem.Edad = mascota.Edad;
            mascotaItem.Peso = mascota.Peso;

            await _context.SaveChangesAsync();
        }
    }
}
