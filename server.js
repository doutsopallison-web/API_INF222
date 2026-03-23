const express = require('express');
const app = express();
const articleRoutes = require('./routes/articles');

app.use(express.json());

// Liaison des routes 
app.use('/api/articles', articleRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
