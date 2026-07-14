import { DesignerCategory, DesignerCategoryItem, GeneratedDesign, ProjectContext } from "./types"

export const designerCategories: DesignerCategoryItem[] = [
  {
    id: "game-concept",
    label: "Game Concept",
    description: "High-level game ideas, themes, and core vision",
  },
  {
    id: "core-gameplay",
    label: "Core Gameplay",
    description: "Primary mechanics, loops, and player actions",
  },
  {
    id: "combat-system",
    label: "Combat System",
    description: "Battle mechanics, encounters, and tactical depth",
  },
  {
    id: "character-progression",
    label: "Character Progression",
    description: "Growth systems, skills, and player advancement",
  },
  {
    id: "level-design",
    label: "Level Design",
    description: "World structure, pacing, and environmental storytelling",
  },
  {
    id: "economy-system",
    label: "Economy System",
    description: "Resources, currency, crafting, and reward loops",
  },
  {
    id: "boss-design",
    label: "Boss Design",
    description: "Memorable boss fights, phases, and mechanics",
  },
]

export const designerExamplePrompts: Record<DesignerCategory, string[]> = {
  "game-concept": [
    "Design a post-apocalyptic farming sim where players grow mutant crops to rebuild civilization",
    "Create a game concept about a detective who solves crimes by time-traveling to the crime scene",
    "Pitch a co-op survival game set inside a living, breathing whale",
  ],
  "core-gameplay": [
    "Design a momentum-based movement system for a 2D platformer",
    "Create core loop mechanics for a deck-building roguelike",
    "How would you design a shape-shifting mechanic that changes gameplay per form?",
  ],
  "combat-system": [
    "Design a stance-based melee combat system with three distinct fighting styles",
    "Create a magic combat system where spells interact with each other dynamically",
    "How would you design a ranged combat system with bullet-time resource management?",
  ],
  "character-progression": [
    "Design a skill tree that branches based on moral choices made during the story",
    "Create a progression system where equipment evolves based on playstyle",
    "How would you design a multi-class system with hybrid combinations?",
  ],
  "level-design": [
    "Design a metroidvania level that uses sound as a navigation mechanic",
    "Create a dungeon layout that adapts to the player's worst fears",
    "How would you design an open-world hub that changes based on time of day?",
  ],
  "economy-system": [
    "Design a player-driven market where NPCs remember price history",
    "Create a crafting economy where item rarity depends on environmental conditions",
    "How would you design a reputation-based trading system with rival factions?",
  ],
  "boss-design": [
    "Design a multi-phase boss that learns from the player's tactics",
    "Create a cooperative boss fight where players must switch roles mid-battle",
    "How would you design a boss that is also the level itself?",
  ],
}

const mockResultsByCategory: Record<DesignerCategory, GeneratedDesign[]> = {
  "game-concept": [
    {
      title: "Mutant Harvest: Green Rebirth",
      sections: [
        { heading: "Core Vision", body: "A serene yet haunting post-apocalyptic farming simulator where players cultivate bioluminescent, sentient crops to restore a shattered world. The emotional tone blends hope and melancholy." },
        { heading: "Unique Hook", body: "Crops communicate their needs through color pulses and musical tones. Players must learn this language to maximize yield, creating a meditative, rhythmic gameplay loop." },
        { heading: "Target Audience", body: "Fans of Stardew Valley and Subnautica who enjoy discovery, resource management, and atmospheric storytelling without combat pressure." },
        { heading: "Key Pillars", body: "1) Cultivation as conversation, 2) World reconstruction through incremental progress, 3) Mystery of the old world uncovered via crop memories." },
      ],
    },
    {
      title: "Echo Detective: Chrono Case Files",
      sections: [
        { heading: "Core Vision", body: "A noir detective adventure where the protagonist can project their consciousness backward in time to inhabit witnesses and suspects at the moment of the crime." },
        { heading: "Unique Hook", body: "Time travel is not free; every second spent in the past drains the detective's present-day life force, forcing players to balance thoroughness with survival." },
        { heading: "Target Audience", body: "Players who love Return of the Obra Dinn, Disco Elysium, and intricate deduction mechanics with a supernatural twist." },
        { heading: "Key Pillars", body: "1) Observation-driven deduction, 2) Risk-reward time management, 3) Branching narrative based on whose perspective you choose to witness." },
      ],
    },
    {
      title: "Leviathan's Belly",
      sections: [
        { heading: "Core Vision", body: "A cooperative survival game set inside the guts of a continent-sized whale. Players are swallowed crew members who must build a sustainable ecosystem to survive." },
        { heading: "Unique Hook", body: "The whale's organs function as dynamic biomes with day-night cycles tied to its heartbeat. Migration routes through the bloodstream create seasonal resource shifts." },
        { heading: "Target Audience", body: "Co-op survival fans of Raft and Valheim seeking a surreal, deeply interconnected biological setting with emergent teamwork scenarios." },
        { heading: "Key Pillars", body: "1) Organic worldbuilding inside a living creature, 2) Symbiotic crafting using whale biology, 3) Escape vs. harmony narrative choices." },
      ],
    },
    {
      title: "Signal Lost",
      sections: [
        { heading: "Core Vision", body: "A narrative-driven exploration game where players are a radio operator decoding alien signals to prevent an interstellar war caused by translation errors." },
        { heading: "Unique Hook", body: "The language puzzle system procedurally generates syntax trees that players must map. Misinterpretations lead to dramatically different diplomatic outcomes." },
        { heading: "Target Audience", body: "Sci-fi enthusiasts and puzzle aficionados who appreciated The Witness and Arrival's linguistic themes." },
        { heading: "Key Pillars", body: "1) Language as the central mechanic, 2) Moral ambiguity of communication, 3) Procedural narrative branches from translation choices." },
      ],
    },
    {
      title: "Paper Kingdom",
      sections: [
        { heading: "Core Vision", body: "A tactical RPG set in a world of origami creatures where terrain folds, unfolds, and transforms based on player actions, altering line of sight and movement." },
        { heading: "Unique Hook", body: "Every unit and terrain piece has a fold-state: flat, creased, or fully folded. Changing states consumes action points and reshapes the battlefield dynamically." },
        { heading: "Target Audience", body: "Fans of tactical RPGs like Fire Emblem and Into the Breach who crave spatial manipulation and emergent geometry-based tactics." },
        { heading: "Key Pillars", body: "1) Terrain folding as core tactic, 2) Fragile paper aesthetic with deep mechanical complexity, 3) Story of a kingdom defending its last sheet of sacred paper." },
      ],
    },
    {
      title: "Dust and Echoes",
      sections: [
        { heading: "Core Vision", body: "A narrative action game about a spirit guide who helps the deceased complete unfinished business by reliving their memories and altering key decisions." },
        { heading: "Unique Hook", body: "Each ghost's memory is a playable level. Changing the past affects the present world, unlocking new areas and altering NPC relationships in surprising ways." },
        { heading: "Target Audience", body: "Story-first players who loved What Remains of Edith Finch and Life is Strange, seeking meaningful choice-consequence loops." },
        { heading: "Key Pillars", body: "1) Memory as interactive level, 2) Ripple-effect world changes, 3) Themes of forgiveness, regret, and closure." },
      ],
    },
    {
      title: "Skybound Cartel",
      sections: [
        { heading: "Core Vision", body: "An airborne trading empire builder where players captain a fleet of skyships, establishing floating trade routes between sky-islands while navigating political intrigue." },
        { heading: "Unique Hook", body: "Wind currents are a real-time strategic resource. Players can seed storms to block rivals or summon favorable gusts, but weather manipulation angers sky-gods." },
        { heading: "Target Audience", body: "Fans of Factorio, Sunless Sea, and economic simulation with a strong narrative layer and logistical optimization challenges." },
        { heading: "Key Pillars", body: "1) Wind as living economy backbone, 2) Fleet management and crew relationships, 3) Divine consequences for environmental manipulation." },
      ],
    },
  ],
  "core-gameplay": [
    {
      title: "Momentum Flow Platformer",
      sections: [
        { heading: "Core Mechanic", body: "Movement is physics-driven: sliding down slopes converts potential energy into speed, wall-jumps preserve horizontal velocity, and dash pads amplify existing momentum rather than setting fixed speeds." },
        { heading: "Skill Expression", body: "Expert players chain slides, wall-bounces, and air-dashes to maintain a 'flow state' that unlocks hidden paths and reduces level clear times exponentially." },
        { heading: "Risk-Reward", body: "High momentum makes steering harder and enemy collisions more lethal. Players must choose between safe, slow traversal and risky speedrunning routes." },
        { heading: "Progression", body: "Unlockable modifiers like 'grip boots' or 'aether wings' subtly alter momentum physics, letting players customize their flow profile without breaking the core system." },
      ],
    },
    {
      title: "Rogue Deck Architect",
      sections: [
        { heading: "Core Mechanic", body: "Players draft cards during runs, but also modify the deck's physical properties—card weight, material, and ink—which affect draw speed, shuffle randomness, and card interaction." },
        { heading: "Skill Expression", body: "Building a 'heavy' deck with slow but powerful cards versus a 'light' deck with rapid low-damage flurries creates distinctly different playstyles and combo potentials." },
        { heading: "Risk-Reward", body: "Rare 'cursed ink' cards are extremely powerful but corrupt neighboring cards in hand, forcing players to manage spatial positioning within their own hand." },
        { heading: "Progression", body: "Between runs, players unlock new card stocks and binding techniques, expanding the deck-building meta without directly increasing card power." },
      ],
    },
    {
      title: "Shifter Forms System",
      sections: [
        { heading: "Core Mechanic", body: "Players possess three forms—Beast (strength, melee), Mist (intangibility, traversal), and Construct (defense, puzzle interaction)—with a shared energy pool that depletes while shifted." },
        { heading: "Skill Expression", body: "Mastering 'form weaving'—rapidly shifting mid-action—allows advanced techniques like phasing through a wall as Mist then slamming enemies as Beast on the other side." },
        { heading: "Risk-Reward", body: "Energy recovers slowly in human form. Over-shifting leaves the player vulnerable. Strategic retreats to human form become a tense, deliberate decision." },
        { heading: "Progression", body: "Each form has a mastery track unlocked through usage. High mastery reveals hidden abilities, but focusing on one form slows mastery gain in others." },
      ],
    },
    {
      title: "Echo Action Loop",
      sections: [
        { heading: "Core Mechanic", body: "Every action leaves an 'echo' that repeats after a 3-second delay. Players must choreograph their moves so that echoes complement rather than interfere with live actions." },
        { heading: "Skill Expression", body: "Advanced players intentionally create echo chains that perform complex combos automatically, freeing them to focus on positioning and defense in real time." },
        { heading: "Risk-Reward", body: "Echoes can collide with the player, causing self-damage. Tight spaces amplify echo hazards, encouraging open-arena kiting or very precise choreography." },
        { heading: "Progression", body: "Unlocks allow players to adjust echo delay, split echoes into weaker duplicates, or convert echoes into healing pulses instead of damage." },
      ],
    },
    {
      title: "Tether Ballistics",
      sections: [
        { heading: "Core Mechanic", body: "Players control a spherical drone tethered to their character. Swinging the drone builds centrifugal force, which is released as a projectile attack when the tether is cut." },
        { heading: "Skill Expression", body: "Optimal play involves predicting enemy movement, calculating swing arcs, and timing tether cuts to hit distant or shielded targets around corners." },
        { heading: "Risk-Reward", body: "The drone is vulnerable while swinging. Enemies can sever the tether, leaving the player defenseless until the drone auto-returns on a lengthy cooldown." },
        { heading: "Progression", body: "Tether length, drone mass, and auto-return speed can be upgraded, alongside alternate drone types (explosive, cryo, tether-pull) that change the ballistic math." },
      ],
    },
    {
      title: "Rhythm Command System",
      sections: [
        { heading: "Core Mechanic", body: "All abilities execute on the next beat of an adaptive soundtrack. Inputting commands between beats queues them; perfect timing on the beat grants bonus effects." },
        { heading: "Skill Expression", body: "Players can intentionally queue off-beat to set up 'syncopated combos' that are harder to time but bypass enemy parry windows and deal bonus stagger damage." },
        { heading: "Risk-Reward", body: "Mistimed inputs waste action points and create 'dissonance' that buffs enemies. The soundtrack intensifies with dissonance, raising tension audibly and mechanically." },
        { heading: "Progression", body: "Unlocking new time signatures (3/4, 7/8) changes the rhythm grid and opens advanced techniques tied to each signature's unique feel." },
      ],
    },
    {
      title: "Gravity Anchor",
      sections: [
        { heading: "Core Mechanic", body: "Players can place up to two gravity anchors that redefine 'down' for all entities within their radius. Objects and enemies fall toward the nearest anchor." },
        { heading: "Skill Expression", body: "Placing anchors on opposite sides of a chasm creates a zero-gravity corridor. Skilled players use this to fly, trap enemies, or redirect projectiles." },
        { heading: "Risk-Reward", body: "Anchors have a shared energy pool. Sustaining two anchors drains energy rapidly. Players must decide when to drop anchors and revert to normal gravity." },
        { heading: "Progression", body: "Upgrades expand anchor count, radius, and introduce 'repulsor' mode that pushes instead of pulls, enabling entirely new traversal and combat strategies." },
      ],
    },
  ],
  "combat-system": [
    {
      title: "Tri-Stance Melee Framework",
      sections: [
        { heading: "Stance Overview", body: "Crimson Stance: slow, hyper-armored heavies that break guards. Azure Stance: fast, evasive chains that build a combo meter. Emerald Stance: mid-range, lifestealing strikes that trade health for damage." },
        { heading: "Stance Switching", body: "Switching stances consumes a 'focus' resource that regenerates only on successful parries. Spamming switches leaves the player locked in recovery animations." },
        { heading: "Enemy Design", body: "Enemies have visible stance affinities. A Crimson-aligned enemy takes reduced damage from Crimson attacks, encouraging players to master all three stances and read battlefield tells." },
        { heading: "Depth Mechanics", body: "At max focus, players enter 'Transcendence'—a temporary state blending all three stances with unique finishers that can turn the tide of a boss encounter." },
      ],
    },
    {
      title: "Elemental Reaction Magic",
      sections: [
        { heading: "Core Mechanic", body: "Spells leave persistent elemental fields on the battlefield. Casting a new spell into an existing field triggers a reaction: Fire+Wind = Inferno Vortex, Ice+Lightning = Superconductor Burst." },
        { heading: "Skill Expression", body: "Players can pre-seed the arena with fields before combat, then detonate them in sequence. Boss arenas become puzzles of optimal field placement and trigger timing." },
        { heading: "Risk-Reward", body: "Reactions affect the player too. Standing in your own inferno vortex deals self-damage unless you have the appropriate resistance buff active." },
        { heading: "Depth Mechanics", body: "Rare 'Primal' spells alter the fundamental rules of reactions within their radius, such as reversing elemental polarity or causing chain reactions across the entire arena." },
      ],
    },
    {
      title: "Chrono-Bullet Ranged Combat",
      sections: [
        { heading: "Core Mechanic", body: "Players have a bullet-time meter that depletes while active. During bullet time, players can mark multiple targets; exiting bullet time fires all shots simultaneously with perfect accuracy." },
        { heading: "Skill Expression", body: "Masterful players mark weak points, environmental hazards, and explosive barrels in a single bullet-time window, creating devastating chain reactions." },
        { heading: "Risk-Reward", body: "Bullet time does not pause enemy projectiles—it slows them. Poor timing means exiting bullet time into an unavoidable bullet hell." },
        { heading: "Depth Mechanics", body: "A 'Ricochet Vision' upgrade allows marking bounce paths during bullet time, turning cover and geometry into an offensive toolkit rather than a defensive crutch." },
      ],
    },
    {
      title: "Vital Strike System",
      sections: [
        { heading: "Core Mechanic", body: "Enemies have visible anatomical weak points that dynamically shift based on their current action. Striking a weak point during its 'open window' deals critical damage and applies a unique debuff." },
        { heading: "Skill Expression", body: "Each weapon type excels at exposing different weak points. Daggers expose tendons, hammers shatter armor to reveal flesh, and whips trip enemies to expose their throat." },
        { heading: "Risk-Reward", body: "Missing a vital strike window leaves the player overextended. Some enemies deliberately bait false windows with telegraphed 'trap' animations that punish greedy attackers." },
        { heading: "Depth Mechanics", body: "Stacking debuffs from multiple vital strikes triggers 'Catastrophic Failure'—a scripted, cinematic takedown unique to each enemy archetype." },
      ],
    },
    {
      title: "Symbiotic Companion Combat",
      sections: [
        { heading: "Core Mechanic", body: "Players fight alongside a shapeshifting companion. Issuing commands consumes 'sympathy' that builds when the player and companion attack the same target in quick succession." },
        { heading: "Skill Expression", body: "High-level play involves 'tag combos' where the player and companion alternate attacks so rapidly that the enemy is stun-locked while sympathy generates itself." },
        { heading: "Risk-Reward", body: "Companion has its own health pool and can be incapacitated. Reviving it costs a large sympathy burst, forcing players to choose between combo potential and companion safety." },
        { heading: "Depth Mechanics", body: "At maximum sympathy, player and companion can fuse temporarily, gaining hybrid abilities and shared health. Mismanaging fusion timing can wipe both simultaneously." },
      ],
    },
    {
      title: "Terrain Weaponization",
      sections: [
        { heading: "Core Mechanic", body: "Every weapon type interacts with terrain differently. Greatswords cleave pillars into scatter projectiles. Spears impale enemies into walls for pin damage. Gauntlets shatter the ground to create hazards." },
        { heading: "Skill Expression", body: "Environmental awareness becomes as important as enemy awareness. A skilled player turns every arena into a deathtrap by luring enemies into optimal terrain-interaction zones." },
        { heading: "Risk-Reward", body: "Destructible terrain is finite. Over-destroying the arena removes cover and creates open kill-zones that benefit ranged enemies more than the player." },
        { heading: "Depth Mechanics", body: "Certain bosses can also weaponize terrain, creating asymmetric battles where both sides compete to reshape the arena to their advantage." },
      ],
    },
    {
      title: "Momentum Shielding",
      sections: [
        { heading: "Core Mechanic", body: "Shields do not block damage—they redirect it based on movement direction. Moving toward an attack 'braces' it, reducing damage. Moving away 'deflects' it, sending projectiles back. Moving sideways 'parries' melee." },
        { heading: "Skill Expression", body: "Perfect directional shielding converts enemy attacks into stamina-free counterattacks. Reading enemy animations to choose the optimal shield direction is the core skill ceiling." },
        { heading: "Risk-Reward", body: "Guessing wrong direction amplifies damage taken. A braced projectile hits harder than an undefended one, punishing panic shielding." },
        { heading: "Depth Mechanics", body: "Shield 'polarity' can be inverted mid-combat, reversing directional rules. Enemies with mixed attack types force constant polarity management." },
      ],
    },
  ],
  "character-progression": [
    {
      title: "Moral Skill Branching",
      sections: [
        { heading: "Progression Overview", body: "Skill trees are not predefined. They grow branches based on the moral alignment of story choices: Mercy, Justice, or Pragmatism. Each branch unlocks thematically linked active and passive abilities." },
        { heading: "Mercy Branch", body: "Focuses on defensive and support skills: healing auras, disarm techniques, and crowd-control that incapacitates rather than kills. High Mercy characters earn diplomatic solutions to conflicts." },
        { heading: "Justice Branch", body: "Balanced offensive and defensive skills with strict honor mechanics. Abilities gain bonus power when duelling single foes or protecting allies, but weaken when attacking from behind or using poison." },
        { heading: "Pragmatism Branch", body: "Ruthless efficiency: assassination strikes, trap mastery, and alchemical debuffs. Pragmatic characters unlock shortcuts and bypass mechanics, but lose access to certain NPC storylines." },
      ],
    },
    {
      title: "Living Equipment Evolution",
      sections: [
        { heading: "Progression Overview", body: "Weapons and armor are biological 'symbiotes' that evolve based on how they are used. A sword used primarily for parrying grows thicker and defensive. One used for critical strikes develops serrated edges." },
        { heading: "Evolution Paths", body: "Each equipment piece has three latent evolution paths. The path with the highest 'experience' triggers at major milestones, permanently altering the item's stats, appearance, and special effect." },
        { heading: "Resonance System", body: "Equipping multiple symbiotes that evolved along compatible paths creates 'resonance' bonuses. A full set of aggressively evolved gear unlocks a unique ultimate ability." },
        { heading: "Trade-offs", body: "Evolution is irreversible without rare 'regression' items. Players must commit to builds or invest heavily in maintaining a versatile but less powerful mixed set." },
      ],
    },
    {
      title: "Hybrid Class Matrix",
      sections: [
        { heading: "Progression Overview", body: "Players choose a primary and secondary class, but the game does not simply add their abilities. Instead, unique 'hybrid' skill trees unlock at the intersection of each class pair." },
        { heading: "Example Hybrids", body: "Warrior + Mage = Spellblade (enchanted melee combos). Rogue + Cleric = Shadow Priest (healing through damage dealt from stealth). Mage + Ranger = Arcane Archer (glyph-embedded ammunition)." },
        { heading: "Synergy Points", body: "Investing equally in both parent classes maximizes hybrid tree access, but min-maxing one parent class unlocks 'mastery' versions of hybrid skills with reduced cooldowns." },
        { heading: "Trade-offs", body: "Triple-classing is possible late-game but spreads experience thin. Pure single-class players gain access to 'capstone' abilities that hybrid players can never obtain." },
      ],
    },
    {
      title: "Scar Tissue Progression",
      sections: [
        { heading: "Progression Overview", body: "Instead of traditional levels, characters advance by surviving injuries. Each near-death experience leaves a scar that can be 'remembered' to unlock a related resistance or ability." },
        { heading: "Scar Types", body: "Burn scars grant fire resistance and eventual fire-affinity abilities. Blade scars unlock parry bonuses and counter-attack windows. Fall scars improve aerial control and ground-pound attacks." },
        { heading: "Trauma Threshold", body: "Accumulating too many similar scars without rest triggers 'trauma'—a debilitating debuff that must be resolved through narrative reflection sequences or medical intervention." },
        { heading: "Trade-offs", body: "Avoiding damage entirely ('perfect' play) results in a fragile but precise playstyle with unique 'untouched' abilities. The game rewards both masochistic and flawless approaches." },
      ],
    },
    {
      title: "Pact Binding System",
      sections: [
        { heading: "Progression Overview", body: "Players make pacts with supernatural entities for power. Each pact grants a unique progression track, but also imposes narrative and mechanical obligations." },
        { heading: "Pact Examples", body: "The Hungry Pact grants scaling damage buffs but requires consuming rare items before each level-up. The Silent Pact grants stealth mastery but removes the ability to speak in dialogue, locking quest paths." },
        { heading: "Favor and Wrath", body: "Fulfilling pact obligations raises 'Favor' for bonus abilities. Ignoring them raises 'Wrath,' which spawns punishing divine hunters until the debt is paid." },
        { heading: "Trade-offs", body: "Multiple pacts can be held simultaneously, but conflicting obligations create impossible choices. Breaking a pact entirely is possible but burns its entire progression track to ash." },
      ],
    },
    {
      title: "Memory Inheritance",
      sections: [
        { heading: "Progression Overview", body: "Defeated enemies sometimes leave 'memory fragments.' Consuming them adds a portion of the enemy's skill set to the player's, but also carries a fragment of their personality into dialogue." },
        { heading: "Fragment Tiers", body: "Common enemies grant minor passive boosts. Elite enemies grant active abilities. Boss fragments rewrite a section of the player's skill bar with the boss's signature moves." },
        { heading: "Identity Erosion", body: "Consuming too many fragments from the same faction causes the player's appearance, voice lines, and even UI color scheme to shift toward that faction's aesthetic." },
        { heading: "Trade-offs", body: "Fragments can be purified into generic experience, losing the ability but avoiding identity shifts. Purification also removes any hidden lore and secret interactions tied to the fragment." },
      ],
    },
    {
      title: "Modular Automaton Body",
      sections: [
        { heading: "Progression Overview", body: "Players control a clockwork automaton whose body is composed of interchangeable parts. Progression is physical: finding, crafting, and installing better limbs, cores, and sensor arrays." },
        { heading: "Part Synergy", body: "Each body part has a 'protocol' tag. Matching protocols across multiple parts activates set bonuses. Mixing protocols creates unpredictable 'glitch' effects that can be beneficial or harmful." },
        { heading: "Overclocking", body: "Parts can be overclocked beyond safe limits for temporary power spikes. Sustained overclocking causes part degradation, requiring repair resources and eventual replacement." },
        { heading: "Trade-offs", body: "Some parts have high stats but occupy multiple slots or impose movement restrictions. Building the 'perfect' body requires solving a spatial optimization puzzle with limited chassis capacity." },
      ],
    },
  ],
  "level-design": [
    {
      title: "Resonance Ruins",
      sections: [
        { heading: "Navigation Mechanic", body: "The level is pitch-black except for objects that emit sound. Players navigate by throwing resonance stones that ping the environment, briefly revealing geometry through echolocation visualized as glowing wavefronts." },
        { heading: "Pacing", body: "Early rooms teach stone-throwing basics. Mid-level introduces 'deaf' enemies that hunt by vibration, forcing players to choose between visibility and stealth. Late level adds moving platforms only visible while in motion." },
        { heading: "Secrets", body: "Hidden chambers resonate at specific frequencies. Players must discover and throw 'tuned' stones to reveal optional upgrades and lore entries detailing the ruins' extinct civilization." },
        { heading: "Landmarks", body: "A persistent central bell tower serves as a navigational anchor. Its chime directionally varies based on player position, subtly guiding lost players back to the main path without explicit waypoints." },
      ],
    },
    {
      title: "Nightmare Spire",
      sections: [
        { heading: "Adaptive Layout", body: "The dungeon reads the player's inventory and death history to generate rooms representing their worst in-game fears: scarcity, failure, betrayal. Each player's spire layout is procedurally personalized." },
        { heading: "Pacing", body: "Fear intensity escalates across floors. Early floors create mild unease with resource drain. Later floors manifest hallucinations of past failed runs, culminating in a boss fight against a shadow of the player's own character." },
        { heading: "Secrets", body: "Embracing rather than fleeing fear rooms unlocks 'courage' paths with high-risk, high-reward layouts. These paths contain the spire's true ending and the most powerful cursed items." },
        { heading: "Landmarks", body: "A 'safe room' appears every three floors, visually distinct with warm lighting and comforting music. It provides false security—some spire layouts corrupt even the safe rooms on deeper floors." },
      ],
    },
    {
      title: "Chrono-Haven",
      sections: [
        { heading: "Time-Based Layout", body: "An open-world hub city that physically transforms based on time of day. Morning markets become afternoon arenas and midnight ghost districts. NPCs, quests, and enemies change accordingly." },
        { heading: "Pacing", body: "The game clock runs at 4x real time. Players must plan routes around predictable temporal shifts. Certain shortcuts only exist during twilight transitions lasting mere minutes." },
        { heading: "Secrets", body: "Temporal anomalies allow limited time manipulation. Solving a puzzle in the past version of a district alters its present layout, creating new shops, allies, and hidden dungeons." },
        { heading: "Landmarks", body: "The Eternal Clock Tower is the hub's geographical center and the only structure present in all time periods. Its bells audibly warn of upcoming temporal shifts across the entire city." },
      ],
    },
    {
      title: "Sunken Library",
      sections: [
        { heading: "Verticality", body: "A partially flooded archive spanning twenty floors underwater. Players must manage oxygen while navigating collapsed sections, using rising and falling water levels to access different routes." },
        { heading: "Pacing", body: "Dry floors contain puzzles and safe exploration. Flooded floors have faster traversal but limited oxygen and aggressive aquatic guardians. Tide cycles alternate every ten minutes." },
        { heading: "Secrets", body: "Bookshelves hide pressure plates that drain local water, revealing secret dry chambers with ancient spells. Completing the full drainage puzzle exposes the library's forbidden basement." },
        { heading: "Landmarks", body: "A massive central atrium with a broken glass ceiling provides a persistent visual of the surface sun, serving as both a directional compass and an emotional reminder of the world above." },
      ],
    },
    {
      title: "Fractured Highway",
      sections: [
        { heading: "Spatial Logic", body: "A series of broken sky-roads suspended in a void. Gravity is localized to each road segment, allowing players to walk up vertical ramps and across ceilings to bridge gaps." },
        { heading: "Pacing", body: "Early segments are stable and linear. Midway, segments begin to drift relative to each other, requiring timed jumps between moving platforms. Final segments crumble behind the player, enforcing constant forward motion." },
        { heading: "Secrets", body: "Roads that appear to lead nowhere often hide invisible extensions revealed only by specific light sources. Finding and activating ancient streetlamps exposes hidden merchant stops and shortcuts." },
        { heading: "Landmarks", body: "A distant, always-visible spire of light marks the highway's terminus. It grows larger as players progress, providing a tangible sense of advancement through an otherwise abstract space." },
      ],
    },
    {
      title: "The Garden of Forking Paths",
      sections: [
        { heading: "Branching Architecture", body: "A hedge maze where every intersection splits into three paths: one leads forward, one loops backward disguised as new, and one dead-ends into a combat arena. Players must mark their trail or become lost." },
        { heading: "Pacing", body: "The maze's density increases with depth. Early areas have wide corridors and gentle curves. Deeper areas are claustrophobic with low ceilings, tight corners, and frequent ambush alcoves." },
        { heading: "Secrets", body: "Burning certain hedges reveals hidden chambers, but fire spreads and can block retreat. Watering specific hedges with found vials causes them to grow into climbable towers with overw viewpoints." },
        { heading: "Landmarks", body: "A single, towering tree is visible above the hedge line from any point in the maze. Its apparent direction shifts with player position, acting as an unreliable but necessary navigational crutch." },
      ],
    },
    {
      title: "Assembly Line Inferno",
      sections: [
        { heading: "Dynamic Geometry", body: "A factory level where conveyor belts, presses, and robotic arms continuously reconfigure the floor plan. Platforms appear and disappear on industrial timing, requiring players to read factory rhythms." },
        { heading: "Pacing", body: "Introduction zones have slow, predictable machinery. Mid-level introduces multiple intersecting assembly lines with conflicting timings. The finale throws players into a malfunctioning sector where machinery moves randomly." },
        { heading: "Secrets", body: "Overriding control panels temporarily halts machinery, revealing otherwise inaccessible maintenance tunnels. These tunnels contain the factory's original blueprints and the tragic backstory of its automated workforce." },
        { heading: "Landmarks", body: "A colossal, inactive robot lies half-assembled at the level's center. As players progress, they gradually power it up until its awakening serves as the level's climactic set-piece and escape sequence." },
      ],
    },
  ],
  "economy-system": [
    {
      title: "Living Market Simulation",
      sections: [
        { heading: "Price Dynamics", body: "NPC merchants independently track supply, demand, and player transaction history. Flooding the market with iron ore crashes its price for days. Buying out all healing potions in town causes prices to spike." },
        { heading: "NPC Memory", body: "Merchants remember if you sold them cursed goods or undercut their rivals. Reputation affects haggling success, exclusive stock access, and whether they warn you of ambushes on the road." },
        { heading: "Regional Trade", body: "Prices vary drastically between biomes. Coastal towns sell fish cheaply but charge exorbitant prices for ore. Caravan routes can be established to automate profitable trade loops." },
        { heading: "Player Impact", body: "Large-scale economic manipulation is possible. Cornering a market, crashing a currency, or funding a merchant guild war are valid (if complex) paths to wealth and power." },
      ],
    },
    {
      title: "Environmental Crafting Economy",
      sections: [
        { heading: "Material Rarity", body: "Crafting materials have rarity tiers tied to environmental conditions. Herbs harvested during a blood moon are alchemical grade. Ore mined during earthquakes has superior durability." },
        { heading: "Seasonal Shifts", body: "The world runs on a seasonal calendar that affects resource availability. Winter freezes rivers, blocking fish but exposing rare ice veins. Summer droughts reveal ancient ruins in dried lakebeds." },
        { heading: "Tool Dependency", body: "Using higher-tier tools increases yield but also increases the chance of 'overharvesting,' which temporarily depletes the node and angers local spirits that guard resources." },
        { heading: "Player Impact", body: "Players can build infrastructure—greenhouses, mines, fishing docks—to stabilize supply, but these attract bandit raids and require ongoing maintenance and guard wages." },
      ],
    },
    {
      title: "Faction Reputation Trade",
      sections: [
        { heading: "Trade Access", body: "Each faction controls different trade goods. High reputation unlocks faction-exclusive items. Low reputation results in embargoes and hostile trade guards." },
        { heading: "Smuggling", body: "Trading with a faction's enemy behind their back is possible but risky. Smuggling routes must be established through bribed guards and hidden paths. Discovery causes massive reputation loss." },
        { heading: "Trade Agreements", body: "Players can broker formal trade agreements between factions, unlocking cross-faction hybrid goods. These agreements require completing narrative quests that reveal shared interests." },
        { heading: "Player Impact", body: "Monopolizing trade between two hostile factions places the player in a powerful middleman position. However, war between those factions can collapse the trade network entirely." },
      ],
    },
    {
      title: "Soul Forging Currency",
      sections: [
        { heading: "Resource Basics", body: "The primary currency is 'soul ash,' extracted from defeated enemies. Stronger enemies yield more ash, but ash degrades over time, forcing players to spend or invest rather than hoard." },
        { heading: "Crafting Integration", body: "Soul ash is also the primary crafting fuel. Every item forged consumes ash, creating a direct tension between economic wealth and equipment upgrades." },
        { heading: "Banking and Debt", body: "Ash can be deposited in soul banks to prevent degradation, but banks charge interest in the form of narrative quests. Loans are available, but defaulting spawns debt-collector bosses." },
        { heading: "Player Impact", body: "Players can set up their own soul refineries to process raw ash into stable gems, but refineries are public PvP zones where other players can raid your stockpiles." },
      ],
    },
    {
      title: "Tithe and Blessing Economy",
      sections: [
        { heading: "Resource Basics", body: "Players tithe resources to temples in exchange for divine blessings that improve drop rates, crafting success, or combat stats. Different deities demand different tithes and offer different boons." },
        { heading: "Favor Decay", body: "Blessings are temporary and must be maintained with regular tithes. Players who switch deities frequently suffer 'faith confusion,' a stacking debuff that reduces all blessing potency." },
        { heading: "Religious Markets", body: "Temple-controlled markets sell blessed goods at a premium. Heretical black markets sell the same goods cheaper but with hidden curse chances and without contributing to temple reputation." },
        { heading: "Player Impact", body: "Players can ascend to minor godhood late-game, allowing them to receive tithes from NPCs and other players, effectively becoming a bank and quest-giver simultaneously." },
      ],
    },
    {
      title: "Blueprint Inheritance",
      sections: [
        { heading: "Resource Basics", body: "Crafting requires blueprints, not just materials. Blueprints are scarce, single-use scrolls that teach a recipe permanently. High-tier blueprints are dungeon rewards or boss drops." },
        { heading: "Replication", body: "Learned blueprints can be inscribed into new scrolls for trade or gifting. Each replication has a small chance of mutation, creating variant recipes with altered stats or unexpected side effects." },
        { heading: "Guild Libraries", body: "Player guilds can build shared blueprint libraries, but access tiers create social tension. Who gets to learn the legendary weapon blueprint first becomes a political question." },
        { heading: "Player Impact", body: "Destroying a blueprint scroll is irreversible. A player who learns a rare blueprint and refuses to replicate it holds monopoly power over that item category until someone else discovers an alternate source." },
      ],
    },
    {
      title: "Living Loan Shark",
      sections: [
        { heading: "Resource Basics", body: "A shadowy NPC faction offers instant gold loans with no upfront collateral. Repayment is due within a set number of in-game days with steep compound interest." },
        { heading: "Consequences", body: "Late payments trigger escalating harassment: ambushes, stolen inventory, kidnapped companions. Defaulting permanently marks the player, locking city access and spawning elite debt hunters." },
        { heading: "Debt as Weapon", body: "Players can pay off NPC debts to recruit them, or intentionally drive rivals into debt and purchase their debt contracts to control their behavior." },
        { heading: "Player Impact", body: "Players can eventually buy into the loan shark organization, unlocking predatory lending mechanics against NPCs and other players, with all the moral and mechanical complexity that entails." },
      ],
    },
  ],
  "boss-design": [
    {
      title: "The Adaptive Warlord",
      sections: [
        { heading: "Phase Structure", body: "Three phases. Phase 1 tests the player's preferred attack pattern. Phase 2 begins adapting: if the player relied on dodge-rolls, the warlord gains roll-tracking lunges. If they blocked, he gains guard-breaking uppercuts." },
        { heading: "Learning Mechanics", body: "The warlord's armor visibly changes color to indicate what tactic he has learned. A 'dodge-learned' warlord glows blue; a 'parry-learned' warlord glows gold. This telegraphs adaptation without explicit UI." },
        { heading: "Counter-Play", body: "Players must deliberately use suboptimal tactics to 'poison' the warlord's learning, then switch to their real strategy during his recovery animation after a failed counter-attempt." },
        { heading: "Narrative Weight", body: "The warlord is a former mentor. His adaptive combat style mirrors how he taught the player. Defeating him requires rejecting his teachings and developing an original fighting style." },
      ],
    },
    {
      title: "The Role-Swapping Colossus",
      sections: [
        { heading: "Phase Structure", body: "A two-player mandatory boss. Phase 1 divides players into 'Attacker' and 'Defender' roles. Phase 2 forces a mid-fight role swap via a cinematic grapple, requiring players to instantly adapt." },
        { heading: "Mechanics", body: "The Attacker must damage specific breakable joints while the Defender draws aggro and intercepts area-of-effect pulses. Swapping at the wrong moment leaves joints exposed and the Defender overwhelmed." },
        { heading: "Counter-Play", body: "A 'sacrifice' mechanic allows one player to intentionally take a fatal hit to trigger an early, forced swap, bypassing a dangerous enrage timer but burdening the survivor with a permanent vulnerability." },
        { heading: "Narrative Weight", body: "The colossus is a failed god of duality. Its design embodies division and unity. The true ending requires both players to sync their final blows within a one-second window, merging duality into transcendence." },
      ],
    },
    {
      title: "The Level-That-Is-The-Boss",
      sections: [
        { heading: "Phase Structure", body: "The entire dungeon is a single organism. Phase 1: the entrance mouth tries to digest the player with acid tides. Phase 2: the corridor stomach contracts, crushing players against walls. Phase 3: the heart chamber pumps blood that floods the arena." },
        { heading: "Mechanics", body: "Players do not attack a traditional hitbox. Instead, they must navigate environmental hazards to reach and destroy critical organs—valves, nerve clusters, and the final heart core." },
        { heading: "Counter-Play", body: "The 'boss' reacts to player position by altering its internal layout. Standing too long in one area causes flesh walls to seal off retreat. Constant movement is both offense and defense." },
        { heading: "Narrative Weight", body: "The creature is the player's own escaped shadow, grown massive from stolen power. Defeating it means literally journeying inside oneself and excising the darkness." },
      ],
    },
    {
      title: "The Mirror Knight",
      sections: [
        { heading: "Phase Structure", body: "Phase 1: the knight copies the player's equipment and stats exactly. Phase 2: it begins predicting player inputs, parrying attacks before they land. Phase 3: it duplicates, creating two predictive copies with shared health." },
        { heading: "Mechanics", body: "The knight's prediction accuracy is tied to the player's consistency. Using the same combo twice guarantees the knight will counter it the third time. Randomization and improvisation are the only counters." },
        { heading: "Counter-Play", body: "Environmental traps affect the knight identically. Skilled players lure the knight into its own copied trap setups, turning its perfect mimicry against it." },
        { heading: "Narrative Weight", body: "The knight is a magical testing golem created by the player's own order. Defeating it represents graduating beyond orthodox technique into true mastery." },
      ],
    },
    {
      title: "The Chorus of Regrets",
      sections: [
        { heading: "Phase Structure", body: "A multi-enemy boss composed of figures from the player's past choices—NPCs they betrayed, abandoned, or killed. Each figure is a separate target with unique mechanics, but they share a single health pool distributed among them." },
        { heading: "Mechanics", body: "Figures do not attack directly. Instead, they inflict 'guilt' debuffs that slow movement, reduce damage, and obscure the screen with memory flashbacks. Killing a figure removes its debuff but triggers a haunting from the others." },
        { heading: "Counter-Play", body: "A 'forgiveness' item obtained earlier in the game can be used mid-fight to pacify a figure, converting it into an ally that buffs the player and fights the remaining chorus members." },
        { heading: "Narrative Weight", body: "The boss only appears if the player has sufficient 'regret' points from past choices. A purely heroic player faces a different, easier boss, but misses the cathartic redemption arc and its unique rewards." },
      ],
    },
    {
      title: "The Time-Torn Tyrant",
      sections: [
        { heading: "Phase Structure", body: "Phase 1: a young, fast tyrant. Phase 2: an adult tyrant who pauses time locally to reposition. Phase 3: an elderly tyrant who rewinds his own health at the cost of summoning younger versions of himself as adds." },
        { heading: "Mechanics", body: "Time effects leave 'residue' zones where temporal mechanics persist. Standing in a residue zone after the tyrant rewinds causes the player to also rewind position, which can save or doom them." },
        { heading: "Counter-Play", body: "Dealing damage during a rewind attempt causes 'temporal paradox' damage that permanently reduces the tyrant's maximum health, making rewinds less effective. Aggression is rewarded over patience." },
        { heading: "Narrative Weight", body: "The tyrant is the player's descendant from a bad ending timeline. Defeating him severs that timeline, literally erasing a potential future and proving the player can change fate." },
      ],
    },
    {
      title: "The False Final Boss",
      sections: [
        { heading: "Phase Structure", body: "A three-phase fight against a dramatically oversized, visually spectacular demon king. Phase 1: standard attacks. Phase 2: arena-wide destruction. Phase 3: a massive health bar that depletes slowly." },
        { heading: "The Twist", body: "At 1% health, the demon king reveals it was an illusion. The real boss is the small, unassuming cultist who summoned it—the fight resets with the cultist at full health and the player at whatever state they reached." },
        { heading: "True Mechanics", body: "The cultist has no flashy attacks. He manipulates the arena itself, triggering traps the player dodged during the fake fight. He dies in few hits but is incredibly difficult to reach." },
        { heading: "Narrative Weight", body: "The fake boss represents the player's ego and desire for a dramatic victory. The true fight is a lesson in humility and attention to detail, rewarded with the game's most powerful 'unassuming' item." },
      ],
    },
  ],
}

function hashPrompt(prompt: string): number {
  let hash = 0
  for (let i = 0; i < prompt.length; i++) {
    const char = prompt.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return Math.abs(hash)
}

export function getDesignerMockResult(
  category: DesignerCategory,
  prompt: string,
  project: ProjectContext | null = null
): GeneratedDesign {
  const variants = mockResultsByCategory[category]
  const index = hashPrompt(prompt) % variants.length
  const base = variants[index]

  if (!project) {
    return base
  }

  const sections = [
    {
      heading: "Project Context",
      body: `Project: ${project.name}\nGame Type: ${project.gameType}\nStyle: ${project.style}`,
    },
    ...base.sections,
  ]

  if (project.worldDescription) {
    sections.push({
      heading: "World Reference",
      body: project.worldDescription,
    })
  }

  return {
    title: base.title,
    sections,
  }
}
