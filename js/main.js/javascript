// 1. Intro : jouée une seule fois par visite
try {
  if (sessionStorage.getItem("introVue")) {
    document.documentElement.classList.add("deja-vu");
  } else {
    sessionStorage.setItem("introVue", "1");
  }
} catch (e) {
  // Si le stockage est bloqué, l'intro se joue simplement à chaque page
}

// 2. Formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  var formulaire = document.querySelector("form");
  if (!formulaire) return;

  var retour = document.getElementById("retour");

  formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formulaire.checkValidity()) {
      retour.textContent = "Merci de remplir les champs obligatoires.";
      return;
    }

    retour.textContent = "Envoi en cours...";

    fetch(formulaire.action, {
      method: "POST",
      body: new FormData(formulaire),
      headers: { Accept: "application/json" }
    })
      .then(function (reponse) {
        if (reponse.ok) {
          formulaire.reset();
          retour.textContent = "Merci, votre message a bien été envoyé !";
        } else {
          retour.textContent = "L'envoi a échoué. Écrivez-moi directement par e-mail.";
        }
      })
      .catch(function () {
        retour.textContent = "Problème de connexion. Réessayez plus tard.";
      });
  });
});