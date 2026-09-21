# Somos Tónica ⚡

Sitio web oficial e institucional de **Somos Tónica** — Agencia de marketing, comunicación estratégica, branding y diseño de experiencias.

---

## 🛠️ Stack Tecnológico

- **Runtime & Package Manager:** [Bun](https://bun.sh) (exclusivo).
- **Framework:** [Next.js](https://nextjs.org) (App Router, Server Components por defecto).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org) (Modo estricto, sin `any`).
- **Estilos & Variantes:** [Tailwind CSS v4](https://tailwindcss.com) + [Class Variance Authority (CVA)](https://cva.style).
- **Iconografía:** [Lucide React](https://lucide.dev).
- **Arquitectura de Archivos:** **Single Responsibility File (SRF)** según las directivas canónicas de `/dev`.

---

## 🏛️ Convención Arquitectónica (SRF)

Cada componente se descompone estrictamente en:

```
[feature-name]/
├── [name].component.tsx    # Capa de presentación y JSX exclusivamente
├── [name].variants.ts      # Configuración CVA y tokens visuales
├── [name].types.ts         # Contratos, interfaces de props y modelos
├── use-[name].ts           # Estado y ciclo de vida (Client Hooks, si aplica)
├── [name].utils.ts         # Funciones puras desacopladas de React
└── index.ts                # Barrel export público
```

---

## 🚀 Comandos de Desarrollo

Toda la ejecución se realiza exclusivamente bajo **Bun**:

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo (http://localhost:3000)
bun run dev

# Chequeo estricto de tipos
bun run typecheck

# Compilación de producción
bun run build

# Iniciar servidor de producción
bun run start
```

