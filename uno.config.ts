import { defineConfig, presetIcons } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
