##README
# Etoile Lojistik - Kurumsal Web Sitesi

Bu proje, Etoile Lojistik firması için geliştirilmiş, duyarlı (responsive) ve çok dilli (Türkçe/İngilizce) bir kurumsal web sitesidir. Site, şirketin hizmetlerini, hakkımızda bilgilerini ve iletişim detaylarını modern bir arayüzle sunar.

-----

## 🇹🇷 Türkçe

### 📝 Proje Açıklaması

Bu proje, `HTML5`, `CSS3` (harici `style.css` dosyasında) ve `JavaScript` kullanılarak oluşturulmuş statik bir "landing page" (tanıtım sayfası) projesidir.

### ✨ Temel Özellikler

  * **Çok Dilli Destek (TR/EN):** JavaScript kullanılarak yönetilen, tek tıklamayla Türkçe ve İngilizce içerik arasında geçiş yapabilen bir arayüz.
  * **Dinamik Hero Slider:** Otomatik olarak değişen (her 5 saniyede bir) ve manuel olarak kontrol edilebilen 3 farklı slayt.
  * **Hizmet Tanıtımı:** Şirketin sunduğu geniş hizmet yelpazesini (Lojistik, Otomotiv, Madencilik, İnşaat vb.) ikonlar ve açıklamalarla gösteren bir bölüm.
  * **Hakkımızda Bölümü:** Şirketin 15+ yıllık tecrübesini ve istatistiklerini (Mutlu Müşteri, Şehir sayısı) vurgulayan bir alan.
  * **Gelişmiş İletişim:**
      * Doğrudan **WhatsApp**'a yönlendiren buton.
      * **E-posta** istemcisini açan buton.
      * Mobil cihazlarda doğrudan **arama** başlatan buton.
  * **Duyarlı Tasarım (Responsive):** (Varsayılan `style.css` dosyasına bağlı olarak) `meta viewport` etiketi ile mobil ve tablet cihazlarla uyumluluk hedeflenmiştir.
  * **Google Analytics:** `gtag.js` ile site trafiğini izleme entegrasyonu.

### 🛠️ Kullanılan Teknolojiler

  * **HTML5:** Sayfanın iskeleti ve içeriği.
  * **CSS3:** (`style.css` - Bu dosyada sağlanmadı) Sayfanın stil ve tasarımı.
  * **Vanilla JavaScript:**
      * Dil değiştirme fonksiyonu (`switchLanguage`).
      * Slayt gösterisi (`showSlide`, `nextSlide`).
      * Scroll (kaydırma) efekti (`header.scrolled`).
      * Yumuşak sayfa içi geçiş (`scrollIntoView`).
  * **Font Awesome:** İkonlar için (örn: `fas fa-truck`, `fab fa-whatsapp`).

### 🚀 Nasıl Çalıştırılır?

Bu bir sunucu veya derleme gerektirmeyen statik bir web sitesidir.

1.  Bu repoyu bilgisayarınıza klonlayın:
    ```bash
    git clone [REPO_URL]
    ```
2.  Proje klasörüne gidin.
3.  `index.html` dosyasına çift tıklayarak herhangi bir modern web tarayıcısında açın.

-----

## EN  English

### 📝 Project Description

This is a responsive, multi-language (Turkish/English) corporate website project developed for Etoile Logistics. The site presents the company's services, about us information, and contact details with a modern interface.

### ✨ Key Features

  * **Multi-Language Support (TR/EN):** An interface that can switch between Turkish and English content with a single click, managed by JavaScript.
  * **Dynamic Hero Slider:** A 3-slide showcase that auto-plays (every 5 seconds) and can be manually controlled.
  * **Service Showcase:** A section displaying the company's wide range of services (Logistics, Automotive, Mining, Construction, etc.) with icons and descriptions.
  * **About Us Section:** An area highlighting the company's 15+ years of experience and statistics (Happy Customers, Cities served).
  * **Advanced Contact:**
      * A button that links directly to **WhatsApp**.
      * A button to open the user's default **Email** client.
      * A button to initiate a direct **phone call** on mobile devices.
  * **Responsive Design:** (Dependent on the `style.css` file) Targeted for mobile and tablet compatibility via the `meta viewport` tag.
  * **Google Analytics:** Integrated site traffic monitoring using `gtag.js`.

### 🛠️ Technologies Used

  * **HTML5:** The skeleton and content of the page.
  * **CSS3:** (`style.css` - Not provided in this file) The styling and design of the page.
  * **Vanilla JavaScript:**
      * Language switching function (`switchLanguage`).
      * Slider/Slideshow (`showSlide`, `nextSlide`).
      * Header scroll effect (`header.scrolled`).
      * Smooth in-page scrolling (`scrollIntoView`).
  * **Font Awesome:** For icons (e.g., `fas fa-truck`, `fab fa-whatsapp`).

### 🚀 How to Run

This is a static website that does not require a server or build process.

1.  Clone this repository to your computer:
    ```bash
    git clone [REPO_URL]
    ```
2.  Navigate to the project folder.
3.  Double-click the `index.html` file to open it in any modern web browser.
