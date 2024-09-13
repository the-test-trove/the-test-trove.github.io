import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  base: `/`,
  build: {
    rollupOptions: {
      plugins: [
        {
          buildStart() {
            console.log(`Run's before build`);
          },
        },
      ],
    },
  },
});
