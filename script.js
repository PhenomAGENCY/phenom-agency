const translations = {
  fr: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    tagline: "From Potential to Performance",
    heroDescription:
      "Phenom Agency identifie et accompagne des joueurs esport à fort potentiel afin de les aider à rejoindre des équipes compétitives.",

    applyBtn: "Apply",

    whatWeDoTitle: "Ce que nous proposons",

    scoutingTitle: "Détection de talents",
    scoutingText:
      "Nous identifions des joueurs à fort potentiel grâce à l’analyse du gameplay, des statistiques et du mindset compétitif.",

    developmentTitle: "Développement du joueur",
    developmentText:
      "Nous aidons les joueurs à structurer leur parcours compétitif en travaillant sur la discipline, le mental et les objectifs.",

    placementTitle: "Placement en équipe",
    placementText:
      "Nous mettons en relation des joueurs prometteurs avec des équipes compétitives à la recherche de talents sérieux.",

    processTitle: "Notre méthode",
    processStep1Title: "Candidature",
    processStep1Text:
      "Les joueurs peuvent postuler via notre plateforme afin de présenter leur profil et leur parcours compétitif.",

    processStep2Title: "Évaluation",
    processStep2Text:
      "Les profils sélectionnés passent ensuite par une évaluation approfondie du niveau de jeu et du mindset.",

    processStep3Title: "Entretien",
    processStep3Text:
      "Un échange permet de comprendre les objectifs et la motivation du joueur.",

    processStep4Title: "Mise en relation",
    processStep4Text:
      "Si le profil correspond à nos critères, nous le connectons avec des équipes compétitives.",

    ctaTitle: "Become a Phenom",
    ctaText:
      "Vous pensez avoir le potentiel pour évoluer dans l’esport compétitif ?",

    contactTitle: "Contact"
  },

  en: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    tagline: "From Potential to Performance",
    heroDescription:
      "Phenom Agency identifies and supports high-potential esports players to help them join serious competitive teams.",

    applyBtn: "Apply",

    whatWeDoTitle: "What we do",

    scoutingTitle: "Talent Scouting",
    scoutingText:
      "We identify high-potential players through gameplay analysis, competitive data, and mindset evaluation.",

    developmentTitle: "Player Development",
    developmentText:
      "We help players build a more structured competitive path by focusing on discipline, mindset, and long-term goals.",

    placementTitle: "Team Placement",
    placementText:
      "We connect promising players with competitive organizations looking for serious and reliable talent.",

    processTitle: "Our process",
    processStep1Title: "Apply",
    processStep1Text:
      "Players can apply through our platform to introduce their profile and competitive background.",

    processStep2Title: "Evaluation",
    processStep2Text:
      "Selected profiles go through a detailed review of gameplay level, consistency, and competitive mindset.",

    processStep3Title: "Interview",
    processStep3Text:
      "A direct exchange helps us understand the player's ambitions, motivation, and competitive direction.",

    processStep4Title: "Placement",
    processStep4Text:
      "When a profile matches our standards, we connect the player with competitive team opportunities.",

    ctaTitle: "Become a Phenom",
    ctaText:
      "Do you believe you have what it takes to compete at a higher level?",

    contactTitle: "Contact"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
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

// langue par défaut
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
revealOnScroll()