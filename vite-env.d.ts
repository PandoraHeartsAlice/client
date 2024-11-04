/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  // добавьте другие переменные окружения, если необходимо
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
