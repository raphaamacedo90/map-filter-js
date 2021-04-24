function calcMedia()
{
  return(this.notas[0]+this.notas[1])/2
};

function situacao(aluno)
{
   if(aluno.media() >= 7)
   {
      return`Aluno ${aluno.nome} foi Aprovado com média ${aluno.media()}!`
   }
   else
   {
      return`Aluno ${aluno.nome} foi Reprovado com média ${aluno.media()}!`
   }
};

var alunos = [
{
   nome:"Raphael Macedo",
   notas:[9.5,8.5],
   media:calcMedia,
   historico:situacao
},
{
   nome: "Karine de Paula",
   notas: [7.5,5.5],
   media:calcMedia,
   historico:situacao
},    
{
   nome: "Sophia de Araujo",
   notas: [6.5,7.5],
   media:calcMedia,
   historico:situacao
}];

alunos.map((aluno) => console.log(situacao(aluno)));