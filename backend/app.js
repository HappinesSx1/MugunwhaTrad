const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

// Données factices
const webtoonsData = [
  {
    id: 0,
    title: "OpenTalk",
    lastupdatetime: "février 11, 2024",
    thumbnail: "/images/mediumimg.jpg",
    chapitres: [
      ["/images/mediumimg.jpg", "/images/mediumimg.jpg"],
      ["/image_url_1_2.jpg"],
      ["/image_url_1_3.jpg"],
    ],
  },
];

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Webtoons",
      description: "API pour récupérer des données de webtoons",
      version: "1.0.0",
      contact: {
        name: "Votre Nom",
        email: "votre@email.com",
      },
    },
  },
  //   Définition des fichiers contenant les routes de l'API
  apis: ["app.js"],
};

// Initialiser Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware pour servir la documentation Swagger UI
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 * /api/webtoons:
 *   get:
 *     summary: Récupérer la liste des webtoons
 *     description: Récupère la liste complète des webtoons.
 *     responses:
 *       200:
 *         description: Succès de la récupération des données.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 webtoons:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID du webtoon
 *                       title:
 *                         type: string
 *                         description: Titre du webtoon
 *                       lastupdatetime:
 *                         type: string
 *                         description: Date de dernière mise à jour
 *                       thumbnail:
 *                         type: string
 *                         description: URL de la miniature du webtoon
 *                       chapitres:
 *                         type: array
 *                         items:
 *                           type: array
 *                           items:
 *                             type: string
 *                             description: URL de l'image du chapitre
 */
app.get("/api/webtoons", (req, res) => {
  res.json({ webtoons: webtoonsData });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
