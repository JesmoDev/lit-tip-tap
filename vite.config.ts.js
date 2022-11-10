// vite.config.ts
import { defineConfig } from "vite";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/my-element.ts",
      formats: ["es"]
    },
    rollupOptions: {
      external: /^lit/
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICdzcmMvbXktZWxlbWVudC50cycsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiAvXmxpdC9cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUM7QUFBQTtBQUFBLElBRVosZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
