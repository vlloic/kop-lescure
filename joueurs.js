// Liste des joueurs à classer (KOP Lescure : nés en 1992, donc pas d'années 80). Ajoute / retire des lignes librement.
// ⚠️ Garde des "id" uniques et ne les change pas une fois que vous avez commencé
//    (les liens de partage s'appuient dessus).
// poste : "Gardien" | "Défenseur" | "Milieu" | "Attaquant"
const JOUEURS = [
  // Années 90
  { id: "zidane",     nom: "Zinédine Zidane",    poste: "Milieu",    epoque: "1992–1996" },
  { id: "dugarry",    nom: "Christophe Dugarry", poste: "Attaquant", epoque: "années 1990" },
  { id: "lizarazu",   nom: "Bixente Lizarazu",   poste: "Défenseur", epoque: "1988–1996" },
  { id: "witschge",   nom: "Richard Witschge",   poste: "Milieu",    epoque: "années 1990" },
  { id: "wiltord",    nom: "Sylvain Wiltord",    poste: "Attaquant", epoque: "1997–2000" },
  { id: "benarbia",   nom: "Ali Benarbia",       poste: "Milieu",    epoque: "1998–1999" },
  { id: "micoud",     nom: "Johan Micoud",       poste: "Milieu",    epoque: "1996–2000" },
  { id: "laslandes",  nom: "Lilian Laslandes",   poste: "Attaquant", epoque: "années 1990–2000" },
  { id: "rame",       nom: "Ulrich Ramé",        poste: "Gardien",   epoque: "années 1990–2000" },
  // Années 2000 — le titre 2009
  { id: "pauleta",    nom: "Pauleta",            poste: "Attaquant", epoque: "2000–2003" },
  { id: "chamakh",    nom: "Marouane Chamakh",   poste: "Attaquant", epoque: "2002–2010" },
  { id: "gourcuff",   nom: "Yoann Gourcuff",     poste: "Milieu",    epoque: "2008–2010" },
  { id: "cavenaghi",  nom: "Fernando Cavenaghi", poste: "Attaquant", epoque: "années 2000" },
  { id: "diarra",     nom: "Alou Diarra",        poste: "Milieu",    epoque: "2007–2011" },
  { id: "wendel",     nom: "Wendel",             poste: "Milieu",    epoque: "années 2000" },
  { id: "jussie",     nom: "Jussiê",             poste: "Attaquant", epoque: "années 2000–2010" },
  { id: "planus",     nom: "Marc Planus",        poste: "Défenseur", epoque: "années 2000–2010" },
  { id: "carrasso",   nom: "Cédric Carrasso",    poste: "Gardien",   epoque: "années 2000–2010" },
  { id: "plasil",     nom: "Jaroslav Plašil",    poste: "Milieu",    epoque: "années 2000–2010" },
  { id: "mavuba",     nom: "Rio Mavuba",         poste: "Milieu",    epoque: "années 2000" },
  { id: "chalme",     nom: "Mathieu Chalmé",     poste: "Défenseur", epoque: "années 2000–2010" },
  { id: "diawara",    nom: "Souleymane Diawara", poste: "Défenseur", epoque: "années 2000–2010" },
  { id: "bellion",    nom: "David Bellion",      poste: "Attaquant", epoque: "années 2000–2010" },
  // Années 2010–2020
  { id: "mariano",    nom: "Mariano",            poste: "Défenseur", epoque: "années 2010" },
  { id: "kamano",     nom: "François Kamano",    poste: "Attaquant", epoque: "années 2010" },
  { id: "otavio",     nom: "Otávio",             poste: "Milieu",    epoque: "années 2010–2020" },
  { id: "adli",       nom: "Yacine Adli",        poste: "Milieu",    epoque: "années 2020" },
  { id: "toulalan",   nom: "Jérémy Toulalan",    poste: "Milieu",    epoque: "années 2010" },
  { id: "obraniak",   nom: "Ludovic Obraniak",   poste: "Milieu",    epoque: "années 2010" },
  { id: "diabate",    nom: "Cheick Diabaté",     poste: "Attaquant", epoque: "années 2010" },
  { id: "malcom",     nom: "Malcom",             poste: "Attaquant", epoque: "2016–2018" },
  { id: "costil",     nom: "Benoît Costil",      poste: "Gardien",   epoque: "2017–2022" },
  { id: "koscielny",  nom: "Laurent Koscielny",  poste: "Défenseur", epoque: "2019–2022" },
  { id: "hwang",      nom: "Hwang Ui-jo", court: "Hwang",        poste: "Attaquant", epoque: "2019–2022" },
];
