<!-- vos choix, la securite, la part de l'ia -->

# Notes de projet : mon cyberfolio


## Ce que j'ai fait
1. **Persona et plan** : `persona.md` (recruteurs cyber, profs, élèves) et `plan-du-site.md` (3 pages).
2. **Accueil en HTML sémantique** : `header`, `nav`, `main`, 3 `section`, `footer`, un seul `h1`, pas d'images donc pas de `alt`.
3. **CSS** : un seul `style.css`, menu en flexbox, aucun `style="..."`, style Frutiger Aero avec animation de pétales.
4. **Contenu** : textes, compétences, 2 projets de l'école Guardia et un projet requis pour mon baccalaureat, bouton de téléchargement du CV, formulaire de contact (Formspree).
5. **JavaScript** : envoi du formulaire avec `fetch`.
6. **Git et GitHub Pages** : commits, push, site en ligne : **voir drive envoyé par mail**.

## Choix de sécurité
- Aucun mot de passe ni clé privée dans le dépôt.
- Formulaire : le minimum de données, champs obligatoires, champ piège anti-spam, e-mail aussi visible au cas où.
- JavaScript : `textContent` plutôt que `innerHTML` ; seule une valeur sans danger est stockée dans le navigateur.
- Aucune dépendance externe (pas de framework, pas de script tiers).
- CV public : sans adresse postale ni téléphone personnel.

## Problèmes rencontrés
- Du HTML collé dans `style.css` : le texte restait gris. Supprimé du fichier CSS.
- Pages lentes à s'afficher : l'intro de telechargement etait trop lente. Intro raccourcie et plus dynamique.
- `git push` : **valider les modifications groupées pour voir le site se former partie par partie**.


## Part de l'IA
- **Produit par l'IA (Claude)** : modèles de persona et de plan, structure HTML, CSS, animations, JavaScript, explications sur Git.
- **Fait par moi** : le sujet, l'ambiance visuelle, mes textes, mon parcours et mes projets, les tests et les corrections.
- **Comment j'ai vérifié** : test dans le navigateur après chaque changement, console pour les erreurs.