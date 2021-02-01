import vue from "@vitejs/plugin-vue"

/**
 * @type {import('vite').UserConfig}
 */
// eslint-disable-next-line import/no-anonymous-default-export,import/no-default-export
export default {
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["node-fetch", "twitch", "twitch-auth"]
  }
}
