"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const navLinks = ["Nuestra esencia", "Cómo lo hacemos", "Valores"];

const pasos = [
  {
    numero: "01",
    titulo: "Elegimos",
    icono: "/assets/Vector.png",
    descripcion: "Ingredientes seleccionados por su sabor y calidad.",
  },
  {
    numero: "02",
    titulo: "Preparamos",
    icono: "/assets/Vector-1.png",
    descripcion: "Cada mezcla se trabaja con paciencia y dedicación.",
  },
  {
    numero: "03",
    titulo: "Horneamos",
    icono: "/assets/Vector-2.png",
    descripcion:
      "Producción cuidadosa para lograr textura y aroma únicos.",
  },
];

const valores = [
  {
    titulo: "Calidad",
    descripcion:
      "Seleccionamos y cuidamos cada elemento de principio a fin.",
  },
  {
    titulo: "Creatividad",
    descripcion: "Buscamos combinaciones que sorprendan con alegría.",
  },
  {
    titulo: "Pasión por lo artesanal",
    descripcion: "Hacemos con las manos, el tiempo y el corazón.",
  },
  {
    titulo: "Compromiso",
    descripcion:
      "Construimos confianza en cada entrega y cada encuentro.",
  },
  {
    titulo: "Experiencia única",
    descripcion: "Queremos que cada bocado se vuelva un recuerdo.",
  },
];

const contactos = [
  "Teléfono: 11 6769-0911",
  "Instagram: @budinubi_oficial",
  "Ubicación: Gelly 3368",
  "Correo: budinubi_oficial@gmail.com",
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealEls = containerRef.current?.querySelectorAll(
      `.${styles.reveal}`
    );
    if (!revealEls || revealEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page} ref={containerRef}>
      {/* Portada */}
      <div className={styles.hero}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/assets/logo-budinubi.png"
              alt="Logo de budinubi"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link} href="#" className={styles.navLink}>
                {link}
              </a>
            ))}
            <button className={styles.ctaButton} type="button">
              Conocé budinubi
              <span className={styles.arrow}>→</span>
            </button>
          </nav>
        </header>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Hechos con dedicación</span>
            </div>
            <h1 className={styles.title}>
              Un bocado que se siente como casa.
            </h1>
            <p className={styles.subtitle}>
              Budines artesanales que combinan sabor, calidad y dedicación
              para acompañar tus momentos especiales.
            </p>
            <button
              className={`${styles.ctaButton} ${styles.heroCta}`}
              type="button"
            >
              Descubrí nuestra esencia
              <span className={styles.arrow}>→</span>
            </button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/foto-principal-2.jpg"
              alt="Fotografía principal"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Nuestra esencia */}
      <section className={styles.essence}>
        <div className={`${styles.essenceImages} ${styles.reveal}`}>
          <div className={styles.essenceImagePrimary}>
            <Image
              src="/assets/budin-cacao.jpg"
              alt="Budín de cacao"
              fill
              sizes="(max-width: 900px) 90vw, 500px"
            />
          </div>
          <div className={styles.essenceImageSecondary}>
            <Image
              src="/assets/detalle-artesanal.jpg"
              alt="Detalle artesanal"
              fill
              sizes="(max-width: 900px) 90vw, 320px"
            />
          </div>
        </div>
        <div
          className={`${styles.essenceContent} ${styles.reveal}`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className={styles.essenceHeading}>
            <span className={styles.eyebrow}>Nuestra esencia</span>
            <h2 className={styles.sectionTitle}>
              Hacemos budines para acercarnos.
            </h2>
          </div>
          <p className={styles.bodyText}>
            Budinubi nace con el objetivo de ofrecer budines artesanales que
            combinan sabor, calidad y dedicación en cada preparación.
          </p>
          <p className={styles.bodyTextSmall}>
            Nuestra marca busca acompañar los momentos especiales de las
            personas con productos deliciosos, elaborados con ingredientes
            seleccionados y un proceso de producción cuidadoso.
          </p>
          <div className={styles.quoteBox}>
            <span className={styles.quoteText}>
              Más que un budín: una experiencia de disfrute, calidez y
              cercanía.
            </span>
          </div>
        </div>
      </section>

      {/* Cómo lo hacemos */}
      <section className={styles.process}>
        <div className={`${styles.processHeader} ${styles.reveal}`}>
          <div className={styles.processHeading}>
            <span className={styles.eyebrow}>Cómo lo hacemos</span>
            <h2 className={styles.sectionTitle}>
              Lo artesanal vive en cada detalle.
            </h2>
          </div>
          <p className={styles.processIntro}>
            Desde la elección de cada ingrediente hasta el toque final de
            glaseado, cuidamos el proceso para que cada budín llegue lleno de
            sabor.
          </p>
        </div>
        <div className={styles.stepsGrid}>
          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className={`${styles.stepCard} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.stepNumber}>{paso.numero}</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitleRow}>
                  <span className={styles.stepTitle}>{paso.titulo}</span>
                  <Image
                    src={paso.icono}
                    alt=""
                    width={14}
                    height={14}
                    className={styles.stepIcon}
                  />
                </div>
                <span className={styles.stepDesc}>{paso.descripcion}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Valores y visión */}
      <section className={styles.values}>
        <div className={`${styles.valuesHeader} ${styles.reveal}`}>
          <div className={styles.valuesHeading}>
            <span className={styles.eyebrow}>Lo que nos guía</span>
            <h2 className={styles.sectionTitle}>
              Crecer sin perder nuestra esencia.
            </h2>
          </div>
          <p className={styles.valuesIntro}>
            Nuestra visión es ser una marca reconocida por la calidad de sus
            productos y por la confianza que generamos en nuestros clientes,
            consolidándonos dentro de la pastelería artesanal.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {valores.map((valor, index) => (
            <div
              key={valor.titulo}
              className={`${styles.valueCard} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className={styles.valueTitle}>{valor.titulo}</span>
              <span className={styles.valueDesc}>{valor.descripcion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <div className={styles.closing}>
        <div className={styles.closingInner}>
          <div className={`${styles.closingContent} ${styles.reveal}`}>
            <h2 className={styles.closingTitle}>
              Hay un budín esperando ser parte de tu próximo momento
              especial.
            </h2>
            <p className={styles.closingSubtitle}>
              Descubrí una forma artesanal, cálida y deliciosa de compartir.
            </p>
            <button className={styles.ctaButtonLight} type="button">
              Quiero conocer más
              <span className={styles.arrow}>→</span>
            </button>
          </div>
          <div
            className={`${styles.closingImageWrap} ${styles.reveal}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className={styles.closingCircle}>
              <div className={styles.closingLogo}>
                <Image
                  src="/assets/logo-budinubi.png"
                  alt="Logo de budinubi"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <span className={styles.contactLabel}>Contactanos</span>
          <div className={styles.contactList}>
            {contactos.map((contacto) => (
              <span key={contacto} className={styles.contactItem}>
                {contacto}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.bottomBarTitle}>
            budinubi · budines artesanales
          </span>
          <span className={styles.bottomBarText}>
            Hecho con dedicación para compartir
          </span>
        </div>
      </div>
    </div>
  );
}
