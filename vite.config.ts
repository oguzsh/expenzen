import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import resolve from 'path';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import fullReload from 'vite-plugin-full-reload';
import RubyPlugin from 'vite-plugin-ruby';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  plugins: [
    environment({}),
    RubyPlugin(),
    fullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    react(),
    nodeResolve({
      modulePaths: ['frontend', 'node_modules'],
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    }),
  ],
  build: {
    reportCompressedSize: false,
    assetsInlineLimit: 0,
    minify: 'esbuild',
    sourcemap: 'hidden',
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: 'frontend/components',
      },
      {
        find: '@pages',
        replacement: 'frontend/pages',
      },
      {
        find: '@layouts',
        replacement: 'frontend/layouts',
      },
      {
        find: '@images',
        replacement: 'frontend/images',
      },
      {
        find: '@types',
        replacement: 'frontend/types',
      },
    ],
  },
  clearScreen: false,
});
