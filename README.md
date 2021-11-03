# Fisheye

FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux.
L'objectif était de construire un prototype fonctionnel de site web, pour lequel j'étais chargée de fournir tout le HTML, le CSS et le JavaScript.

Page d'accueil : 
○ Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure, leurs tags et une image miniature de leur choix.
○ En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des photographes est filtrée pour n'afficher que ceux qui correspondent à cette
étiquette.
○ Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.

Pages des photographes (une pour chaque photographe échantillon) :
○ Affiche une galerie des travaux du photographe.
○ Les photographes peuvent montrer à la fois des photos et des vidéos.
	■ Dans le cas des vidéos, une image miniature est présente dans la galerie.
○ Chaque média comprend un titre et un nombre de likes.
	■ Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté. (consignes de ma formation)
	■ Lorsque l'utilisateur clique à nouveau sur l'icône "Like", le nombre de likes affiché est décrémenté. (ajout personnel pour que cela ressemble au comportement d'un bouton "like" sur n'importe quel site web)
	■ Le nombre de likes total affiché en bas à droite d’une page de photographe corespond à la somme des likes de chacun de ses médias.
○ Les médias peuvent être triés par popularité, par date ou par titre.
○ Lorsque l'utilisateur clique sur un média, celui-ci s'ouvre dans une lightbox :
	■ Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre. L'utilisateur peut également quitter la lightbox en pressant la touche Echap.
	■ Des boutons de navigation permettent de passer d'un élément média à l'autre.
	■ Les touches fléchées permettent également de naviguer entre les médias.
○ Affiche un bouton pour contacter le photographe.
Le formulaire de contact est une modale qui s'affiche par-dessus le reste.
	■ Il comprend des champs pour les noms, l'adresse électronique et le message.
	■ Pour l'instant, le bouton de contact n'envoie pas de message au photographe, il va seulement afficher le contenu des trois champs dans les logs de la console.

Un lecteur d'écran comme NVDA peut-être utilisé sur ce site afin de rendre accessible son utilisation.


PREREQUIS, INSTALLATION, DEPLOIEMENT :

Les langages utilisés dans ce projet sont JavaScript, HTML, CSS (compilé depuis du SASS, en format SCSS). Vous n'êtes pas obligé de connaître ces langages pour utiliser le site et ajouter des photographes ou des médias.

A. Télécharger le projet en local

Pour télécharger ce projet afin de l'avoir en local sur votre machine, voici la marche à suivre. (cela vous permettra d'afficher et modifier le projet en local uniquement. Si vous souhaitez réellement agir sur le projet, se référer aux étapes de la partie C "Cloner le projet et envoyer des modifications").

Depuis le repository Github (https://github.com/a-c-morel/MORELAdeline_6_05042021), cliquez sur le bouton "Code", puis sur "Download Zip".
Après avoir extrait les fichiers dans le dossier de votre choix, vous avez la possibilité :

- d'afficher le projet en son état actuel:
	1) Rendez-vous sur https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb et ajoutez l'application à Chrome.
	2) Lancez cette application, et cliquez sur CHOOSE FOLDER. Sélectionnez le dossier que vous avez extrait.
	3) Cliquez sur le lien du Web Server URL qui ressemble à http://127.0.0.1:8887

- d'ajouter des photographes et des médias en modifiant le fichier photographers.json, que vous trouverez dans le dossier JS, et en ajoutant vos médias dans le dossier images. (partie C de ce Readme).
(vous pouvez ensuite afficher le site de la même façon qu'expliqué ci-dessus, en utilisant l'application Web Server for Chrome).


B. Me proposer des modifications

Si vous ne savez pas utiliser Git et Github, vous pouvez simplement m'envoyer les données et les médias que vous souhaitez ajouter, en m'envoyant un mail sur adelinemorel72@gmail.com
Vous trouverez dans la partie D la manière de rédiger les informations pour que je puisse les ajouter moi-même au fichier json. Vous pouvez me les envoyer au format .txt par exemple.


C. Cloner le projet et envoyer des modifications

Pour cela, vous devrez connaître un minimum le fonctionnement de Git et Github.

Pour réellement proposer vous-même des modifications sur mon projet, vous devrez procéder de cette façon :

1) Depuis le repository Github, forkez le projet en cliquant sur Fork (en haut à droite).
2) Vous allez ensuite créer un clone local de votre fork : rendez-vous sur votre fork, puis cliquez sur "Code" et copiez l'URL.
3) Ouvrez la fenêtre de Terminal
4) Tapez la commande [git clone] (sans les crochets), et collez l'URL copiée précédemment.
5) Créez une branche et travaillez dessus en local
6) Pushez votre branche sur votre fork
7) Créez une pull request


D. Procédure à suivre pour ajouter des photographes et des médias
- Les photos de profil vont dans le dossier images/Photographers_ID_Photos
- Les médias vont dans le dossier images/medias

Attention ! Ne pas modifier la structure de ces dossiers, ne pas créer de sous-dossiers.

Ensuite, il suffit d'ajouter le nouveau photographe ou média dans les données du fichier json, en suivant le même modèle que les autres photographes et médias inscrits dans le fichier.

Exemple 1) : je veux ajouter un photographe.

Je me positionne à la fin de la liste des photographers, avant le crochet fermant ] , et j'ajoute une virgule après le dernier photographe (juste après la dernière accolade } ).

Puis j'ajoute mes informations (en anglais afin de conserver une cohérence) de la manière suivante :

{
  "name": "nom du photographe",
  "id": *,
  "city": "ville du photographe",
  "country": "pays du photographe",
  "tags"**: ["nom de tag 1", "nom de tag 2", "nom de tag 3", ...],
  "tagline": "Signature du photographe, phrase d'accroche",
  "price": prix,
  "portrait": "nom-du-fichier.jpg"
}***

Attention important !
- Vérifiez les guillemets : l'id et le prix ne sont pas à mettre entre guillemets.
- Les astérisques ne doivent pas êtres copiés dans le JSON, ils sont ici pour vous expliquer la démarche à suivre.
- Le fichier être au format jpg, et ne doit pas contenir d'espaces dans son nom.
- Je n'ajoute pas de virgule après l'accolade fermante } si j'ai bien ajouté le photographe à la toute fin de la liste des photographes.

Exemple 2) : Je veux ajouter un média.

Je me positionne à la fin de la liste des médias avant le crochet fermant ] , et j'ajoute une virgule après le dernier média (juste après la dernière accolade } ).

Puis j'ajoute mes informations (en anglais afin de conserver une cohérence) de la manière suivante :

Si c'est une image :
{
  "id": *,
  "photographerId": ****,
  "title": "titre du média",
  "image": "titre-de-l-image.jpg",
  "tags": ["écrire ici le thème de la photo en un seul mot"],
  "likes": 0,
  "date": "année(4 chiffres)-mois(2 chiffres)-jour(2 chiffres)",
  "price": écrire le prix
}

Si c'est une vidéo :
{
  "id": *,
  "photographerId": ****,
  "title": "titre du média",
  "image": "titre-de-la-vidéo.mp4",
  "tags": ["écrire ici le thème de la vidéo en un seul mot"],
  "likes": 0,
  "date": "année(4 chiffres)-mois(2 chiffres)-jour(2 chiffres)",
  "price": écrire le prix
}

Attention important !
- Si c'est une image, le fichier devra être au format .jpg et ne pas être nommé avec des espaces.
- Si c'est une vidéo, le fichier devra être au format .mp4 et ne pas être nommé avec des espaces.

*pour l'id, il faudra en choisir un qui n'est pas déjà utilisé dans le fichier. Pour cela, vous pouvez vérifier en faisant Ctrl+f et en entrant le nombre voulu : si vous ne trouvez pas d'occurence exacte de ce nombre dans le fichier, vous pouvez l'utiliser.
**les tags correspondent à des thèmes de photos, par exemple, "landscapes", "portraits".
***n'ajoutez pas de virgule à cet endroit, si vous avez bien ajouté votre photographe à la fin de la liste des photographes.
****ici il faut bien faire correspondre avec l'id du photographe, il faut écrire le même nombre.