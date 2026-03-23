const express = require('express');
const swaggerUi = require('swagger-ui-express');
const articleRoutes = require('./routes/articles');

const app = express();
app.use(express.json());

// 1. On définit la documentation directement ici
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Blog Allison",
    description: "Documentation complète de l'API de gestion d'articles pour le projet CleeRoute.",
    version: "1.0.0"
  },
  servers: [{ url: "http://localhost:3000" }],
  components: {
    schemas: {
      Article: {
        type: "object",
        required: ["titre", "contenu", "auteur"],
        properties: {
          id: { type: "integer" },
          titre: { type: "string", example: "Bien débuter en Backend" },
          contenu: { type: "string", example: "Contenu de l'article..." },
          auteur: { type: "string", example: "Charles" },
          date: { type: "string", format: "date", example: "2026-03-23" }
        }
      }
    }
  },
  paths: {
    "/api/articles": {
      get: { summary: "Récupérer tous les articles", responses: { "200": { description: "Succès" } } },
      post: {
        summary: "Créer un article",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/Article" } } }
        },
        responses: { "201": { description: "Article créé" } }
      }
    },
    "/api/articles/search": {
      get: {
        summary: "Rechercher des articles par mot-clé",
        parameters: [{ name: "query", in: "query", required: true, schema: { type: "string" } }],
        responses: { "200": { description: "Résultats de la recherche" } }
      }
    },
    "/api/articles/{id}": {
      parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
      get: { summary: "Récupérer un article par son ID", responses: { "200": { description: "Article trouvé" } } },
      put: { 
        summary: "Mettre à jour un article",
        requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/Article" } } } },
        responses: { "200": { description: "Article mis à jour" } } 
      },
      delete: { summary: "Supprimer un article", responses: { "200": { description: "Supprimé avec succès" } } }
    }
  }
};

// 2. On affiche la doc (IMPORTANT : on utilise swaggerUi.setup(swaggerDocument))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 3. Tes routes habituelles
app.use('/api/articles', articleRoutes);

const PORT = 3000;
// Cette ligne permet de voir la doc en format texte (JSON)
app.get('/swagger.json', (req, res) => { res.json(swaggerDocument); });
app.listen(PORT, () => {
  console.log(`✅ Serveur prêt !`);
  console.log(`👉 Teste ce lien : http://localhost:${PORT}/api-docs`);
});