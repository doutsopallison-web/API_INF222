const db = require('../models/database');

// Créer un article (POST)
exports.createArticle = (req, res) => {
    const { titre, contenu, auteur, date, categorie, tags } = req.body;
    if (!titre || !auteur || !date) return res.status(400).json({ error: "Titre , auteur et date requis" });

    const sql = `INSERT INTO articles (titre, contenu, auteur, date, categorie, tags) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [titre, contenu, auteur, date, categorie, tags], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Article créé", id: this.lastID }); // Code 201 
    });
};

// Lire tous les articles (GET)
exports.getAllArticles = (req, res) => {
    db.all("SELECT * FROM articles", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ articles: rows }); // Code 200 par défaut
    });
};

// Lire un article unique (GET /:id)
exports.getArticleById = (req, res) => {
    db.get("SELECT * FROM articles WHERE id = ?", [req.params.id], (err, row) => {
        if (!row) return res.status(404).json({ error: "Article non trouvé" }); // Code 404 
        res.json(row);
    });
};

// Rechercher un article
exports.searchArticles = (req, res) => {
    const query = req.query.query;
    db.all("SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?", [`%${query}%`, `%${query}%`], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

// Modifier un article (PUT)
exports.updateArticle = (req, res) => {
    // AJOUT DE "auteur" ICI dans l'extraction :
    const { titre, contenu, auteur, date, categorie, tags } = req.body; 
    
    db.run(`UPDATE articles SET titre = ?, contenu = ?, auteur = ?, date = ?, categorie = ?, tags = ? WHERE id = ?`,
        [titre, contenu, auteur, date, categorie, tags, req.params.id], function(err) {
        
        if (err) return res.status(500).json({ error: err.message });

        if (this.changes === 0) return res.status(404).json({ error: "Article non trouvé" });
        
        res.json({ message: "Article mis à jour" });
    });
};
// Supprimer un article (DELETE)
exports.deleteArticle = (req, res) => {
    db.run("DELETE FROM articles WHERE id = ?", [req.params.id], function(err) {
        if (this.changes === 0) return res.status(404).json({ error: "Article non trouvé" });
        res.json({ message: "Article supprimé" });
    });
};
