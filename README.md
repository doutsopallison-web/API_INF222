🚀 API Blog RESTful - Projet Backend (Node.js & SQLite)
Ce projet consiste en la réalisation d'une API de gestion d'articles de blog, développée dans le cadre du TP INF222-EC1. L'objectif est de mettre en pratique l'architecture MVC et la manipulation d'une base de données relationnelle.

🛠️ Spécifications Techniques
Environnement : Node.js (v24.x)

Framework : Express.js

Base de données : SQLite3

Format de données : JSON

Documentation : Swagger / OpenAPI 3.0

📂 Structure du Projet
Plaintext

blog_api/
├── controllers/
│   └── articleController.js  # Logique CRUD et requêtes SQL
├── models/
│   └── database.js           # Configuration SQLite et Schéma
├── routes/
│   └── articles.js           # Définition des Endpoints
├── server.js                 # Point d'entrée de l'application
├── package.json              # Dépendances du projet
└── README.md                 # Documentation technique
⚙️ Installation et Lancement
Installer les modules nécessaires :

Bash

npm install express sqlite3 swagger-ui-express swagger-jsdoc
Démarrer le serveur :

Bash

node server.js
Le serveur écoute sur http://localhost:3000

📖 Documentation Interactive (Swagger)
Une interface de test est disponible directement via le navigateur :
👉 URL : http://localhost:3000/api-docs

🧪 Tests des Fonctionnalités (Commandes CURL)
1. Créer un article (POST)
Note : Le champ date est obligatoire (NOT NULL).

Bash

curl -X POST http://localhost:3000/api/articles \
-H "Content-Type: application/json" \
-d '{"titre":"Mon Article", "contenu":"Contenu du test", "auteur":"Allison", "date":"2026-03-23"}'
2. Récupérer tous les articles (GET)
Bash

curl -X GET http://localhost:3000/api/articles
3. Rechercher un article (Recherche par mot-clé)
Bash

curl -X GET "http://localhost:3000/api/articles/search?query=Article"
4. Modifier un article (PUT)
Bash

curl -X PUT http://localhost:3000/api/articles/1 \
-H "Content-Type: application/json" \
-d '{"titre":"Titre Maj", "contenu":"Nouveau contenu", "auteur":"Allison", "date":"2026-03-23"}'
5. Supprimer un article (DELETE)
Bash

curl -X DELETE http://localhost:3000/api/articles/1
⚠️ Gestion des Erreurs
L'API gère les cas d'erreurs suivants :

400 Bad Request : Champs obligatoires manquants (Titre, Auteur ou Date).

404 Not Found : Tentative de lecture, modification ou suppression sur un ID inexistant.

500 Internal Server Error : Erreur liée à la base de données SQLite.

Auteur
Nom : DOUTSOP OWONA Allison Lagenie

Matricule : 24G2758
Matricule : 24G2758

Filière : Informatique Fondamentale (L2)
Filière : Informatique Fondamentale (L2)

Filière : Informatique Fondamentale (L2)

Souhaites-tu mainte
