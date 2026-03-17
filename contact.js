const translations = {
  fr: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "Contact",
    heroText: "Échangeons sur votre projet, votre structure ou votre profil.",
    heroLinkPlayers: "Players",
    heroLinkTeams: "Teams",
    heroLinkPartnerships: "Partenariats",
    heroResponse: "Réponse moyenne : 24-48h",

    infoTitle: "Nous écrire",
    zoneLabel: "Zone",
    zoneValue: "Europe",
    responseLabel: "Réponse moyenne",
    responseValue: "24 à 48h",
    socialLabel: "Réseaux",

    formTitle: "Formulaire de contact",
    namePlaceholder: "Nom / Structure",
    emailPlaceholder: "Email",
    selectDefault: "Type de demande",
    selectPlayer: "Joueur",
    selectTeam: "Équipe / Organisation",
    selectPartnership: "Partenariat",
    selectOther: "Autre",
    subjectPlaceholder: "Sujet",
    messagePlaceholder: "Message",
    sendButton: "Envoyer le message",
    formSuccess: "Message envoyé avec succès.",
    formNote: "Nous répondons aux demandes sérieuses dans les meilleurs délais.",

    ctaTitle: "Une demande spécifique ?",
    ctaText: "Joueur, équipe, organisation ou partenariat : nous pouvons vous orienter vers le bon contact.",
    ctaButton: "Nous écrire",

    footerTitle: "Contact"
  },

  en: {
    navPlayers: "Players",
    navTeams: "Teams",
    navContact: "Contact",

    heroTitle: "Contact",
    heroText: "Let’s talk about your project, your organization, or your profile.",
    heroLinkPlayers: "Players",
    heroLinkTeams: "Teams",
    heroLinkPartnerships: "Partnerships",
    heroResponse: "Average response time: 24-48h",


    infoTitle: "Write to us",
    zoneLabel: "Region",
    zoneValue: "Europe",
    responseLabel: "Average response time",
    responseValue: "24 to 48h",
    socialLabel: "Socials",

    formTitle: "Contact form",
    namePlaceholder: "Name / Organization",
    emailPlaceholder: "Email",
    selectDefault: "Inquiry type",
    selectPlayer: "Player",
    selectTeam: "Team / Organization",
    selectPartnership: "Partnership",
    selectOther: "Other",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    sendButton: "Send message",
    formSuccess: "Message sent successfully.",
    formNote: "We respond to serious inquiries as quickly as possible.",

    ctaTitle: "A specific request?",
    ctaText: "Player, team, organization, or partnership: we can direct you to the right contact.",
    ctaButton: "Contact us",

    footerTitle: "Contact"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatablePlaceholders = document.querySelectorAll("[data-i18n-placeholder]");

function setLanguage(lang) {
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  translatablePlaceholders.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
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

setLanguage("fr");

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/maqpeolz", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
  form.reset();
  successMessage.style.display = "block";
} else {
  alert("Une erreur est survenue.");
}
if (response.ok) {
  form.reset();
  successMessage.classList.add("show");

  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);
}
});