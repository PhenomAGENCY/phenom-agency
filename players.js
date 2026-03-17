const translations = {
  fr: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "Rejoindre Phenom Agency",
    heroText1: "Nous accompagnons un nombre limité de joueurs à ",
    heroAccent: "fort potentiel",
    heroText2: " sur la scène compétitive Valorant en Europe.",
   
    startApplication: "Commencer la candidature",

    requirementsTitle: "Critères minimums",
    reqAge: "17+",
    reqImmortal: "Immortal+",
    reqEu: "EU region",
    reqMindset: "Mentalité compétitive",
    requirementsNote:
      "Les joueurs qui postulent doivent répondre aux critères minimums nécessaires pour évoluer dans un environnement structuré.",

    lookForTitle: "Ce que nous recherchons",
    look1Title: "Fort potentiel",
    look1Text:
      "Des joueurs qui montrent de solides qualités mécaniques et une vraie marge de progression.",
    look2Title: "Discipline",
    look2Text:
      "Un engagement réel dans l'entraînement, la progression et la régularité.",
    look3Title: "Esprit d’équipe",
    look3Text:
      "Une capacité à communiquer, à écouter et à évoluer dans un cadre collectif.",

    processTitle: "Notre méthode",
    process1Title: "Candidature",
    process1Text:
      "Les joueurs peuvent postuler via notre plateforme afin de présenter leur profil et leur parcours compétitif.",
    process2Title: "Evaluation",
    process2Text:
      "Les profils sélectionnés passent ensuite par une évaluation approfondie du niveau de jeu et du mindset.",
    process3Title: "Entretien",
    process3Text:
      "Un échange nous permet de mieux comprendre les objectifs, la motivation et le projet compétitif du joueur.",
    process4Title: "Placement",
    process4Text:
      "Si le profil correspond à nos critères, nous le connectons avec des équipes compétitives.",

    formTitle: "Formulaire de candidature",
    labelPseudo: "Pseudo",
    labelAge: "Age",
    labelCountry: "Pays",
    labelLanguage: "Langue principale",
    labelRole: "Rôle principal",
    labelCurrentRank: "Rank actuel",
    labelPeakRank: "Peak rank",
    labelAvailability: "Disponibilités",
    labelTracker: "Lien Tracker / VLR",
    labelVod: "Lien VOD",
    labelTeamExperience: "Expérience en équipe",
    labelMotivation: "Pourquoi veux-tu rejoindre Phenom Agency ?",
    labelDifference: "Qu’est-ce qui te différencie des autres joueurs ?",
    submitBtn: "Envoyer la candidature",
    selectiveNote: "Les candidatures sont étudiées de manière sélective. Seuls les profils retenus seront recontactés.",
    selectPlaceholder: "Sélectionner",

    footerContactTitle: "Contact",

    successMessage: "Votre candidature a bien été envoyée."
  },

  en: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "Join Phenom Agency",
    heroText1: "We work with a limited number of ",
    heroAccent: "high-potential players",
    heroText2: " across the European Valorant competitive scene.",  
    startApplication: "Start Application",

    requirementsTitle: "Minimum Requirements",
    reqAge: "17+",
    reqImmortal: "Immortal+",
    reqEu: "EU region",
    reqMindset: "Competitive Mindset",
    requirementsNote:
      "Applicants must meet the minimum criteria required to compete in a structured environment.",

    lookForTitle: "What We Look For",
    look1Title: "High Potential",
    look1Text:
      "Players who show strong mechanical skill and real room for development.",
    look2Title: "Discipline",
    look2Text:
      "A serious commitment to training, improvement, and consistency.",
    look3Title: "Team Mindset",
    look3Text:
      "The ability to communicate, listen, and grow within a team environment.",

    processTitle: "Our Process",
    process1Title: "Apply",
    process1Text:
      "Players can apply through our platform to present their profile and competitive background.",
    process2Title: "Evaluation",
    process2Text:
      "Selected profiles go through a detailed review of gameplay level and competitive mindset.",
    process3Title: "Interview",
    process3Text:
      "A direct exchange helps us better understand the player's goals, motivation, and competitive direction.",
    process4Title: "Placement",
    process4Text:
      "If the profile matches our standards, we connect the player with competitive teams.",

    formTitle: "Application Form",
    labelPseudo: "Pseudo",
    labelAge: "Age",
    labelCountry: "Country",
    labelLanguage: "Main language",
    labelRole: "Main role",
    labelCurrentRank: "Current rank",
    labelPeakRank: "Peak rank",
    labelAvailability: "Availability",
    labelTracker: "Tracker / VLR link",
    labelVod: "VOD link",
    labelTeamExperience: "Team experience",
    labelMotivation: "Why do you want to join Phenom Agency?",
    labelDifference: "What makes you different from other players?",
    submitBtn: "Submit Application",
    selectPlaceholder: "Select",
    selectiveNote: "Applications are reviewed selectively. Only shortlisted profiles will be contacted.",
    footerContactTitle: "Contact",
   

    successMessage: "Your application has been submitted successfully."
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const form = document.getElementById("applicationForm");
const formMessage = document.getElementById("form-message");

let currentLang = "fr";

function setLanguage(lang) {
  currentLang = lang;

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

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    form.classList.add("was-validated");

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        form.classList.remove("was-validated");


        setTimeout(() => {
          formMessage.textContent = translations[currentLang].successMessage;
          formMessage.className = "form-message form-success fade-in";
          formMessage.style.opacity = "1";
        }, 400);

        // Disparition du message après 5 secondes
        setTimeout(() => {
          formMessage.style.opacity = "0";
        }, 5000);

      } else {
        formMessage.textContent =
          currentLang === "fr"
            ? "Une erreur est survenue. Veuillez réessayer."
            : "Something went wrong. Please try again.";
        formMessage.className = "form-message form-error";
      }

    } catch (error) {
      formMessage.textContent =
        currentLang === "fr"
          ? "Une erreur est survenue. Veuillez réessayer."
          : "Something went wrong. Please try again.";
      formMessage.className = "form-message form-error";
    }
  });
}


setLanguage("fr");