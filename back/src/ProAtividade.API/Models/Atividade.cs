using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class Atividade
    { 
        public int Id {get; set;}
        public string Titutlo { get; set; }
        public string Descricao { get; set; }
        public Prioridade Prioridade { get; set; }

        //construtores
        public Atividade()
        {
            
        }
        public Atividade(int id)
        {
            Id = id;
        } 
    } 
}