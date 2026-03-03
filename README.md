# Loue le look — Frontend + Backend

Ce dépôt contient :
- **`frontend/`** : le site statique (HTML/CSS/JS)
- **`backend/`** : un petit serveur **Node/Express** qui sert le frontend

## Lancer en local

Pré-requis : **Node.js** (LTS recommandé)

À la racine du projet :

```bash
npm install
npm run dev
```

Puis ouvre : **http://localhost:8080**

> Le serveur sert automatiquement `frontend/index.html`, qui redirige vers `Sae/Accueil/accueil.html`.

## Structure

- `frontend/`
  - `index.html` (redirection vers l’accueil)
  - `Sae/` (toutes les pages + assets)
- `backend/`
  - `server.js` (Express)
  - `package.json` (dépendances serveur)

## Scripts

À la racine :
- `npm run dev` : lance le serveur en mode dev (nodemon)
- `npm run start` : lance le serveur en mode “prod”
- `npm run format` : formate tout le repo
- `npm run lint` : vérifie le formatage

## Notes

- Le dossier `Saé/` a été renommé en `Sae/` pour éviter des soucis de compatibilité.
- Certains fichiers CSS ont été renommés pour supprimer les espaces :
  - `feuille de style.css` -> `style.css`
  - `a propos.css` -> `a-propos.css`
  - `contactez nous.css` -> `contactez-nous.css`
