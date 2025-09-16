# 1-09-2025

## _Opdracht: Formuleer twee of drie leervragen als uitgangspunt voor deze sprint_

### 1. Kennis uit vorig jaar verfrissen: 
"Wat is Liquid?" "Hoe werkt Directus/Express/Liquid ook alweer?"

### 2. Beheersen van het maken van een mooie workflow: 
commits/issues en andere documentatie in github.
### 3. Instromen in goede samenwerking. 
Want daar zit ook een groot moeilijkheid in, om efficient te zijn binnen een team en vooral goed samenwerking of werk van andere teamleden aan te wijzen.

## _Teamcanvas gemaakt_

Samen met Abeer groepje gevormd, teamcanvas gemaakt voor aankomende sprint 13, afspraken vastgelegd in CONTRIBUTING.md  [https://github.com/aliceafanasieva/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md](url)

## Projectboard 
Gewerkt aan het opstellen van projectboard, rechten gedeeld met Abeer. Al vastgelegd als issue dat eerste versie van schets van squadpage af moet zijn voor woensdag.  [https://github.com/users/aliceafanasieva/projects/14/views/1](url)





# 2-09-2025

## Moodboard gemaakt voor squadpage
In pinterest heb ik gekeken voor inspiratie voor mijn design. 
<img width="721" height="535" alt="Image" src="https://github.com/user-attachments/assets/32358b0d-ba21-4322-acb4-e21d6585af12" />

## Eerste versie van squadpage design gemaakt in Figma
Ik heb ook een eerste versie van squadpage in Browser gemaakt. 

<img width="1512" height="2381" alt="Image" src="https://github.com/user-attachments/assets/281b2d9c-f4fb-430d-9b1d-6143bd2db6ce" />





# 3-09-2025

## To do's

- [x] Bekijken video's over Sveltekit
- [x] Tutorial toepassen op mijn visitekaartje website

## Mobile design squadpage

<img width="721" height="802" alt="Image" src="https://github.com/user-attachments/assets/46cc4f5e-bad1-4219-a49e-de0a1e2325a1" />

<img width="721" height="802" alt="Image" src="https://github.com/user-attachments/assets/204b3cf7-8dc2-4d34-99a9-05f721ecd4f6" />

<img width="729" height="757" alt="Image" src="https://github.com/user-attachments/assets/6966696a-3ac7-453a-a253-8da4b5dbc818" />

## Visitekaartje design

Ik heb ook een design gemaakt voor mijn visitekaartje. 

<img width="1056" height="513" alt="Image" src="https://github.com/user-attachments/assets/d57c96ab-49e3-4c3d-b75b-7f0ee79566fe" />

## Opdracht: Live Rendering




#  8-09-2025

## Workshop Creative coding

### Soorten animaties

Loading

View transitions

Scroll/appear (volgende keer)

### Opdracht: verzamel inspiratie in Figma voor elk soort animatie

https://www.figma.com/design/z6f8deknVfTrfKuwcA34z4/Squadpage-FDND?node-id=0-1&t=zaQ0Kz2EGV7GNVW8-1

<img width="665" height="661" alt="Image" src="https://github.com/user-attachments/assets/2d00cc28-801c-4894-aec6-05eb295f5962" />

### Keyframes

Met keyframes geef je elementen start styling om ze te verbergen, bijvoorbeeld met transform en opacity.

- Gebruik classes voor animaties doe je wil hergebruiken, zo houd je animatie code DRY. 
- Gebruik delays (stagger animatie) om je animaties als een waterval af te laten spelen. 

### View transitions

- animeren tussen twee states
- snapshots
- de "root"
- werken op basis van keyframes

dev tools -> drie punten -> more tools -> animations

::view-transition pseudoelement. 

Je kan view-transition ook naam geven (view-transitions-name style="--vt: image-1" of dan "image-2")

Javascript:

if (document.startViewTransition) {

*of browser dat ondesteund*

**Voorbeeld van naamgeving:**
.animation-fade-in--up


## Leervragen
1. Welke keuzes heb jij gemaakt in jouw motion language (shapes, direction, easing, duration)?
2. Hoe zou je animatie kunnen toepassen om de gebruikerservaring van je overzichtspagina te versterken?





# 10-09-2025

## Werkcollege prioriteren

### Epic
grote stukken werk ddie kunnen worden opgesplitst in user stories, die vervolgens in . . .

### User stories
Een userstory geeft aan wat wordt de waarde die we gaan creeeren voor endgebruiker. User stories hebben vaste format, acceptatiecriteria, to do's.

### Taken
Kun je zien als todo's die ervoor zorgen dat een user story klaar is.

<img width="1064" height="682" alt="Image" src="https://github.com/user-attachments/assets/8ec99a8f-bcea-479a-be05-72852a577399" />

### Opdrachten Prioriteren
https://github.com/fdnd-task/your-tribe-for-life-squad-page/blob/main/docs/prioriteren.md

**Opdracht 1**

1. Zoek met je team online naar voorbeelden van epics, schrijf er 1 op het bord
2. Zoek met je team online naar voorbeelden van user stories, schrijf er 2 op het bord
3. Bepaal welk type gebruiker jullie site gaat gebruiken

![Image](https://github.com/user-attachments/assets/c6412327-389f-41b3-8316-f2a64a802a77)

**Opdracht 2**

1. Maak in retrospect (dit betekent achteraf) een ‘epic’ en user stories voor jullie squadpage

<img width="306" height="790" alt="Image" src="https://github.com/user-attachments/assets/81559d8a-f984-43f8-a940-74ed4ed49644" />

### Planning Poker
Complexiteit en inspanning van taak. Jij maakt een inschatting op basis van moeilijkheid van taak, zo kan jij tijd beter inschatten per taak. 
Schaal: 
**? 0 1 2 3 4 5 8 13 21** 

<img width="470" height="621" alt="Image" src="https://github.com/user-attachments/assets/fcd6a04a-d320-41b4-bc3a-406f8bd0813e" />


# Journal 15-09-2025

Tutorial en bestanden - news.fdnd.nl


## Complexe concepten Svelte werkcollege door Justus

- [ ] **File-based routing**

routes
uuid slope route - je krijgt dit als parameter
auth - autenticatie route

### om route aan te maken:

1. maak mapje aan
2. maak daar een  bestand in - +page.svelte
3. Klaar! dit is heel simpel in svelte

Hooks svetlekit - documentatie lezen

##Using layouts

+layout.svelte 

Layout is een sjablon voor alle svelte. Hier staat alles wat in alle paginas moet zijn. 

<script>
import '$lib/assets/style.css'
import { Logo } from ' $lib '
* * * andere imports  etc * * *

 let { children, data } = $props( )

</script>

<svelte:head> 
*Wat hier staat wordt in head van alle route files gezet*  
in app.html - %sveltekit.head%

In app.html - 
<body data-sveltekit-preload-data="hover">
<div style="display: contents">%sveltekit.body%</div>"
</body>

<main>
{@render children?.()}
</main>
Layout.svelte geldt voor alle mapjes in dezelfde mapje. 

## Load functions
https://www.npmjs.com/package/@directus/sdk

##Working with components

Om jezelf niet te herhalen - gebruik components.
_Recursive componenten_ - nested component dat zichzelf importeert.

Components kunnen ook in assets:
- Zo kan je makkelijker svg's css editen (kleur, grotte etc)
- Je kan dan ook Javascript toevoegen aan svg.  Je kan dan veel meer met svg doen alleen binnen jouw Svelte component. 
- En svg ziet veel meer netjes uit in html.
 
##Runes
Runes is bijv $props (rune dat property bevat), $state is een rune dat reactive state - variabele verandert mee. 
$effect - functies dat wordt uitgevoerd, wanneer $state wordt gebruikt, zodat $state WEL ECHT werkt.
$bindable - als er iets aangepast wordt in component, veranderd dezelfde property in parent.
$host - custom events despatchen (formulier click op button - wordt iets anders in jouw project afhandelt).

##Reactivity

##Forms and Actions

### Opdrachten 

opdracht 1: https://github.com/aliceafanasieva/your-tribe-for-life-squad-page/issues/57

opdracht 2: https://github.com/aliceafanasieva/your-tribe-for-life-squad-page/issues/59

## Leervragen

**1. Wat zijn sveltekit layouts en hoe kan je die toepassen in een web project?**

**2. Wat zijn componenten en hoe kan je die toepassen in een web project?**

**3. Kies een van de principes: file-based routing, load functions, runes (reactivity hack) of forms en actions. Leg uit hoe je het gekozen principe kunt toepassen in een web project.**


# 16-09-2025

## CSS Challange - Transforms en transitions

### Transform & Transitions

**tranform origin** : 0% 100% of 2em 2em  ----->  punt waarom het object gaat draaien.
 
rotate: 1turn   ---->   jij kan aangeven hoeveel keer het object door eigen as gaat draaien. 

transition-duration: 1s;      ---->   duur van transitie. 

transitions-delay: 2s;    ---->       transition gebeurd 2 seconden later. 

### Easing

Tempo geef je aan met transition-timing-function.

`transition-timing-function: ease;   ` 

ease-in  ----> begint langzaam en eindigt sneller.

**Ceaser - CSS Easing Animation Tool :**  https://matthewlein.com/tools/ceaser

**Nog een online tool voor ready to use css:** [open-props.style/#easing
](https://open-props.style/#easing)

### Uitzetten van animaties

ANimaties moet alleen aan als user dit aan heeft. Als user een reduced motion aan heeft dan:

```
@media (prefers-reduced-motion:no-preferance) {
     transition-duration: 1s;
}

```
Dit is heel goede praktijk voor accessibility (mensen met epilepsy etc.)


### Transform functie

```
transform: 
      translate(-5em)
      rotate(45deg)
   ;
```

### Perspective 

```
transform:
    perfective(10em)
    rotateX(45);

transition:1s;
}
```

### Backface Visibility

Je ziet de achterkant van object niet als het draait.










