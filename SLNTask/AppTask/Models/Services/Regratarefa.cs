using AppTask.Models.Interfaces;

namespace AppTask.Models.Services
{
    public class Regratarefa : IRegraTarefa

    {
        public bool validarDataFinal(DateTime? dataInicial, DateTime? dataFinal)
        {
            return dataFinal>=dataInicial;
        }
    }
}
