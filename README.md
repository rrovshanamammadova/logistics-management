# 🚚 Logistika İdarəetmə Sistemi

Logistika şirkətləri üçün hazırlanmış **veb əsaslı admin paneli**. Sistem sifarişlərin, müştərilərin, işçilərin, anbarın, nəqliyyat vasitələrinin, sürücülərin və marşrutların vahid platformada idarə olunmasını, GPS ilə nəqliyyatın izlənməsini, hesabatların hazırlanmasını və bütün əməliyyatların audit jurnalında qeydə alınmasını təmin edir.

İnterfeys tam **Azərbaycan dilindədir**.

> ⚠️ Layihə hazırda **frontend prototipi** mərhələsindədir. Məlumatlar `localStorage` və `json-server` (saxta API) vasitəsilə saxlanılır.

---

## 📌 Mündəricat

- [Texnologiyalar](#-texnologiyalar)
- [Modullar](#-modullar)
- [İstifadəçi rolları](#-i̇stifadəçi-rolları)
- [Layihənin strukturu](#-layihənin-strukturu)
- [Quraşdırma və işə salma](#-quraşdırma-və-işə-salma)
- [Səhifələr və marşrutlar](#-səhifələr-və-marşrutlar)
- [Məlumatların saxlanması](#-məlumatların-saxlanması)
- [Gələcək planlar](#-gələcək-planlar)

---

## 🛠 Texnologiyalar

| Sahə | Texnologiya |
|---|---|
| UI kitabxanası | React 19 |
| Build aləti | Vite 8 |
| Stil | Tailwind CSS 4 |
| Routing | React Router 7 |
| Bildirişlər (toast) | react-toastify |
| HTTP sorğuları | axios |
| Saxta API | json-server (`db.json`) |
| Kod keyfiyyəti | ESLint |

---

## 📦 Modullar

### 🔐 Giriş və şifrə bərpası
- İstifadəçi adı / e-poçt və şifrə ilə giriş, rol seçimi
- "Məni xatırla" funksiyası
- Şifrəni unutdum → **SMS kod təsdiqi** (6 rəqəmli kod) → yeni şifrə təyini

### 🏠 Əsas səhifə (Dashboard)
- Bugünkü, gecikən, çatdırılmış sifarişlər və aktiv çatdırılmalar üzrə statistika kartları
- Anbar doluluğu diaqramı
- Son bildirişlər siyahısı

### 📋 Sifarişlər
- Statuslar üzrə statistika: Ümumi, Çatdırılıb, Yüklənib, Yoldadır, Anbarda, Hazırlanır, Ləğv edilmiş
- Sifariş siyahısı: tarix, nömrə, müştəri, şirkət, yük, çəki, say, ölçü, status, prioritet, yükləmə və çatdırılma ünvanı, plan tarixi
- Yeni sifariş yaratma və redaktə

### 👥 Müştərilər
- Şirkət, əlaqədar şəxs, telefon, e-poçt, ünvan, VÖEN
- Axtarış, filtr, səhifələmə, əlavə etmə, redaktə və silmə (təsdiq pəncərəsi ilə)

### 🧑‍💼 İşçilər
- İşçi məlumatlarının idarə edilməsi: əlavə etmə, redaktə, silmə

### 🏬 Anbar
- Məhsul siyahısı: barkod, ad, kateqoriya, çəki, ölçülər, alış və satış qiyməti, saxlanma yeri, miqdar, minimum stok
- **Yeni yük qəbulu**: yeni məhsulun anbara əlavə edilməsi
- **Mövcud məhsula yük qəbulu**: mövcud məhsulun miqdarının artırılması
- **Anbardan çıxış** əməliyyatı
- Barkod, məhsul adı və kateqoriya üzrə axtarış

### 🚛 Nəqliyyat
- Nəqliyyat vasitələrinin qeydiyyatı: nömrə nişanı, model, təhkim olunmuş sürücü, status
- Əlavə etmə, redaktə və silmə

### 🧑‍✈️ Sürücülər
- Ad, sürücülük vəsiqəsi nömrəsi, vəsiqənin bitmə tarixi, telefon
- Statuslar: **Yoldadır**, **Boşda**, **Qeyri-aktiv**

### 🗺 Marşrut planlaşdırılması
- Başlanğıc və son nöqtə, ara dayanacaqlar
- Nəqliyyat və sürücü təyini
- Marşruta sifarişlərin əlavə edilməsi (axtarışla)

### 📍 GPS izləmə
- Nəqliyyat vasitələrinin xəritə üzərində canlı göstərilməsi (hər **5 saniyədən** bir yenilənir)
- Hər vasitə üzrə məlumat: sürət, istiqamət, dayanma müddəti, koordinatlar, son yenilənmə vaxtı, sürücü və əlaqə nömrəsi
- Status, sürücü və nəqliyyat üzrə filtrlər

### 📊 Hesabatlar
| Hesabat | Məzmun |
|---|---|
| Sifariş hesabatı | Sifarişlərin ümumi icmalı |
| Gecikən sifarişlər | Vaxtında çatdırılmayan sifarişlər |
| Sürücü fəaliyyəti | Sürücülərin iş göstəriciləri |
| Marşrut fəaliyyəti | Marşrutlar üzrə statistika |
| Müştəri statistikası | Müştərilər üzrə sifariş göstəriciləri |
| Maliyyə hesabatı | Gəlir, yanacaq, texniki və servis xərcləri, maaş, bonus, xalis gəlir (gündəlik / aylıq) |
| Anbar hesabatı | Anbar əməliyyatlarının icmalı |

### 🛡 Audit jurnalı
- Sistemdə aparılan əməliyyatların qeydiyyatı
- Şəxs, rol, əməliyyat növü və tarix üzrə filtrlər

### 🔔 Bildirişlər
- Bildiriş növləri: çatdırıldı, yeni sifariş, gecikmə, sürücü təyini, sifariş yola düşdü
- Oxunmuş və oxunmamış bildirişlərin fərqləndirilməsi

---

## 👤 İstifadəçi rolları

Hər rol yalnız ona icazə verilən bölmələri görür. Menyu və marşrut səviyyəsində qorunma tətbiq olunur.

| Bölmə | Administrator | Logistika meneceri | Anbar işçisi | Sürücü | Müştəri |
|---|:---:|:---:|:---:|:---:|:---:|
| Əsas səhifə | ✅ | | | | |
| Sifarişlər | ✅ | ✅ | | | ✅ |
| Müştərilər | ✅ | | | | |
| İşçilər | ✅ | | | | |
| Anbar | ✅ | | ✅ | | |
| Nəqliyyat | ✅ | | | | |
| Marşrutlar | ✅ | ✅ | | ✅ | |
| GPS izləmə | ✅ | | | | |
| Sürücülər | ✅ | | | | |
| Hesabatlar | ✅ | | | | |
| Audit jurnalı | ✅ | | | | |
| Bildirişlər | ✅ | ✅ | ✅ | ✅ | ✅ |

İcazəsi olmayan səhifəyə daxil olmaq istəyən istifadəçi avtomatik olaraq öz roluna uyğun əsas səhifəyə yönləndirilir.

---

## 📁 Layihənin strukturu

```
logistics-management/
├── public/                  # Statik fayllar (favicon, ikonlar)
├── db.json                  # json-server üçün saxta məlumat bazası
├── src/
│   ├── App.jsx              # Bütün marşrutlar və rol icazələri
│   ├── main.jsx             # Tətbiqin giriş nöqtəsi
│   ├── assets/
│   │   ├── icons/           # İnterfeys ikonları
│   │   └── images/          # Şəkillər (login, xəritə)
│   ├── components/
│   │   ├── Sidebar.jsx          # Rola görə filtrlənən yan menyu
│   │   ├── Header.jsx           # Səhifə başlığı, tarix, bildiriş, istifadəçi
│   │   ├── ProtectedRoute.jsx   # Giriş və rol yoxlaması
│   │   ├── Pagination.jsx       # Səhifələmə
│   │   ├── StatCard.jsx         # Statistika kartı
│   │   ├── DeleteModal.jsx      # Silmə təsdiqi pəncərəsi
│   │   ├── LogoutModal.jsx      # Çıxış təsdiqi pəncərəsi
│   │   └── NotificationItem.jsx # Bildiriş elementi
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   ├── data/                # Başlanğıc demo məlumatlar
│   └── pages/
│       ├── auth/            # Login, ForgotPassword, SmsVerification, ResetPassword
│       └── admin/           # Bütün idarəetmə səhifələri
│           └── Reports/     # 7 hesabat səhifəsi
├── package.json
└── vite.config.js
```

---

## 🚀 Quraşdırma və işə salma

### Tələblər
- [Node.js](https://nodejs.org/) 20 və ya daha yeni versiya
- npm

### Addımlar

```bash
# 1. Repozitoriyanı klonlayın
git clone https://github.com/rrovshanamammadova/logistics-management.git
cd logistics-management

# 2. Asılılıqları quraşdırın
npm install

# 3. Tətbiqi işə salın
npm run dev
```

Tətbiq **http://localhost:5173** ünvanında açılacaq.

### GPS izləmə üçün saxta API

GPS səhifəsi məlumatları `json-server` vasitəsilə alır. Ayrı terminalda bu əmri işə salın:

```bash
npx json-server --watch db.json --port 5000
```

### Digər əmrlər

| Əmr | Təsvir |
|---|---|
| `npm run dev` | İnkişaf serverini işə salır |
| `npm run build` | İstehsal (production) üçün build yaradır |
| `npm run preview` | Build-i lokal olaraq yoxlayır |
| `npm run lint` | ESLint ilə kodu yoxlayır |

### Giriş

Demo rejimində istənilən istifadəçi adı və şifrə ilə daxil olmaq mümkündür. Rolu giriş səhifəsində seçin. Şifrə bərpası zamanı SMS kodu ekranda bildiriş şəklində göstərilir.

---

## 🧭 Səhifələr və marşrutlar

| Marşrut | Səhifə |
|---|---|
| `/` | Giriş |
| `/forgot-password` | Şifrəni unutdum |
| `/forgot-password/sms` | SMS təsdiqi |
| `/reset-password` | Yeni şifrə |
| `/admin` | Əsas səhifə |
| `/admin/orders` · `/new` · `/edit/:id` | Sifarişlər |
| `/admin/customers` · `/new` · `/edit/:id` | Müştərilər |
| `/admin/employees` · `/new` · `/edit/:id` | İşçilər |
| `/admin/warehouse` · `/new` · `/existing` · `/exit` · `/edit/:id` | Anbar |
| `/admin/vehicles` · `/new` · `/edit/:id` | Nəqliyyat |
| `/admin/drivers` · `/new` · `/edit/:id` | Sürücülər |
| `/admin/routes` · `/new` · `/edit/:id` | Marşrutlar |
| `/admin/tracking` | GPS izləmə |
| `/admin/reports` | Hesabatlar (+7 alt səhifə) |
| `/admin/audit` | Audit jurnalı |
| `/admin/notifications` | Bildirişlər |

---

## 💾 Məlumatların saxlanması

| Mənbə | İstifadə olunduğu yer |
|---|---|
| `localStorage` | İstifadəçi sessiyası, müştərilər, işçilər, sürücülər, nəqliyyat, anbar, sifarişlər, marşrutlar |
| `json-server` (`db.json`) | GPS izləmə (nəqliyyat vasitələri) |
| Statik məlumatlar | Dashboard, hesabatlar, audit jurnalı, bildirişlər |

---

## 🔮 Gələcək planlar

- [ ] Real backend (REST API) və məlumat bazası
- [ ] JWT ilə təhlükəsiz autentifikasiya, rolun serverdən təyin edilməsi
- [ ] Sifariş statuslarının avtomatik axını və audit jurnalına yazılması
- [ ] Real xəritə inteqrasiyası (Leaflet / Google Maps) və marşrut optimallaşdırması
- [ ] Sürücülər üçün mobil tətbiq və çatdırılmanın təsdiqi (foto + imza)
- [ ] Müştəri portalı və izləmə nömrəsi ilə sifariş izləmə
- [ ] Anbarda barkod / QR skanlama
- [ ] Minimum stok və sürücülük vəsiqəsinin bitmə tarixi üzrə avtomatik xəbərdarlıqlar
- [ ] Hesabatların PDF və Excel formatında ixracı
- [ ] Qrafiklər və analitika paneli
- [ ] Real vaxt bildirişləri (WebSocket)
- [ ] Çoxdillilik (AZ / EN / RU) və mobil uyğunluq
- [ ] Tünd rejim

---

## 📄 Lisenziya

Bu layihə təhsil və portfolio məqsədilə hazırlanmışdır.
