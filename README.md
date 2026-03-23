# Rapport Partie 2 : API de Gestion d'un blog (Projet INF222)

Noms:  **DOUTSOP OWONA ALLISON LAGENIE**  
Matricule:  **24G2758**  
Filiere:  **INFORMATIQUE**  

## Présentation du Projet
Ce projet consiste en la conception et le développement d'une API backend destinée à la gestion d'un système de blog. Réalisé dans le cadre de l'unité d'enseignement **INF222-EC1**, ce service permet d'effectuer les opérations de création, lecture, mise à jour et suppression (CRUD) sur des ressources de type "Articles".

## Architecture Logicielle
Pour répondre aux exigences de maintenabilité et de clarté du code, l'application adopte une architecture modulaire inspirée du modèle **MVC (Modèle-Vue-Contrôleur)** :

* **server.js** : Point d'entrée principal de l'application. Il initialise le serveur Express et assure la liaison entre les différents modules et la documentation.
* **routes/articles.js** : Contient la définition des points de terminaison (endpoints) et la gestion des requêtes HTTP (méthodes POST, GET, PUT, DELETE).
* **controllers/articleController.js** : Regroupe la logique d'accès aux données. Il contient les fonctions d'exécution des requêtes SQL de manière centralisée.
* **models/database.js** : Gère l'encapsulation de la connexion au système de gestion de base de données **SQLite3**.
* **package.json** : Fichier de configuration utilisé pour gérer les dépendances et les scripts de lancement.

## Spécifications Techniques
* **Framework** : Node.js (Express)
* **Base de données** : SQLite3
* **Documentation** : Swagger UI (OpenAPI 3.0)
* **Gestion de versions** : Git (Dépôt GitHub)

## Guide d'Installation et d'Utilisation
### Prérequis
Disposer d'un environnement Node.js fonctionnel sur votre machine. 
### 1. Installation
L'installation des bibliothèques nécessaires s'effectue via la commande suivante :  
`npm install express sqlite3 swagger-ui-express swagger-jsdoc`
### 2. Execution
Le lancement du serveur s'effectue via :  
`node server.js`  
### 3. Validation des tests(POST)
creer un article post  
`curl -X POST http://localhost:3000/api/articles \
-H "Content-Type: application/json" \
-d '{
  "titre": "Nouvel Article",
  "contenu": "Le contenu de mon article obligatoire",
  "auteur": "Charles",
  "date": "2026-03-23",`   
  ### 4. Modifier un article(PUT)  
  Si tu modifies un article, assure-toi de renvoyer la date également pour respecter la contrainte de la table.  
  `curl -X PUT http://localhost:3000/api/articles/1 \
-H "Content-Type: application/json" \
-d '{
  "titre": "Titre Modifié",
  "contenu": "Contenu mis à jour",
  "auteur": "Charles",
  "date": "2026-03-23",
  "categorie": "Update",
  "tags": "js"
}'`  
### 5. Recherche(GET)
Rechercher un article
`curl -X GET "http://localhost:3000/api/articles/search?query=Test"`
### 6. Lire tous les articles(GET)  
`curl -X GET http://localhost:3000/api/articles`
### 7. Supprimer un article(DELETE)  
`curl -X DELETE http://localhost:3000/api/articles/1`  












