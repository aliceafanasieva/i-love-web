# 1-09-2025

## _Opdracht: Formuleer twee of drie leervragen als uitgangspunt voor deze sprint_

### 1. Kennis uit vorig jaar verfrissen:

"Wat is Liquid?" "Hoe werkt Directus/Express/Liquid ook alweer?"

### 2. Beheersen van het maken van een mooie workflow:

commits/issues en andere documentatie in github.

### 3. Instromen in goede samenwerking.

Want daar zit ook een groot moeilijkheid in, om efficient te zijn binnen een team en vooral goed samenwerking of werk van andere teamleden aan te wijzen.

## _Teamcanvas gemaakt_

Samen met Abeer groepje gevormd, teamcanvas gemaakt voor aankomende sprint 13, afspraken vastgelegd in CONTRIBUTING.md [https://github.com/aliceafanasieva/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md](url)

## Projectboard

Gewerkt aan het opstellen van projectboard, rechten gedeeld met Abeer. Al vastgelegd als issue dat eerste versie van schets van squadpage af moet zijn voor woensdag. [https://github.com/users/aliceafanasieva/projects/14/views/1](url)

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

# 8-09-2025

## Workshop Creative coding

### Soorten animaties

- Loading

- View transitions

- Scroll/appear (volgende keer besproken)

### Opdracht: verzamel inspiratie in Figma voor elk soort animatie

Verzamel per animatiesoort inspiratie in Figma:

https://www.figma.com/design/z6f8deknVfTrfKuwcA34z4/Squadpage-FDND?node-id=0-1&t=zaQ0Kz2EGV7GNVW8-1

<img width="665" height="661" alt="Image" src="https://github.com/user-attachments/assets/2d00cc28-801c-4894-aec6-05eb295f5962" />

Opdracht uitgevoerd om inspiratie voor toekomstige animaties te verzamelen.

### Keyframes

Met keyframes geef je een start-toestand om elementen te verbergen (bijv. met transform en opacity) en een eind-toestand om ze in te laten komen.

- Gebruik classes voor herbruikbare animaties (DRY).

- Gebruik delays voor stagger (watervalanimatie).

### View transitions

- animeren tussen twee states
- snapshots
- de "root"
- werken op basis van keyframes

```
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animation-fade-in--up {
  animation: fade-in-up 300ms ease-out forwards;
}

.stagger > * { opacity: 0; }
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
/* … */

```

**Voorbeeld van goed naamgeving:**
`.animation-fade-in--up `

## Leervragen

1. Welke keuzes heb jij gemaakt in jouw motion language (shapes, direction, easing, duration)?

Mijn motion language gebruikt gefaseerde binnenkomst (stagger), verticale richting omhoog, fade-in, ease-out easing en langere duur (±500 ms).

2. Hoe zou je animatie kunnen toepassen om de gebruikerservaring van je overzichtspagina te versterken?

Om de overzichtspagina te versterken animeer ik de hero-sectie gefaseerd: onderdelen verschijnen na elkaar met een subtiele delay. Zo ontstaat ritme, focus en een dynamischer eerste indruk.

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
2. maak daar een bestand in - +page.svelte
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
_Wat hier staat wordt in head van alle route files gezet_  
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
- Je kan dan ook Javascript toevoegen aan svg. Je kan dan veel meer met svg doen alleen binnen jouw Svelte component.
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

**tranform origin** : 0% 100% of 2em 2em -----> punt waarom het object gaat draaien.

rotate: 1turn ----> jij kan aangeven hoeveel keer het object door eigen as gaat draaien.

transition-duration: 1s; ----> duur van transitie.

transitions-delay: 2s; ----> transition gebeurd 2 seconden later.

### Easing

Tempo geef je aan met transition-timing-function.

`transition-timing-function: ease;   `

ease-in ----> begint langzaam en eindigt sneller.

**Ceaser - CSS Easing Animation Tool :** https://matthewlein.com/tools/ceaser

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

# 17-09-2025

## Wrap-up

Vandaag project klaarzetten voor de oplevering.

#### Oplever todo's:

Wat moet er in de oplevering zitten?

- [`README.md`](#readme)
- [Alles moet getest zijn](#testen)
- [Projectboard](#projectboard)
- Live staan + live link
- Geen open pull requests

##### Projectboard

- Moscow is toegepast
- Issues in juiste fase
- Issues sluiten
- Backlog met issues die niet opgepakt worden

##### Refactor

- Structuur van je mappen
- Netjes uitlijnen van code
- Ongebruikte code is verwijderd
- Ongebruikte files zijn verwijderd
- Comments in code
- Comments met bronnen
- Conventies uit `CONTRIBUTING.md` zijn gehandhaafd

##### README

- Informatie voor installatie
- Omschrijving van het project
- Ontwerpkeuzes uitleggen
- Functionaliteiten uitleg

##### Testen

- Performance
- A11y, tab, kleur, screenreader
- User test
- Responsive + Device test
- Html validator

Maak issues aan van de onderdelen die je mist en neem ze mee op je projectboard.

### Opdracht: Code conventies & Git flow

1. Lees de conventies van FDND Agency door op [docs](https://docs.fdnd.nl/)
2. Vergelijk nu jullie conventies met die van de Agency, schrijf de grootste verschillen op het bord
3. Teken op het bord jullie Git flow en die van de Agency, wat valt jullie op?
4. Overleg met je team waarom jullie denken dat FDND Agency voor deze gitflow heeft gekozen

<img width="745" height="819" alt="image" src="https://github.com/user-attachments/assets/0ef6c938-177d-47df-bcb7-b86fd8b75e35" />

_Foto van bord_

#### Extra bronnen

<!-- Extra links voor documentatie en tutorials -->

- [Code conventies @ sprint 2](https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md)
- [Refactor & code conventies @ sprint 6](https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/refactoring-code-conventions.md)
- [Importance of code conventions @ medium](https://medium.com/@ella_choi/setting-up-development-conventions-in-an-early-stage-startup-for-frontend-team-a7a5e8ee9f4b)

### 3. Kampvuursessie

https://github.com/aliceafanasieva/your-tribe-for-life-squad-page/blob/main/LEARNINGS.md#kampvuursessie

#### 4. Voorbereiding retrospect

Voor vrijdag hebben jullie:

1. Squadpage, alle DoD's zijn afgevinkt
2. Visitekaartje, alle DoD's zijn afgevinkt
3. Kampvuursessie gedaan en verwerkt
4. Portflow bewijslast klaar om te mappen op indicatoren

Portflow bewijslast:

1. S13: Teamafspraken
2. S13: Projectboard
3. S13: REST verbinding naar de directus API
4. S13: Code & Design Review W1 _(optioneel)_
5. S13: Creative coding & inspiratie
6. S13: User stories in het project board
7. S13: Code & Design Review W2
8. S13: Layout & Components
9. S13: Kampvuursessie

## Leervragen

Zet de antwoorden in je learning journal.

Hoe verschilde jouw conventies met die van de FDND Agency?
Welke conventies zou je willen toevoegen aan die van de FDND Agency? Schiet ook een issue in s.v.p.
Wat waren de belangrijkste punten uit de kampvuursessie?

# 24-09-2025

Vandaag was het eerste afspraak met de opdrachtgever Embassy of the Free Mind, we hebben een debriefing geschreven.

# 26-09-2025

Met mijn team een code design review gedaan en review gegeven voor de projectinrichting aan teams AD Connect en Foodguard.

# 29-09-2025

## Werkcollege styleguide

### Opdracht 1

Experimenteren met verschillende color.

<img width="998" height="733" alt="image" src="https://github.com/user-attachments/assets/723ea18a-afb5-4e7f-a50e-031730832805" />

<img width="998" height="733" alt="image" src="https://github.com/user-attachments/assets/463e1fd7-090d-437d-9dc6-fdb6fcba2254" />

## Styleguide gemaakt

Ik heb dit styleguide ontworpen voor de redesign van Embassy of the free mind:

<img width="1621" height="6760" alt="style guide" src="https://github.com/user-attachments/assets/4989f0ca-9a04-4aa8-ac5e-506084629afd" />

# 1-10-2025

## Mentor

Ik was vandaag een mentor bij eerstejaars, hoe de les ging is beschreven hieronder:

https://github.com/aliceafanasieva/mentor/blob/main/README.md#1-10-2025

### Werkcollege - Project inrichting

Over projectmethodiek, standup en de Scrum methode.

Bij elk project rijst dezelfde vraag: hoe organiseer je het werk zodat iedereen weet wat er moet gebeuren, wanneer het klaar moet zijn, en hoe je samen waarde oplevert?
Daar zijn door de jaren heen verschillende projectmethodieken voor ontwikkeld: van klassieke methodes tot moderne methodes.
Vandaag onderzoeken wij de verschillende methodieken die er bestaan, daarna zoomen we in op Scrum, omdat we die binnen FDND gebruiken.

#### Projectmethodieken

1. Projectmethodieken
   In de wereld van webdevelopment is Scrum één van de meest gebruikte methodieken. Het is populair omdat het teams helpt wendbaar te blijven, snel waarde te leveren aan opdrachtgevers, en continu te verbeteren. Maar welke zijn er eigenlijk nog meer.

#### 🛠️ Opdracht 1 (30 min)

Doe deze oefening op het whiteboard.

<img width="1011" height="642" alt="image" src="https://github.com/user-attachments/assets/123f3890-7a10-4080-aa60-141be9a91d93" />

**Welke verschillende projectmethodieken zijn er voor webprojecten?**

- Agile: vrij universeel methodiek - Backlog, Ready, In Progress, Done.
- Waterval: goed voor kleine, overzichtelijke projecten. Best wel lang process, je werkt in fases, heel lang per een fase voordat je naar andere gaat. Is wel gevoelig, omdat het moeilijk te itereren is. De afzonderlijke taken worden in afhankelijkheden opgesplitst.
- Prince 2
- Scrum: meest gebruikte, flexibel. Backlog, Stand-ups, Retrospects, Sprints, Continuous integration. goed voor kleine, overzichtelijke projecten. Sprints duren één tot twee weken per keer en worden georganiseerd met teams van 10 of minder.
- Kanban
- Six Sigma

**Wat is de meest gebruikte? **

Agile wordt vaak gebruikt bij software development projecten, dat gebruiken wij vaak in projecten bij FDND.

**Wat denk je dat de 'beste' methodiek is en waarom?**
Scrum, omdat het een duidelijke projectopzet heeft.

#### 🛠️ Opdracht 2 (30 min)

Doe deze oefening op het whiteboard.

Wat zijn de stappen in de Scrum sprint planning?
Welke doen jullie al met je team en welke missen?
Zoek uit welke andere onderdelen van Scrum je al doet.

#### 🛠️ Opdracht 3 (10 min)

Binnen SCRUM zijn er ook verschillende rollen in het team.

Doe deze oefening op het whiteboard.

Zoek op wat de verschillende rollen zijn in Scrum
Verdeel de rollen binnen het team 3. Stand-up
Een belangrijk onderdeel van samenwerken is elkaar op de hoogte houden. Scrum heeft hier een manier voor bedacht.

#### 🛠️ Opdracht 4 (5 min)

Zoek op hoe een standup werkt. Schrijf de stappen op het whiteboard.
Doe een standup met je team, waar een docent bij is.
Extra bronnen
Projectmethodieken @ Asana

💪 Extra uitdagingen
Zet nog een extra onderdeel van Scrum in, zoals een refinement
✒️ Leervragen
Zet de antwoorden in je learning journal:

Wat zijn de onderdelen van de Scrum methodiek?
Hoe helpt Scrum jou in projectmanagement?
Welke andere methodiek zou je willen uitproberen?
Wat is een sprint 0?

# 3-10-2025 Code design review week 2

## Design critique

Jullie hebben met je team een styleguide opgezet en designs gemaakt of gekregen. Vandaag gaan jullie bij elkaar een Design Critique doen op basis van een aantal principes van Dieter Rams's "Good Design":

#### 4. Good design makes a product understandable

It clarifies the products structure. Better still, it can make the product talk. At best, it is self-explanatory.

#### 8. Good design is thorough down to the last detail

Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the user.

#### 10. Good design is as little design as possible

Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity.

### Opdracht

Ga met maximaal 6 mensen van verschillende projecten aan een tafel zitten
Zoek meer informatie over principes 4, 8 en 10 van Good Design van Dieter Ram

Presenteer elk je design (ook al is het van je opdrachtgever), vertel waarom je bepaalde keuzes bewust wel en niet hebt gemaakt
Als luisteraars geef je tips en tops op basis van principe 4, 8 en 10. Ondervraag ook waar je nog geen argumentatie over hebt gehoord.
Iemand in de groep maakt een foto van degene die presenteert (heb je nodig voor de checkout)
💡 ProTip: Neem de tips en tops mee in issues op je projectboard

#### Foto van presentatie

![IMG_1647 2](https://github.com/user-attachments/assets/7c9d1771-1106-4024-b7e9-d37aca8167dd)


# 6-10-2025

## Werkcollege - Sveltekit-principes

https://github.com/fdnd-task/lose-your-head-the-client-case/blob/main/docs/sveltekit-principes.md#sveltekit-principes

### Opdracht 1

<img width="618" height="486" alt="image" src="https://github.com/user-attachments/assets/d96e7e3a-9387-4af7-a253-cd2e72ec1116" />

Wij hebben meerdere routes aangemaakt, deze staat verwerkt in issue #93 in projectboard: https://github.com/fdnd-agency/embassyofthefreemind/issues/93#issuecomment-3371828344.

### Opdracht 2

#### Principes:

- scoped css: voor betere leesbaarheid van css, sveltekit zorgt ervoor dat het scoped wordt. Heeft direct relatie met frontend van jouw applicatie
- componenten gebruiken
- bindable() - properties die je geeft aan childcomponent component een koppeling geven aan andere variabele in andere plek. Reactive.

#### Gist

Ik heb twee Github gist's aangemaakt:

<img width="1470" height="807" alt="image" src="https://github.com/user-attachments/assets/29ac1250-52f9-4b61-8e96-526ce43ac72d" />

1. SvelteKit layouts: één plek voor gedeelde structuur : https://gist.github.com/aliceafanasieva/20c3a0c2ca140af9a577b5fc732645fe
2. SvelteKit componenten: herbruikbare stukken code : https://gist.github.com/aliceafanasieva/2986d07e551d92bd54a756413291c4c1

### Leervragen

- Welke stappen neem je om een project in SvelteKit op te starten?
- Hoe kan je AI gebruiken om principes en best-practices van een framework te ontdekken?
- Welke SvelteKit principes en best-practices heb je geleerd te gebruiken?

# 8-10-2025

## Wat moet ik vandaag doen?

### Wrapup voor de sprintreview met de opdrachtgever

#### Checklist:

- Readme klaarzetten
- Projectboard klaarzetten
- Een agenda (plan) maken voor de sprintreviews (met eerstejaars)

## Wat heb ik gedaan?

### Mentor

Vandaag ben ik een mentor voor eerstejaars studenten geweest. Ik heb hun geholpen met een goed readMe schrijven, en geoefent met presenteren van hun werk voor de sprintreview met de opdrachtgever.

### Wrapup & Presentatie

Ik heb ook zelf tijdens de wrapup van sprint 14 mijn werk (redesign en styleguide) gepresenteerd aan de klas, feedback gegeven (vanuit verschillende rollen als luisteraar) en feedback gekregen.

### Leervragen

1. Hoe heb jij je voorbereid op de sprint review?
2. [Voor na de sprint review] Hoe heeft de sprint review voorbereiding geholpen?
3. Wat zou je de volgende keer anders doen?

# 13-10-2025

## Sprintplanning Choices, choices

Link naar document: https://github.com/fdnd-task/choices-choices-the-tech-stack/blob/main/docs/sprint-planning.md#sprint-planning

#### Sprintplanning opdracht

Het opdracht was om een planning voor aankomende sprint op het whiteboard te tekenen:

<img width="1008" height="726" alt="image" src="https://github.com/user-attachments/assets/a270f83b-0765-4233-bf3a-e37f1f0856a0" />

### Kiezen van techstack

Ik moet een headless CMS en een framework kiezen. Verder wordt dit opdracht beschreven in deeltaak "Justify your Tech Stack": https://github.com/fdnd-task/choices-choices-the-tech-stack/blob/main/docs/justify-your-techstack.md#justify-your-techstack.

#### Gekozen framework: Nuxt.js

Waarom ik dit framework heb gekozen:

- Nuxt is het Vue-framework voor fullstack en JAMstack-ontwikkeling.

- Het combineert server-side rendering (SSR), static site generation (SSG) en client-side rendering (CSR) in één framework.

- Steeds meer bedrijven gebruiken Nuxt in productie, waardoor kennis ervan goed aansluit bij de arbeidsmarkt voor frontenders (wat mij kan helpen bij stage zoeken).

- Het is een framework dat developer experience centraal stelt (auto-imports, directory-based routing, composables, hybrid rendering, enz.).

- Ondersteunt TypeScript, composables, API-routes en integratie met headless CMS’en zonder extra setup.

## 11ty project opdracht

Ik heb een git repository aangemaakt om 11ty framework uit te proberen: https://github.com/aliceafanasieva/Made-with-eleventy-blog. Ik ga een tutorial volgen en op dit manier framework onderzoeken voor deeltaak "Justify your tech stack": https://github.com/fdnd-task/choices-choices-the-tech-stack/blob/main/docs/justify-your-techstack.md#aanpak.

### Leervragen

- Welke stappen neem je om een nieuw framework uit te proberen?

- Bij wat voor type project zou je kiezen voor 11ty?

- Hoe heb je ervoor gezorgd dat je met je team weet welke stappen jullie vandaag nemen?

## Portfolio workshop met Cyd - week 1

Not a designer, behalve voor eigen portfolio.

### Thema: Inspiratie zoeken

<img width="1008" height="726" alt="image" src="https://github.com/user-attachments/assets/9b22966b-af1a-4bf7-9839-5c2b9d2f0b25" />

Waarmee Cyd begint is inspiratie zoeken: screenshots maken van mooie momenten en trukjes dat zij ziet op sociale media - Instagram, Pinterest etc.

#### Algemene moodboard

<img width="1119" height="724" alt="image" src="https://github.com/user-attachments/assets/05aff641-36f2-4bef-83d0-2875732e8753" />

#### Gegroepeerde moodboard

<img width="1446" height="415" alt="image" src="https://github.com/user-attachments/assets/c8c1144b-c64d-4718-868d-8ff977ec304c" />

#### Eerste concept

<img width="599" height="425" alt="image" src="https://github.com/user-attachments/assets/67dfa3c1-1ed0-4c51-950a-50a675cc65fe" />

# 14-10-2025

## Wat heb ik vandaag gedaan?

### Doorwerken aan 11ty tutorial

#### Vandaag deze commits gemaakt:

- be70172 https://github.com/aliceafanasieva/Made-with-eleventy-blog/commit/be70172e81b4ec3276f1e737f68934ae6dc3ba82

### Component "menu navigation bar" gemaakt - opdrachtgever website

#### Vandaag deze commits gemaakt:

- 167a4e2 https://github.com/fdnd-agency/embassyofthefreemind/commit/167a4e2ea9c6e9a2c5e30af6506bcbdafd33fe40
- 53e8797 https://github.com/fdnd-agency/embassyofthefreemind/commit/53e87971546a6f54093554df2c62f358ad2edea1

# 15-10-2025

### Mentor

Ik was vandaag en mentor voor eerstejaars studenten, verder beschreven hier: https://github.com/aliceafanasieva/mentor/blob/main/README.md#15-10-2025

### Projectinrichting: over reviews, refinement en scrummen

### Opdracht Mentorschap

Link naar .md: https://github.com/fdnd-task/choices-choices-the-tech-stack/blob/main/docs/mentor.md#mentorschap

#### 1. Doe Retromat #121 op je mentor skills

**'The Good':** 
Ik documenteer de lessen, en doe actief mee met de opdrachten die de eerstejaars uitvoeren. Ik leg dingen uit wanneer ze vragen hebben, stel altijd vragen om te checken of ze alles begrijpen, en probeer zo open mogelijk te zijn.

**'The Bad':** 
Ik heb ook een stuk social anxiety, wat het begeleiden en praten moeilijk maakt soms - ik moet mezelf altijd erg overwinnen om heel actief en vriendelijk te zijn, dat kost veel energie, maar ik doe echt altjid mebest. Soms merk ik dat studenten niet zelf de leertaak lezen en daardoor vragen stellen die al in de opdracht staan. Wanneer ik vraag “Heb je hulp nodig?” of “Waar ben je mee bezig?”, krijg ik vaak korte antwoorden en weinig samenwerking terug. Daarnaast schrijf ik nog te weinig issues voor de eerstejaars. Soms weet ik het antwoord op een vraag niet direct (komt niet vaak voor), maar dan zoek ik het samen met de student op — dat werkt meestal goed.

**'The Ugly'**: 
Het is lastig als studenten geen motivatie tonen. Soms voelt het alsof ik hun werk probeer over te nemen, in plaats van dat ze zelf verantwoordelijkheid nemen. Dit maakt het moeilijk om de juiste balans te vinden tussen helpen en laten leren.

#### 2. Praat over de uitkomsten met de mensen aan je tafel
Tijdens het gesprek met mijn tafelgenoten kwamen we tot de conclusie dat veel mentoren tegen hetzelfde probleem aanlopen.

#### 3. Schrijf twee verbeterpunten op het white board die je aankomende twee weken op gaat pakken
- Meer issues schrijven en ook controleren dat die issues worden verwerkt (followup);
- Studenten meer te motiveren om les te volgen;

#### Hoe gaat reflecteren op je mentor rol je helpen met het verbeteren van je skills?
Door te reflecteren op mijn mentorrol zie ik beter waar mijn sterke en zwakke punten liggen, wat ik nog misschien moeilijk vind om te doen eigenlijk. Reflectie helpt me om beter te begrijpen wat eigenlijk beter kan en wat ik ermee kan doen. 

#### Wat maakt een goede mentor?
Een goede mentor is iemand die goed betrokken is bij de les, luistert, geduldig is en motiveert tot zelf nadenken. Niet iemand die alleen alle antwoorden geeft, maar iemand die de juiste vragen stelt en studenten motiveert om het zelf het achter te halen. 

#### Hoe zie jij je in de toekomst developers opleiden?
Ik ga mebest doen om een waardevolle begeleider te worden voor toekomst developers en mijn ervaring deling, hopelijk ben ik goed op weg. 

<img width="1098" height="815" alt="image" src="https://github.com/user-attachments/assets/1799d0f9-ac09-4385-9d92-47bac4494b6d" />

### Pull requests

Ik heb een pull request gemaakt voor NavBar component. Link naar mijn pullrequest: https://github.com/fdnd-agency/embassyofthefreemind/pull/134

Ik heb ook voor de pull request van mijn teamgenoot een review geschreven: https://github.com/fdnd-agency/embassyofthefreemind/pull/133#issuecomment-3413017954

# 17-10-2025

### Code/Design-review week 1

We gaan code revieuwen van twee andere teams.

De reviews heb ik gesschreven als issues en gezet in de projectboard van andere teams:

- Designing for Recognition: https://github.com/fdnd-agency/designingforrecognition/issues/70
- Nebula: https://github.com/fdnd-agency/nebulaxplorer/issues/79#issue-3526200424

# 25-10-2025

## Doelen voor vandaag:

### Portfolio design 

- [x] Werk drie verschillende concepten uit voor je gehele homepagina
- [x] Dupliceer elk uitgewerkt concept en probeer een andere kleuren samenstelling (tenminste 6 artboards dus)
- [x] Noteer voor jezelf welke "vibes" je krijgt van je verschillende concepten, past dat bij wat je wil uitstralen aan bedrijven?

Link: https://www.figma.com/design/lmaw4cYMmmLSvoNZB63Qvo/Portfolio-FDND--Community-?node-id=1-2&t=JwHoULdqRAKB77B5-1

#### Drie concepten

<img width="947" height="683" alt="image" src="https://github.com/user-attachments/assets/214f698c-10bc-49d2-9b51-a00c2f987c1b" />

#### Drie verschillende kleuren samenstelling voor elk:

<img width="1429" height="426" alt="image" src="https://github.com/user-attachments/assets/e879e495-6247-4339-8de7-3898018d1f7e" />

### Redesign navmenu

- [ ] Editen van navmenu bar, na de feedback van opdrachtgever.

### Hero component

- [ ] Toevoegen van hero component

### 11ty bestuderen

- [ ] De tutorial van 11ty afmaken en de bevindignen documenteren (hoe ziet DX, UX etc eruit? Is het makkelijk in gebruik?)

# 27-10-2025

## Workshop Next.js en Vue door Chanel

Next.js is een sframework om React heen.

#### Waarom React wordt gebruikt?

Heel wijd gebruikt, kennis van React wordt vaak gevraagd op de arbeidsmarkt. Je gebruikt ts (Typescript) zodat je in de editor correcties kan krijgen voor onjuiste code.

React, Vite, Typescript, Router gebruik je dus samen.

#### Waarom Next.js?

- Battle tested: veel kenniserover, wijd gebruikt
- Grote community: forums gebruiken als je vragen hebt over framework, veel tutorials
- Meer features dan in bijv Sveltekit

In Next.js splits je de code in twee delen: UI en Core.
Dus de herbruikbare componenten en UI en dan de servers etc in Core.

Voor documentatie: https://nextjs.org/docs.

### Next.js installatie

Nu ga ik een Next.js installeren in aparte repository blog, zoals ik het heb gedaan bij 11ty tutorial vorige keer.
Link naar repository: https://github.com/aliceafanasieva/Made-with-nextjs-blog

```

npx create-next-app@latest my-app --yes
cd my-app
npm run dev

alisa@MacBook-Air-Alisa my-app % npx create-next-app@latest
✔ What is your project named? … my-app
✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use React Compiler? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/alisa/Documents/GitHub/Made-with-nextjs-blog/my-app/my-app.

```

## Portfolio sessies met Cyd 2/4

Grids: gebruik consistentie in margins en andere groottes (12px, 16px, 18px etc) of rem (16px = 1rem)
Letter spacing: font afhankelijk, maakt je font beter of beter leesbaar.

#### Huiswerk

1. Werk je home- en detailspagina uit:
   - alles netjes uitlijnt.
   - je een grid gebruikt.
   - je je font groottes & kleuren defineert.

2. Begin met het schrijven van de content van je website:
   - Voor wie maak je een portfolio? Voor stagebedrijven, andere developers, om te experimenteren?
   - Kies hierbij een duidelijke tone of voice, en wees consistent.
   - De web wereld is niet formeel, ik raad het gebruik van u en te nette taal af
   - Bepaal welke projecten "portfolio waardig" zijn volgens jou
   - Dingen die bedrijven graag zien op portfolio:
   * Projecten van buiten de opleiding ("passie" projecten of freelance werk)
   * Experimenten met code (Codepens of repos bijvoorbeeld)
   * Persoonlijk tintje (leuke hobby's bijv. foto van jezelf ofz)

# 29-10-2025

### Opdracht: Mentor feedback 

#### 1. Je bent één keer per week aanwezig op het afgesproken moment
**Mijn positie:** Ik ben er altijd op woensdag, ik was alleen 1 keer ziek.
**Feedback van mentees:** Ze ervaren mij als “actief”, dus ze merken mijn aanwezigheid op.
**Gewenste positie:** behouden zoals nu, aanwezig (en niet ziek zijn).
**Verbeterpunt:** aanwezig blijven en meer feedback krijgen volgende keer.

#### 2. Je stapt actief op eerstejaars studenten af om ze te helpen
**Mijn positie:** ik stel regelmatig studenten vragen of ze de leertaak begrijpen, om te checken of ze hulp nodig hebben.
**Feedback van mentees:** ze vinden me "actief", dus ik een goed betrokkenheid bij les.
**Gewenste positie:** ik kan nog steeds meer actief zijn - misschien ook naar andere tafels komen dan waar ik zit, of meer aanleidende vragen te stellen.
**Verbeterpunt:** minder snel zelf opdracht maken voor eerstejaars, eerst observeren en vragen stellen (“Hoe denk jij dat je dit kan oplossen?”) voor hun ook om zelfstandig bezig te zijn.

#### 3. Je luistert, vat samen en vraagt door bij het helpen van studenten
**Mijn positie:** ik probeer goed te luisteren en samen met studenten naar oplossingen te zoeken als ze tegen een probleem komen. Soms weet ik zelf niet meteen het antwoord, maar dan ga ik mee zoeken. 
**Feedback van mentees:** ze benoemen dat ik uitleg geef en actief ben, dus het is ook denk ik goed. 
**Gewenste positie:** iets meer doorvragen zodat studenten zelf tot inzicht komen.
**Verbeterpunt:** vaker samenvatten wat de student zegt.

#### 4. Je bereidt de workshops voor en helpt de studenten bij de opdracht die ze krijgen
**Mijn positie:** ik probeer altijd voor te bereiden voor de lessen en opdrachten de dag daarvoor door te lezen, en doe altijd zelf mee aan de opdrachten.
**Feedback van mentees:** ze leren wel aantal dingen van mij over kleuren en Figma.
**Gewenste positie:** nog beter voorbereiden om hun ook meer te leren over dingen die goed aan de in het les besproken thema aansluit, maar nog niet was behandeld. En natuurlijk goed aansluit op hun nieau.
**Verbeterpunt:** nadenken over bronnen die ik kan delen met eerstejaars, dat hun kan helpen met de stof dat ze doorlopen. Voorbereiden wat van extra dingen ik nog bij kan leren aan tijdens de les behandelde stof. 

#### 5. Je beantwoordt vragen over HTML, CSS en JS
**Mijn positie:** ik help wel bij de codevragen, en als ik iets niet weet, zoek ik het samen met de student op.
**Feedback van mentees:** niemand gaf er kritiek op, maar ze schreven daar ook niet over.
**Gewenste positie:** eventueel meer proberen te kijken naar hun code. 
**Verbeterpunt:** meer kijken naar code van studenten en bronnen zoeken die hun met HTML CSS en Javascript kunnen helpen.

#### 6. Je doet code/design reviews op leertaken
**Mijn positie:** ik geef wel feedback aan code en design, maar ik heb geen code/design review gedaan omdat die meestal op vrijdag is. Ik heb wel voorbereiding op de sprintreview met opdrachtgever gedaan met eerstejaars, waarbij ze mij hun eerste werkende website en designs lieten zien, en toen heb ik ook feedback gegeven over wat ze nog evetueel kunnen verbeteren voor de sprint review.
**Feedback van mentees:** ze hebben gezegd over kleuren en design review.
**Gewenste positie:** meer richting regelmatige korte feedbackmomenten en code design reviews.
**Verbeterpunt:** structureel issues aanmaken met specifieke feedback met code/design kritiek.

#### 7. Je geeft feedback in issues van eerstejaars
**Mijn positie:** ik heb wel feedback gegeven aan eerstejaars in issues. 
**Feedback van mentees:** geen directe opmerkingen hierover.
**Gewenste positie:** actiever worden en meer feedback gestructureerd geven in issues.
**Verbeterpunt:** meer issues gaan schrijven en volgende les checken of studenten de feedback opvolgen.

# 30-10-2025

### Sprint review met de opdrachtgever

Wij hebben feedback gekregen van de opdrachtgever (Chiara) uit Embassy of the Free mind.

#### Belangrijkste punten voor volgende sprint:

- Fix components when adjusting website

- Remove logo from menu bar

- Make the height of the menu bar less

- Design elements (Recep took notes!)

- Add Hamburger menu

- Add Partners

- Think about the slideshow content

# 31-10-2025

## Retrospect sprint 15

Projectboard klaar, portflow is vol, alles klaarzetten voor assesments.

## Presentatie techstack

# 1-11-2025

## Nuxt leren

### Nuxt fundamentals

#### Set up Nuxt

commando:

```
npx create-nuxt-app <projectname>

Which package manager would you like to use?
npm

npm install

npm install @nuxt/content      ### voor markdown bestanden inlezen

```

Markdown bestanden moeten in de content folder zijn.

#### Layout

Voor inzetten van header en footer (of andere universele dingen die op elk pagina moeten komen) gebruik je default.vue bestand. Ik maak een folder "layouts".

Code zet je binnen <template> tag.

Wat heel interessant aan Nuxt is, dat de html tags erg overzichtelijk en logisch eruitzien:

<img width="602" height="192" alt="image" src="https://github.com/user-attachments/assets/9bf2dd74-26f6-4276-8a20-d886cf8a433f" />

NuxtLink is een speciaal component van Nuxt (en Vue Router) dat je gebruikt voor navigatie tussen pagina’s binnen je app, zonder dat de hele pagina opnieuw geladen wordt - **dat zorgt voor veel sneller en beter UX.**

### Universal CSS

Je kan universele CSS bestand met global styles, dat je wilt gebruiken voor de hele website, zetten in twee plekken - Assets of Static. Er zijn wel verschillen tussen.

#### CSS in Assets

1. Maak een css bestand aan in assets
2. Declare dit in nuxt.config.js:
   `css: ['@/assets/css/main.css']`

#### @nuxt/fonts package

Een package van nuxt voor jouw eigen fonts inladen.
In terminal:
`npx nuxi@latest module add @nuxt/fonts`

In nuxt.config.js komt dit staan in modules:
`modules: ['@nuxt/content', '@nuxt/fonts']`

### Headless CMS - Sanity

#### Account aanmaken en een project starten

<img width="1470" height="832" alt="image" src="https://github.com/user-attachments/assets/413fd2a2-8056-46cf-9f36-e3023ed352c6" />

Dan in VSCode terminal:

```
mkdir sanity

npm create sanity@latest

Please log in or create a new account GitHub

Opening browser at https://api.sanity.io/v1/auth/login/github?type=token&label=MacBook-Air-Alisa+%2F+MacOS&origin=http%3A%2F%2Flocalhost%3A4321%2Fcallback

✓ Login successful
✓ Fetching existing projects

? Create a new project or select an existing one I-love-web (n6bndiyp)
? Select dataset to use production
? Project output path: /Users/alisa/Documents/GitHub/i-love-web/sanity
? Select project template Clean project with no predefined schema types
? Do you want to use TypeScript? No
✓ Bootstrapping files from template
✓ Resolving latest module versions
✓ Creating default project files
? Package manager to use for installing dependencies? npm
⠦ Running npm install --legacy-peer-deps

```

<img width="1165" height="702" alt="image" src="https://github.com/user-attachments/assets/654c6244-a150-4968-912d-1986ebd5f4df" />

Om in te lezen:

```
npm install @sanity/client

```

maak een lib/sanity.js aan en zet erin:

```

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'n6bndiyp',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

```



# 10-11-2025

## Vandaag op agenda

### Sprintplanning

In de sprint Don't Repeat Yourself ligt de focus op het hergebruik van code en ontwerpelementen door middel van een component library. Je leert hoe je herbruikbare stukken code op een systematische manier ontsluit zodat jij en jouw mede frontenders ze kunnen gebruiken in andere projecten.

### Component library



### Portfolio sessies met Cyd 3/4

Feedback: niet uitlijnen op gap van grid, verder goed bezig en mooi ontwerp gemaakt. 

#### Prototyping

Kan op code pen, bijvoorbeeld een element uit design prototypen veilig - iets met 3d bijvoorbeeld of scroll driven animatie. 

Codepens van Cyd: https://codepen.io/Sidstumple en van Jhey Thompkins https://codepen.io/jh3y.

#### Waarom prototypen?

* testen of je idee mogelijk is voordat je all in gaat bouwen

#### Waar ga je je website in bouwen?
Niet alleen de content op je website maar ook het framework/de code die je gebruikt is op zichzelf ook een uihangbord voor je capaciteiten. Dus als jouw stagebedrijf graag Nuxt wilt zien, dan kan jij een Nuxt framework gebruiken om jouw website te maken.
GSAP/Framer motion, een plek hebt waar je jouw experimenten kan laten zien. 


#### Voor de volgende sessie:

#### 1. Bedenk waar je je website in gaat bouwen
- Kies een framework waar je op gaat werken
- Kies hoe je je data gaat inladen

#### 2. Maak prototypes

#### 3. Deel prototypes
- Deel je content
- Binnen de squad, op Linkedn, op Instagram etc.
- Handig om in het Engels te schrijven:
  - Video/screenshot van je werk
  - Een artikel dat je hebt geschreven (docenten lezen met liefde je artikel voordat je het deelt)


# 1-12-2025

## User needs - Creative coding
Deze sprint 3 keer in vorm van coding spike verschillende dingen uitproberen met GSAP en trelte om gebruiker te verrassen met bijzondere interacties. 

### To do list:
- [x] Bepalen wat je aankomende sprint gaat leren
- [x] Bepalen wat dit sprint moet gebeuren
- [x] Wat ga je leren in GSAP?
- [x] Een branch maken voor creative coding sprike

Leren GSAP zo ver je kan:

https://gsap.com/

Met conceptroulette een concept kiezen:

https://conceptroulette.fdnd.nl/#

en de volgende stappen nemen: 

1. Maak een branch voor jouw experiment en kies daarvoor een goede naam (dus niet: branch-elliot-alderson)
2. Maak een tijdsinschatting en schiet issues in voor je taken (lees even verder)
3. Doe vooronderzoek en bepaal de elementen van jouw stijl. Gebruik screenshots of Pinterest om een verzameling te maken. Neem een collage op in de betreffende issue.
4. Schets een wireflow voor jouw concept, gebruik eventueel de morphologische kaart. Bedenk welke interacties, animaties en geluidsondersteuning je nodig hebt. Neem jouw schetsen op in 5. de betreffende issue.
6. Maak een breakdown schets waarin je onderzoekt hoe je jouw concept met HTML, CSS en Javascript kunt implementeren.
7. Bespreek jouw schets met teamgenoten of docenten. Neem ook jouw breakdown schets op in de betreffende issue.
8. Implementeer jouw concept in HTML/CSS/JS en Sveltekit. Beschrijf in de betreffende issue hoe je de belangrijkste dingen voor elkaar krijgt.
9. Test uitvoerig en beschrijf verschillen in performance in de betreffende issue.
10. Voer een pull-request uit waarin je de belangrijkste zaken uit bovenstaande issues opneemt. (nb. voer het PR nog niet door!)
11. Publiceer jouw project via Vercel of Netlify naast de bestaande site (je selecteert dan jouw aparte branch).
12. Laat je concept testen door de tribe bij een user-test tijdens de Design & Code review! Neem opmerkingen op in het pull-request. Voer opgedane inzichten door en voeg die als commits toe aan het pull-request.

Mijn nummer 1:

<img width="1144" height="206" alt="image" src="https://github.com/user-attachments/assets/2ebc534a-074c-412f-8fbf-5ad2147a5605" />

Ik ga mijn coding sprike in volgende issue (en bijbehorende subissues uitwerken:

https://github.com/orgs/fdnd-agency/projects/76/views/9?layout=board&pane=issue&itemId=142351247&issue=fdnd-agency%7Cembassyofthefreemind%7C188

# 3-12-2025

## Design CCS Week 1

Ik heb verschillende design variaties gemaakt in Figma: 
<img width="1141" height="728" alt="image" src="https://github.com/user-attachments/assets/2819585f-c79a-4f6d-888d-7e0ce6c096bc" />

Verwerkt in issue:
https://github.com/fdnd-agency/embassyofthefreemind/issues/196#issuecomment-3606681003. 

This is the design I've decided to keep and animate: 

<img width="1431" height="657" alt="Image" src="https://github.com/user-attachments/assets/267fb957-bcff-4b22-a716-7e40e8985cf7" />

# 4-12-2025

Ik heb vandaag gewerkt aan GSAP animatie. Daar heb ik een branch voor aangemaakt en issues in mijn projectboard. 

## GSAP animatie 

Voor animatie heb ik GSAP set fromTo en timeline gerbuikt. 

### Bronnen:

Ik heb deze bronnen gerbuikt bij het maken van mijn GSAP animatie:
[GSAP fromTo](https://gsap.com/docs/v3/GSAP/gsap.fromTo()/)
[GSAP Timeline](https://gsap.com/resources/getting-started/timelines/)

### fromTo

Maak een schommelende animatie voor kruisje detail.

commit https://github.com/fdnd-agency/embassyofthefreemind/pull/203/commits/fb88978157e96b99fc5c50bad41b23ee0f1f94b6

```
onMount(() => {
    if (!leftCross) return;
		gsap.set(leftCross, {
			transformOrigin: '50% 0%',
			rotation: -20
		});
  });
  $: if (isSidepanelOpen && leftCross) {
    if (!crossTl) {
      crossTl = gsap.fromTo(leftCross,
			{ rotation: -20 },
      {
        rotation: 20,
        duration: 0.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        transformOrigin: '50% 0%'
      }
    );
    }  else {
    crossTl.restart(); 
		}
	} else if (crossTl && leftCross) {
		crossTl.pause();
		gsap.set(leftCross, { rotation: 0 });
	}
```

### Timeline

Commit https://github.com/fdnd-agency/embassyofthefreemind/pull/202/commits/1a6b357d7f94c759478f3dd24fd7ff556f5154b3

```
	$: if (isSidepanelOpen && leftTop && leftCross && rightBottom && frameEl && bottomDecor && topBow && ladyLeft && ladyRight && navEl && footerEl) {
    if (!ornamentsTl) {
      ornamentsTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      ornamentsTl.from([leftTop, leftCross], {
        y: -80,           
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.5,       
      });
      ornamentsTl.from(
        rightBottom,
        {
          y: 80,          
          opacity: 0,
          duration: 0.8
        },
        '-=0.5'         
      );
			
			ornamentsTl.from(
      frameEl,
      {
        y: 60,
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      '-=0.47'
    	);
			ornamentsTl.from(
      topBow,
      {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3' 
    );
    
    ornamentsTl.from(
      bottomDecor,
      {
        scaleX: 0,
        opacity: 0,
        duration: 0.6,
        transformOrigin: '50% 50%', 
        ease: 'power2.out'
      },
      '-=0.5'
    );
		ornamentsTl.from(
			ladyLeft,
			{
				x: 40,      
				opacity: 0,   
				duration: 0.8,
				ease: 'power2.out'
			},
			'-=0.2'
		);
		ornamentsTl.from(
			ladyRight,
			{
				x: -40,       
				opacity: 0,
				duration: 0.8,
				ease: 'power2.out'
			},
			'-=0.75'        
		);
		ornamentsTl.from(
      navEl,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.1' 
    );
    ornamentsTl.from(
      footerEl,
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      },
      '>-0.1' 
    );
    } else {
      ornamentsTl.restart();
    }
  } else if (ornamentsTl) {
    ornamentsTl.pause(0);
  }
```

https://github.com/user-attachments/assets/01995532-e271-4885-a021-f05e4c51c609


# 5-12-2025

## Code-design review

Ik heb vandaag code-design review gedaan van mijn creative coding spike week 1. Ik moest mijn CCS laten zien en uitleggen wat ik heb gedaan, en de CCS's van mijn klasgenoten bekijken en iedereen moest drie beste uitkiezen.


Mijn CCS was een van het vaakst gekozen spikes, en daar ben ik best trots op.

Ik heb ook samen met mijn klasgenoot Amber een review geschreven voor Creative coding spike 1 van Anouk en haar methode proberen te recreeren in Codepen:

[Link naar de CodePen](https://codepen.io/ambersr/pen/jEqQWpK?editors=1100)

### Drawing SVG animation van Anouk
 
Het is ons opgevallen dat Anouk voor de animatie 2 GSAP plugins gebruikt: DrawSVGPlugin en MotionPathPlugin.
Ook gebruikt ze erg weinig GSAP en CSS om de SVG te animeren. We hebben zelf ook geprobeerd om haar code recreëren in CodePen.
 
#### Hoe toepassen op je eigen project?

1. Plugins installeren

```
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
```

2. SVG met paths implementeren in de HTML (bijvoorbeeld uit Figma of Illustrator) *let erop dat je letters goed op volgorde implementeerd.

3. Voeg aan elke path een class met 'draw-me' toe geef die class een fill: none; mee.
 
``` 
.draw-me {
   fill: none;
}
```
 
4. Voeg een GSAP toe. Selecteer de class 'draw-me' en maak gebruik van de timeline.
 
 ```
// Voer deze code uit zodra de component in de DOM staat / bijgewerkt is
    $effect(() => {
        // Weten welke plugins je binnenhaalt
        gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);
        // Alle paths ophalen met de class ".draw-me"
        let paths = document.querySelectorAll(".draw-me");
        // GSAP timeline maken
        const tl = gsap.timeline();
        // Animeer de paths met class="draw-me"
        tl.from(".draw-me", {
            duration: 1.5,
            drawSVG: 0,
            stagger: .2, 
            ease: "power3"
        });
    });
```

## Feedback verwerken

Ik heb ook zelf feedback gekregen voor mijn CCS van week 1:

#### 1. Werkt niet responsive (voor mobile)

<img width="846" height="75" alt="image" src="https://github.com/user-attachments/assets/4a3e4f28-403b-4d67-91c0-8a64da0cbe29" />

#### 2. De menu button een accessible naam geven

<img width="846" height="176" alt="image" src="https://github.com/user-attachments/assets/bc5b02f3-2647-4409-977e-bcc6f86bd047" />

#### 3. Niet mooi op mobile en tablet

<img width="1015" height="765" alt="image" src="https://github.com/user-attachments/assets/f4a9524c-42ac-4c08-92d6-61ac05a92e3b" />

Bijbehorende issues aangemaakt in projectboard: 

# 7-12-2025

## CSS min(), max() en clamp() - wanneer en wat?

### min(a, b)

Kiest een **minimale** waarde uit a of b, bijvoorbeeld:

Je hebt een container binnen scherm. Je heeft container `width = min(50em, 95%);`

Wat betekent dit?

Als breedte van container bij 50em kleiner is dan als die 95% van schermbreedte neemt, dan wordt container 50em breed. Maar stel, het scherm wordt kleiner, dat is 95% van het scherm ook op een bepaald moment kleiner dan 50em, 
en daarom neemt container kleinste waarde - 95% als breedte.

Dit is ook heel handig voor **padding**, bijvoorbeeld met min(3em, 6%) wordt padding op grotere scherm 3em en op kleinere scherm 6%. 

Bron: https://www.youtube.com/watch?v=pYW3O0AxpI8

### max(a,b)

Kiest een **maximale** waarde uit a of b, bijvoorbeeld: 

Als breedte van sidebar max(250px, 25vw) is, dan is de sidebar bij kleine scherm 250px, en bij grote scherm - 25vw, omdat 25vw bij grote scherm is groot maar bij kleine scherm is het lager dan 250px - 

**grote scherm: 25vw > 250px; kleine scherm: 250px > 25vw**

### clamp(min, preferred, max) 

Tussen min() en max() is clamp() - het strengste functie 
Functie clamp(min, preferred, max) houdt in dat de uiteindelijke waarde:

- Is nooit lager dan `min`
- Is nooit hoger dan `max`
- En blijft op `preferred` als het past tussen die twee waardes

Dit werkt het beste met font sizes. Hier zijn alle fonts goed resposive, maar het wordt aangeraden om ipv px voor font-size rem te gebruiken - "The root element's font-size"

Wat betekent dit op echte voorbeeld: 

Voor h1 font-size=clamp(1.8rem, 10vw, 5rem); wordt dus font size nooit groter dan 5rem, kleiner dan 1.8rem, en blijft op 10vw. 



# 17-12-2025

## Talk van Merlin over WebGL

## Check up : Creative Coding spike

Ik ga 

## WRAP-UP sprint 17 



# 24-12-2025





