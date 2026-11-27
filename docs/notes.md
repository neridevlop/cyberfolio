<!-- vos choix, la securite, la part de l'ia -->

# Notes de projet : mon cyberfolio

> Brouillon court à relire. Complétez les **[À COMPLÉTER]** et supprimez cette ligne.

## Ce que j'ai fait
1. **Persona et plan** : `persona.md` (recruteurs cyber, profs, élèves) et `plan-du-site.md` (3 pages).
2. **Accueil en HTML sémantique** : `header`, `nav`, `main`, 3 `section`, `footer`, un seul `h1`, pas d'images donc pas de `alt`.
3. **CSS** : un seul `style.css`, menu en flexbox, aucun `style="..."`, style Frutiger Aero avec animation de pétales.
4. **Contenu** : textes, compétences, 4 projets de l'école Guardia, bouton de téléchargement du CV, formulaire de contact (Formspree).
5. **JavaScript** : page d'avertissement sombre (`<dialog>` + `sessionStorage`) et envoi du formulaire avec `fetch`.
6. **Git et GitHub Pages** : commits, push, site en ligne : **[À COMPLÉTER : lien]**.

## Choix de sécurité
- Aucun mot de passe ni clé privée dans le dépôt.
- Formulaire : le minimum de données, champs obligatoires, champ piège anti-spam, e-mail aussi visible au cas où.
- JavaScript : `textContent` plutôt que `innerHTML` ; seule une valeur sans danger est stockée dans le navigateur.
- Aucune dépendance externe (pas de framework, pas de script tiers).
- CV public : sans adresse postale ni téléphone personnel.

## Problèmes rencontrés
- Du HTML collé dans `style.css` : le texte restait gris. Supprimé du fichier CSS.
- Pages lentes à s'afficher : l'intro se rejouait. Intro raccourcie.
- `git push` : **[À COMPLÉTER : cause et solution]**.
- Page d'avertissement : **[À COMPLÉTER : problème et solution]**.

## Part de l'IA
- **Produit par l'IA (Claude)** : modèles de persona et de plan, structure HTML, CSS, animations, JavaScript, explications sur Git.
- **Fait par moi** : le sujet, l'ambiance visuelle, mes textes, mon parcours et mes projets, les tests et les corrections.
- **Comment j'ai vérifié** : test dans le navigateur après chaque changement, console pour les erreurs, validateur W3C.
- **Ce que je sais expliquer** : HTML sémantique, variables CSS, flexbox, `@keyframes`, `sessionStorage`, `fetch`, commit et push.
- **Ce que je maîtrise moins** : **[À COMPLÉTER]**.