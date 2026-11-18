/* En-tête et pied de page communs : modifier ces deux constantes uniquement. */
const ENTETE = "<header><div class=\"wrap\"><a class=\"brand\" href=\"index.html\" style=\"display:inline-flex;align-items:center;gap:12px\"><img src=\"assets/logo-livre.jpg\" alt=\"\" width=\"72\" height=\"56\" style=\"display:block;width:72px;height:56px;object-fit:contain;flex-shrink:0\"><span style=\"color:inherit\">Littératie <span>en pratique</span></span></a><nav aria-label=\"Navigation principale\"><a href=\"index.html\">Accueil</a><a href=\"documents.html\">Documents ministériels</a><a href=\"ressources.html\">Ressources pédagogiques</a><a href=\"numerique.html\">Outils numériques</a><a href=\"formation.html\">Développement professionnel</a><a href=\"activites.html\">Activités d’urgence</a><a href=\"apropos.html\">À propos</a></nav></div></header>";
const PIED_DE_PAGE = "<footer><div class=\"wrap\"><p>© 2026 Asmaa - Littératie française</p></div></footer>";
document.getElementById('entete').innerHTML = ENTETE;
document.getElementById('pied-de-page').innerHTML = PIED_DE_PAGE;
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => { if (a.getAttribute('href') === page) a.setAttribute('aria-current','page'); });
const recherche = document.getElementById('recherche');
if (recherche) recherche.addEventListener('input', () => {
 const mot = recherche.value.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 let visibles = 0;
 document.querySelectorAll('[data-ressource]').forEach(c => {
 const texte = c.textContent.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 c.hidden = !texte.includes(mot); if (!c.hidden) visibles++;
 });
 document.getElementById('resultats').textContent = visibles + ' ressource(s) affichée(s)';
});
document.querySelectorAll('[data-imprimer]').forEach(b => b.addEventListener('click', () => window.print()));
