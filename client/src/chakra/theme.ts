// src/chakra/theme.ts (v3)
import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineGlobalStyles,
} from '@chakra-ui/react'

const globalCss = defineGlobalStyles({
  'html, body, #root': {
    height: '100%',
  },
  body: {
    bg: { base: 'gray.50', _dark: 'gray.900' },
  },
})

const config = defineConfig({
  globalCss,
  // 必要なら tokens / semanticTokens / recipes をここへ
  theme: { tokens: { colors: { brand: { 500: { value: '#7c3aed' } } } } },
})

// v3 では「themeオブジェクト」ではなく「system（スタイリングエンジン）」を作る
export const system = createSystem(defaultConfig, config)
