# Teknominerba — Prototipe LMS (GitHub Pages)

Situs statik prototipe platform pembelajaran K3 pertambangan (versi **v2 — Brand Navy & Merah**).
Di-host gratis via **GitHub Pages** dengan custom domain.

**Live:** https://teknominerba-backup.nggolek.cafe

## Struktur (clean URL)

```
index.html          → /              (beranda)
kelas/index.html    → /kelas/        (halaman dalam kelas / belajar)
profil/index.html   → /profil/       (profil & akun)
assets/             → /assets/       (logo, styles.css, theme.js, favicon)
CNAME               → custom domain
.nojekyll           → matikan proses Jekyll (situs statik murni)
```

> Semua path internal & aset bersifat **absolut** (`/`, `/kelas/`, `/profil/`, `/assets/...`).
> Ini berarti situs **harus disajikan dari root domain** (custom domain). Bila dibuka lewat
> URL bawaan `https://<username>.github.io/<repo>/`, tampilan akan rusak (aset 404) — itu
> normal; gunakan custom domain.

## Cara aktifkan GitHub Pages

1. Push repo ini ke GitHub (repo **publik** — Pages gratis butuh repo publik).
2. Repo → **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)` → Save
   - **Custom domain:** `teknominerba-backup.nggolek.cafe` (file `CNAME` sudah ada di repo)
   - Centang **Enforce HTTPS** (muncul setelah sertifikat selesai, biasanya beberapa menit).

## DNS (di penyedia domain nggolek.cafe)

Tambahkan satu record:

| Type  | Name                  | Value / Target        |
|-------|-----------------------|-----------------------|
| CNAME | `teknominerba-backup` | `<username>.github.io` |

Ganti `<username>` dengan username GitHub pemilik repo.

**Bila domain di Cloudflare:**
- SSL/TLS mode: **Full** (jangan Flexible — bisa redirect-loop).
- Saat GitHub menerbitkan sertifikat pertama kali, set record **DNS only** (grey-cloud) dulu
  beberapa menit, lalu boleh diaktifkan proxy bila diinginkan.

## Update konten

Edit file di repo, lalu:

```bash
git add -A && git commit -m "update konten" && git push
```

GitHub Pages otomatis menerbitkan ulang dalam ~1 menit.

---

Sumber prototipe: `prototype/v2/` (file ini adalah salinan siap-Pages; struktur folder &
path absolut menyesuaikan GitHub Pages, konten desain identik dengan v2).
