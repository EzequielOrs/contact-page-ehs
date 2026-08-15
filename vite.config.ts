import { defineConfig, loadEnv } from 'vite';

export default defineConfig( ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), ""); //Using env without "vite" prefix

    return {
        server: {
          port: 5173,
        },
        define: {
            "import.meta.env.WHATSAPP_NUMBER": JSON.stringify(
                env.WHATSAPP_NUMBER
            ),
        },
    };
});