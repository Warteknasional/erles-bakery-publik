import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Reset scroll ke atas saat berganti halaman (Instant & Clean)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 2. Pantau scroll untuk progress bar & navbar compact blur
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll =
            document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          if (windowHeight > 0) {
            setScrollProgress(
              Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100))
            );
          }

          // Efek elevasi & kompaksi navbar pill ketika di-scroll
          const navPill = document.querySelector('.deux-nav-pill');
          if (navPill) {
            if (totalScroll > 30) {
              navPill.classList.add('is-scrolled');
            } else {
              navPill.classList.remove('is-scrolled');
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Intersection Observer untuk animasi reveal yang halus & tidak norak
  useEffect(() => {
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(
        '.reveal-up, .reveal-scale, .reveal-left, .reveal-right, .reveal-fade'
      );

      if (!('IntersectionObserver' in window)) {
        revealElements.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              // Unobserve agar animasi tidak looping / berkedip norak saat di-scroll bolak-balik
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Jika elemen sudah masuk di viewport layar awal, langsung tampilkan
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return (
    <div
      className="deux-scroll-progress-bar"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
}
