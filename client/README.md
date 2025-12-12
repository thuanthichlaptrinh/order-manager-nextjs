# Order Manager - Client

Frontend application cho hệ thống quản lý đơn hàng, được xây dựng với Next.js 16, React 19 và Tailwind CSS v4.

## Tech Stack

-   **Framework:** [Next.js 16](https://nextjs.org) (App Router)
-   **UI:** React 19 + TypeScript
-   **Styling:** Tailwind CSS v4 + shadcn/ui
-   **Icons:** Lucide React
-   **Fonts:** Geist Sans & Geist Mono

## Cấu trúc dự án

```
client/
├── app/              # Next.js App Router
│   ├── globals.css   # Tailwind & theme config
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Homepage
├── components/       # React components
├── lib/             # Utilities (cn, utils)
├── public/          # Static assets
└── components.json  # shadcn/ui config
```

## Cài đặt

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run start    # Chạy production server
npm run lint     # Lint code
```

## shadcn/ui Components

Thêm components từ shadcn/ui:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# ... các components khác
```

## Tùy chỉnh Theme

Chỉnh sửa theme trong `app/globals.css`:

```css
@theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    /* Thêm custom colors, fonts... */
}
```

## API Integration

Backend API chạy ở `../server/` - xem [server/README.md](../server/Readme.md) để biết thêm chi tiết.
