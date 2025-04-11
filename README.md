```markdown
# 🏨 YallaBook – Application de Réservation d’Hôtels

**YallaBook** est une application web Full-Stack développée avec **Angular** pour le frontend et **Node.js/Express** pour le backend.  
Elle permet aux utilisateurs de rechercher, réserver et consulter des hôtels, et fournit un tableau de bord aux administrateurs pour gérer hôtels, chambres, réservations et utilisateurs.

---

## 🚀 Fonctionnalités principales

- 👤 Authentification (utilisateur / administrateur)
- 🏨 Gestion des hôtels, chambres et équipements
- 📅 Système de réservation avec vérification de disponibilité
- 📊 Tableau de bord admin
- 🔍 Recherche dynamique d’hôtels
- 💻 Interface responsive avec Angular

---

## 🧰 Stack technique

| Côté | Technologie |
|------|-------------|
| 🔙 Backend | Node.js, Express, Sequelize, PostgreSQL |
| 🔛 Frontend | Angular, Angular Material / Bootstrap |
| Authentification | JWT (JSON Web Token) |
| Autres | RxJS, SCSS, REST API |

---

## ⚙️ Installation et Exécution

### 1. Cloner le projet

```bash
git clone https://github.com/ton-user/yallabook.git
cd yallabook
```

---

### 📦 Backend Setup (Node.js)

```bash
cd backend
npm install
```

Créer un fichier `.env` dans le dossier `backend/` :

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=yallabook
DB_USER=postgres
DB_PASSWORD=ton_mot_de_passe
JWT_SECRET=ton_secret
```

Initialiser la base de données avec Sequelize :

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Lancer le serveur backend :

```bash
npm start
```

🔗 API disponible sur : `http://localhost:3000/api`

---

### 💻 Frontend Setup (Angular)

```bash
cd ../frontend
npm install
```

Configurer l’URL de l’API dans `src/environments/environment.ts` :

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

Lancer le serveur Angular :

```bash
ng serve
```

🌐 Interface disponible sur : `http://localhost:4200`

---

## 🖼️ Logo et Barre de navigation

Dans ton composant navbar (`navbar.component.html`) :

```html
<a class="navbar-brand" routerLink="/">
  <img src="assets/img/logo.png" alt="YallaBook Logo" class="logo">
</a>
```

Et dans `styles.css` ou `navbar.component.css` :

```css
.logo {
  height: 50px;
  object-fit: contain;
}
```

📝 Les fichiers statiques (logo, images) sont stockés dans `frontend/src/assets/img`.

---

## 📂 Structure du projet

```
yallabook/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   └── angular.json
└── README.md
```

---

## 🔐 Endpoints API (exemples)

| Méthode | Route | Fonction |
|--------|-------|----------|
| POST | `/api/auth/register` | Inscription utilisateur |
| POST | `/api/auth/login` | Connexion utilisateur/admin |
| GET | `/api/hotels` | Liste des hôtels |
| POST | `/api/bookings` | Nouvelle réservation |
| GET | `/api/rooms/available` | Vérification disponibilité |

---

## 📸 Captures d’écran

> *(Ajoute ici des captures d’écran : interface client, tableau de bord admin, formulaire de réservation, etc.)*

---

## 🧑‍💻 À propos de l’auteur

👤 **Helmi**  
🎓 Étudiant ingénieur en informatique à l’ENISo  
💡 Passionné par le développement web, les systèmes embarqués et l’intelligence artificielle  
🔗 [Mon LinkedIn](https://www.linkedin.com/in/ton-profil)  
🌍 [Mon Portfolio](https://tonsite.com)

---

## 📄 Licence

Ce projet est sous licence **MIT** – vous pouvez l'utiliser, le modifier et le partager à des fins éducatives et non commerciales.

---


>>>>>>> 52bd23fae96795fc19e983dbbed51d6cc0d31b96
