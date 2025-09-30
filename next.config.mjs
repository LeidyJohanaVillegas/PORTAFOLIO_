/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Exporta la app estatica
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // GitHub pages no soporta image optimizer
  },
  basePath: repoName ? `/${repoName}` : '', // Ajusta las rutas
  assetPrefix: repoName ? `/${repoName}/` : '',
}

export default nextConfig
