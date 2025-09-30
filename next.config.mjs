const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig = {
  output: 'export', // 👉 genera la carpeta "out/" con HTML estático
  images: {
    unoptimized: true, // 👉 evita problemas con optimización de imágenes en GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true, // 👉 evita que la build falle si hay errores de eslint
  },
  typescript: {
    ignoreBuildErrors: true, // 👉 evita que la build falle si hay errores de TS
  },
  basePath: repoName ? `/${repoName}` : '', // 👉 ajusta rutas cuando tu proyecto está en un subpath (/repoName)
  assetPrefix: repoName ? `/${repoName}/` : '', // 👉 asegura que los assets se carguen desde el repo
};

export default nextConfig;
