// ===== Avertissement avant l'entrée sur le site =====
function initAvertissement() {
  var boite = document.getElementById("avertissement");
  if (!boite || typeof boite.showModal !== "function") return;

  // Déjà accepté pendant cette visite ? On ne le remontre pas.
  try {
    if (sessionStorage.getItem("avertissementAccepte") === "oui") return;
  } catch (e) {
    // stockage bloqué : l'avertissement s'affichera à chaque fois
  }

  var racine = document.documentElement;
  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var console_ = document.getElementById("avert-console");
  var refus = document.getElementById("avert-refus");

  var lignes = [
    "> initialisation du cyberfolio...",
    "> analyse des menaces : 0 trouvée",
    "> niveau d'ambiance : Frutiger Aero",
    "> risque estimé : pétales, bulles"
  ];

  // Effet machine à écrire
  function ecrire() {
    if (reduit) {
      console_.textContent = lignes.join("\n");
      return;
    }
    var l = 0;
    var c = 0;
    console_.textContent = "";
    (function pas() {
      if (l >= lignes.length) return;
      if (c < lignes[l].length) {
        console_.textContent += lignes[l].charAt(c);
        c++;
        setTimeout(pas, 28);
      } else {
        console_.textContent += "\n";
        l++;
        c = 0;
        setTimeout(pas, 250);
      }
    })();
  }

  function fermer() {
    boite.close();
    racine.classList.remove("en-attente"); // l'intro de pétales démarre
  }

  // On met les animations du site en pause, puis on affiche l'avertissement
  racine.classList.add("en-attente");
  boite.showModal();
  ecrire();

  // La touche Échap ne ferme pas l'avertissement : il faut choisir
  boite.addEventListener("cancel", function (event) {
    event.preventDefault();
  });

  document.getElementById("avert-oui").addEventListener("click", function () {
    try {
      sessionStorage.setItem("avertissementAccepte", "oui");
    } catch (e) {}
    if (reduit) {
      fermer();
    } else {
      boite.classList.add("sortie");
      setTimeout(fermer, 450);
    }
  });

  document.getElementById("avert-non").addEventListener("click", function () {
    refus.hidden = false;
    refus.textContent = "Pas de souci. Vous pouvez fermer cet onglet en toute sécurité.";
  });
}

// ===== Formulaire de contact =====
function initFormulaire() {
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
}

document.addEventListener("DOMContentLoaded", function () {
  initAvertissement();
  initFormulaire();
});