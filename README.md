# Loue le look

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


## Scripts

À la racine :
- `npm run dev` : lance le serveur en mode dev (nodemon)
- `npm run start` : lance le serveur en mode “prod”
- `npm run format` : formate tout le repo
- `npm run lint` : vérifie le formatage