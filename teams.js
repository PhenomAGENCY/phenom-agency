const translations = {
  fr: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "Pour les organisations",
    heroDescription:
      "Nous aidons les équipes compétitives à identifier des talents <span class='accent'>Valorant à fort potentiel</span>.",
    heroButton: "Contacter l’agence",

    provideTitle: "Ce que nous proposons",
    provide1Title: "Talents présélectionnés",
    provide1Text:
      "Nous identifions et évaluons des joueurs compétitifs avant de les présenter aux équipes.",
    provide2Title: "Profils analysés",
    provide2Text:
      "Nous fournissons une vision claire du niveau, du mindset et de l’expérience du joueur.",
    provide3Title: "Mise en relation ciblée",
    provide3Text:
      "Nous connectons les organisations avec des profils adaptés à leurs besoins compétitifs.",

    lookTitle: "Ce que nous recherchons chez les joueurs",
    look1Title: "Ambition compétitive",
    look1Text:
      "Des joueurs motivés à progresser dans un environnement structuré.",
    look2Title: "Mental sérieux",
    look2Text:
      "Discipline, régularité et volonté constante de progresser.",
    look3Title: "Compatibilité d’équipe",
    look3Text:
      "Capacité à communiquer et évoluer dans une structure collective.",

    processTitle: "Notre processus",
    process1Title: "Identification des talents",
    process1Text:
      "Nous repérons des profils prometteurs sur la scène compétitive.",
    process2Title: "Évaluation du profil",
    process2Text:
      "Analyse du niveau, de l’expérience et du mindset du joueur.",
    process3Title: "Matching avec les organisations",
    process3Text:
      "Nous identifions les équipes correspondant au profil.",
    process4Title: "Introduction",
    process4Text:
      "Nous facilitons la prise de contact entre équipes et joueurs.",

    ctaTitle: "Vous recherchez des joueurs à fort potentiel ?",
    ctaText:
      "Nous connectons les organisations avec des joueurs compétitifs prometteurs.",
    ctaButton: "Nous contacter",

    footerContactTitle: "Contact"
  },

  en: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "For esports organizations",
    heroDescription:
      "We help competitive teams identify <span class='accent'>high-potential Valorant talent</span>.",
    heroButton: "Contact the agency",

    provideTitle: "What we provide",
    provide1Title: "Pre-screened talent",
    provide1Text:
      "We identify and evaluate competitive players before presenting them to teams.",
    provide2Title: "Reviewed profiles",
    provide2Text:
      "We provide clear insight into a player’s level, mindset and experience.",
    provide3Title: "Targeted introductions",
    provide3Text:
      "We connect organizations with profiles that match their competitive needs.",

    lookTitle: "What we look for in players",
    look1Title: "Competitive ambition",
    look1Text:
      "Players motivated to improve in a structured environment.",
    look2Title: "Serious mindset",
    look2Text:
      "Discipline, consistency and a constant willingness to improve.",
    look3Title: "Team compatibility",
    look3Text:
      "Ability to communicate and grow within a team environment.",

    processTitle: "Our process",
    process1Title: "Talent identification",
    process1Text:
      "We identify promising profiles across the competitive scene.",
    process2Title: "Profile evaluation",
    process2Text:
      "We assess player level, experience and mindset.",
    process3Title: "Organization matching",
    process3Text:
      "We identify the teams that best fit the profile.",
    process4Title: "Introduction",
    process4Text:
      "We facilitate contact between teams and players.",

    ctaTitle: "Looking for high-potential players?",
    ctaText:
      "We connect organizations with promising competitive players.",
    ctaButton: "Contact us",

    footerContactTitle: "Contact"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

setLanguage("fr");

/* SCROLL REVEAL */

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    const revealPoint = 60;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();