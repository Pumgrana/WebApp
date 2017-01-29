`npm install     // Will install all nom dependencies`
`typings install // Will install all typescript file definitions`
`tsc             // Will compile the project (Typescript to Javascript)`

# Replacer les pages dans Google Chrome

Pour remplacer l'historique de chrome par une page html, editer le manifest.json et mettre la donnee suivante :
`"chrome_url_overrides" : {
  "history": "mypage.html"
}`

D'autres pages peuvent egalement etre remplacee :
- Marque Page
- Nouvel Onglet

Cependant, dans un plugin, une seule page peut etre remplacee. Par exemple, si la page historique a ete replacee, alors les autres pages ne peuvent pas etre remplacees.