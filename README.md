# Moldes Avulsos Profissionais — Thaíza Gonçalves (Iza)

Landing page / catálogo de moldes avulsos de costura. Site estático (HTML + CSS + JS puro), pronto para GitHub + Vercel, **sem build**.

## Estrutura

```
moldes-avulsos-site/
├── index.html              # Página única (estrutura + copy)
├── favicon.ico
├── vercel.json             # Config de deploy + cache
├── assets/
│   ├── css/styles.css      # Design system completo
│   ├── js/products.js      # ★ Catálogo (fonte única de verdade — 58 modelos)
│   ├── js/main.js          # Render, filtros, animações, Meta Pixel
│   └── img/                # iza-photo.jpg · tabela-medidas.jpg
└── produtos/               # 58 imagens dos moldes
```

## Como editar o catálogo

Toda a lista de moldes vive em **`assets/js/products.js`**. Para mudar preço, link de checkout, imagem, categoria ou disponibilidade, edite apenas esse arquivo:

```js
{
  "name": "Vestido Drapeado",
  "cat": "vestidos",                 // blusas | vestidos | saias | calcas | blazers
  "price": "39,90",
  "img": "produtos/vestido-drapeado.jpg",
  "link": "https://pay.hotmart.com/...",
  "active": true                     // false => selo "EM BREVE" + botão desabilitado
}
```

## Meta Pixel (funil)

Em `assets/js/main.js`, preencha `PIXEL_ID` com o ID do seu Pixel.
Já dispara automaticamente:
- `PageView` no carregamento
- `InitiateCheckout` no clique de "Comprar molde" (com nome, categoria e valor)

> O CAPI (server-side) deve ser tratado no servidor — esta página cobre apenas o lado do navegador.

## Deploy na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: `./`
4. Deploy. Pronto.

Ou via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```

## Conteúdo (58 modelos)

| Categoria | Modelos | Faixa de preço |
|---|---|---|
| Blusas e Tops | 16 | R$ 29,90 |
| Vestidos | 17 | R$ 39,90 |
| Saias | 8 | R$ 29,90 |
| Calças, Shorts e Macacões | 13 | R$ 29,90 – 39,90 |
| Blazers e Sobreposições | 4 | R$ 39,90 |

---
© Thaíza Gonçalves (Iza). Todos os direitos reservados.
