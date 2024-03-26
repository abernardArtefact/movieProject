# Movie Finder - Specs

## Brief

L'objectif est de créer une application web en se basant sur la maquette fournie.

Elle utilisera la moviedb API : [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

**L'application contient 3 types de pages :**

- Une page d'acceuil en 2 parties :
  - Un slider des 10 films les plus populaire du moment
  - Un graphique de statistiques par année filtré par genre et par année
- Une page de recherche accessible par le menu ainsi que par le lien "Voir tous les films" sous le top 10. La liste est ordonnée par ordre de sortie.
- Une page détails d'un film. On y retrouve quelques informations basiques ainsi que la capacité de noter le film.

**Minimum attendu :**

- Header
  - Logo
  - Lien de redirection + active
- Page d'accueil :
  - Liste des 10 films les plus populaires avec titre + année comme sur la maquette : slider librairy
    - étapes: fetch la data .then .then .catch=>error
  - Lien vers tous les films (page recherche)
- Page recherche :

  - Liste de tous les films (scroll) avec titre + année comme sur la maquette
  - System de recherche fonctionnel => etape: searchBar

**Aller plus loin :**

- Page d'accueil :
  - carroussel des 10 films les plus populaires (affichage 4 films)
  - Ajout du CA + couleur
- Page recherche
  - Ajout du CA + couleur
- Page détails
  - Sans les notes avec les étoiles

**Aller ENCORE plus loin :**

- Page d'accueil :
  - Chart => graphique
  - Ajout des filtres sur le chart
- Page détails :
  - Ajout des notes avec les étoiles

## Stack technique demandée

- React
- Recharts / Echarts librairy
- Redux / typeScript /tailwind /Vite (au lieu de WebPack)
- Less / css
- Node.js
- Git
- ⚠️ Ne pas utiliser bootstrap

## Liens utiles

- [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)
- [https://redux.js.org/basics/basic-tutorial](https://redux.js.org/basics/basic-tutorial)
- [https://codingthesmartway.com/learn-redux-introduction-to-state-management-with-react/](https://codingthesmartway.com/learn-redux-introduction-to-state-management-with-react/)
- [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
