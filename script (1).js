// Language switching functionality
        function switchLanguage(lang) {
            // Hide all language content
            const allLangContent = document.querySelectorAll('.lang-content');
            allLangContent.forEach(content => {
                content.classList.remove('active');
            });

            // Show selected language content
            const selectedLangContent = document.querySelectorAll('.lang-content.' + lang);
            selectedLangContent.forEach(content => {
                content.classList.add('active');
            });

            // Update language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(lang + '-btn').classList.add('active');

            // Update page language attribute
            document.documentElement.lang = lang;
        }

        // Slider functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const navDots = document.querySelectorAll('.nav-dot');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            navDots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            navDots[index].classList.add('active');
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        // Auto-advance slides
        setInterval(nextSlide, 5000);

        // Header scroll effect
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        document.addEventListener('DOMContentLoaded', function () {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Get form data
                    const formData = new FormData(this);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const message = formData.get('message');

                    // Create WhatsApp message
                    const whatsappMessage = `Merhaba! 
İsim: ${name}
E-posta: ${email}
Telefon: ${phone}
Mesaj: ${message}`;

                    // Open WhatsApp with the message
                    const whatsappUrl = `https://wa.me/905555555555?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappUrl, '_blank');

                    // Reset form
                    this.reset();

                    // Show success message
                    alert('Mesajınız WhatsApp üzerinden gönderildi!');
                });
            });
        });