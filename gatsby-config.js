/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `site-cadu-taller`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // --- A SEGUIR ESTÁ A CONFIGURAÇÃO PRINCIPAL ---
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cadu Taller", // Nome completo do seu site
        short_name: "Cadu", // Nome abreviado (para tela inicial em celular)
        start_url: "/", // URL inicial
        display: "minimal-ui", // Modo de exibição
        icon: "src/images/logo-cadu.png", // <-- **MUDE ESTE CAMINHO** para o caminho correto do seu arquivo
      },
    },
  ],
};
