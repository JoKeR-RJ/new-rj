let lista = [
  { nome: "Luca", cognome: "Bianchi", peso: 75 },
  { nome: "Maria", cognome: "Rossi", peso: 62 },
  { nome: "Giovanni", cognome: "Verdi", peso: 85 },
  { nome: "Chiara", cognome: "Neri", peso: 58 },
  { nome: "Marco", cognome: "Conti", peso: 90 },
  { nome: "Elena", cognome: "Galli", peso: 68 },
  { nome: "Francesco", cognome: "Moretti", peso: 77 },
  { nome: "Sara", cognome: "Ricci", peso: 63 },
  { nome: "Davide", cognome: "Lombardi", peso: 82 },
  { nome: "Alessia", cognome: "Esposito", peso: 70 }
];
 
function use(lista) {  
  let a = { nome: "io sono a" }; 
  let b = null;    

  let listaFiltrataMappata = lista.filter(item => item.peso <= 80).map(item => ({ nome: item.nome }));
  console.log('io sono la nuova lista filtrata e mappata: ',listaFiltrataMappata);
 
  try {    
    listaFiltrataMappata.forEach(n => {      
      if (n.nome.length <= 4) {        
        b = n;      
      } else {      
        b = a.nome;
      }     
    });
  } catch (e) {    
    console.log("Errore:", e);
  }
  return b; 
}
 
console.log(use(lista));
 