import type { CategoryItem, GeneratedContent, MockPrompt, WriterCategory } from "./types"

export const categories = [
  { id: "story", label: "Story" },
  { id: "dialogue", label: "Dialogue" },
  { id: "quest", label: "Quest" },
  { id: "character", label: "Character" },
  { id: "item", label: "Item" },
  { id: "skill", label: "Skill" },
] as const

export const categoryItems: CategoryItem[] = [
  { id: "s1", label: "World Lore", category: "story" },
  { id: "s2", label: "Main Quest", category: "story" },
  { id: "s3", label: "Village Backstory", category: "story" },
  { id: "d1", label: "Elder Introduction", category: "dialogue" },
  { id: "d2", label: "Tavern Banter", category: "dialogue" },
  { id: "d3", label: "Boss Entrance", category: "dialogue" },
  { id: "q1", label: "Crystal Hunt", category: "quest" },
  { id: "q2", label: "Forest Trials", category: "quest" },
  { id: "q3", label: "Dragon Awakening", category: "quest" },
  { id: "c1", label: "Elder Mira", category: "character" },
  { id: "c2", label: "Kael the Wanderer", category: "character" },
  { id: "c3", label: "Shadow Mage", category: "character" },
  { id: "i1", label: "Crystal Shard", category: "item" },
  { id: "i2", label: "Forest Map", category: "item" },
  { id: "i3", label: "Enchanted Blade", category: "item" },
  { id: "sk1", label: "Fireball", category: "skill" },
  { id: "sk2", label: "Heal", category: "skill" },
  { id: "sk3", label: "Stealth", category: "skill" },
]

export const examplePrompts: MockPrompt[] = [
  { label: "Create a fantasy village.", text: "Create a fantasy village nestled in ancient mountains, with hidden secrets and a mysterious elder." },
  { label: "Generate an NPC dialogue.", text: "Generate a dialogue for an elder NPC who guards a sacred forest temple and speaks in riddles." },
  { label: "Design a boss fight.", text: "Design an epic boss fight against a Shadow Mage who uses illusions and dark magic." },
  { label: "Write a side quest.", text: "Write a side quest about finding a lost crystal shard hidden in a dangerous cave system." },
  { label: "Generate item descriptions.", text: "Generate descriptions for magical items: a crystal shard, a forest map, and an enchanted blade." },
]

// ─── Story variants ───
const storyVillage: GeneratedContent = {
  title: "Ashen Hollow",
  sections: [
    { heading: "Village Overview", body: "A peaceful mountain village hidden inside ancient forests. The settlement is built around a central crystal well that glows faintly at dusk. Stone cottages with moss-covered roofs line narrow winding paths. The air smells of pine and old magic." },
    { heading: "Key NPCs", body: "Elder Mira serves as the village guardian. She has protected Ashen Hollow for over 40 years, ever since the Great Shadow first appeared. Her knowledge of the surrounding forests is unmatched." },
    { heading: "Quest Hook", body: "The Crystal of Ashen Hollow has begun to dim. Without its light, the forest creatures grow aggressive. Elder Mira seeks a brave adventurer to venture into the Shadow Caves and retrieve the missing Crystal Shard." },
    { heading: "Notable Locations", body: "Crystal Well (village center), Mira's Study (north cottage), The Hollow Tree (ancient meeting place), Shadow Trail (path to the caves), Elder's Garden (medicinal herbs)." },
  ],
}

const storyDungeon: GeneratedContent = {
  title: "The Shadow Caves",
  sections: [
    { heading: "Environment", body: "A vast underground labyrinth carved by ancient rivers of molten crystal. Bioluminescent fungi cast an eerie blue-green glow across cavern walls. The air is thick with moisture and the distant sound of dripping water echoes endlessly." },
    { heading: "Inhabitants", body: "Crystal Spiders weave webs of solidified light. Shadow Wraiths drift between formations, feeding on residual magic. The Cave Guardian, a massive stone golem animated by ancient runes, patrols the deepest chamber." },
    { heading: "Treasures", body: "Crystal Shard of Eternity (quest item), Ancient Rune Tablet (lore), Shadow Silk Armor (rare drop), Bioluminescent Torch (unlimited light source)." },
    { heading: "Dangers", body: "Collapsing crystal formations, toxic spore clouds from deep fungi, magical dead zones where spells fail, and the Guardian's devastating slam attack." },
  ],
}

const storyKingdom: GeneratedContent = {
  title: "Kingdom of Valdris",
  sections: [
    { heading: "Kingdom Overview", body: "A once-great empire now fractured by civil war. The capital Valdris stands atop a plateau of white stone, its spires piercing the clouds. Three noble houses vie for the vacant throne since the old king vanished." },
    { heading: "Political Landscape", body: "House Solara controls the merchant guilds and naval fleet. House Draken commands the mountain fortresses and elite dragon riders. House Vex holds the arcane academies and shadow assassins." },
    { heading: "Current Crisis", body: "The Crown of Valdris, a magical artifact that stabilizes the realm's ley lines, has been stolen. Without it, the barrier between the mortal world and the Void weakens." },
    { heading: "Key Factions", body: "The Loyalist Guard (protect the throne), The Void Cult (seek chaos), The Free Companies (mercenaries for hire), The Arcane Order (neutral arcanists)." },
  ],
}

// ─── Dialogue variants ───
const dialogueElder: GeneratedContent = {
  title: "Elder Mira - Opening Dialogue",
  sections: [
    { heading: "Greeting", body: "Elder Mira leans on her carved staff, eyes crinkling with a knowing smile. You come seeking passage into the heart of the forest? The trees guard their secrets well, young one. But something in your step tells me you are ready to hear what the stones have to say." },
    { heading: "Warning", body: "The crystal hums stronger these days. I can feel it in the bones. Bring back what the shadow stole, and the forest will reward you tenfold. But beware - not all who enter the caves find their way back out." },
    { heading: "Farewell", body: "Take this map. It marks the old entrance. Follow the stone cairns. Trust the moss that glows blue at dusk. And remember - the forest listens. Speak only truth within its borders." },
  ],
}

const dialogueBoss: GeneratedContent = {
  title: "Shadow Mage - Boss Encounter",
  sections: [
    { heading: "Phase 1: Arrival", body: "The chamber darkens. From the swirling shadows emerges a figure draped in tattered robes, eyes burning with violet flame. So... another fool comes to challenge the inevitable? Your courage is admirable. Your survival, however, is not guaranteed." },
    { heading: "Phase 2: Mid-fight", body: "The mage laughs as illusions multiply. Can you tell which is real? Reality is merely a suggestion to those who command the shadows. You fight well for a mortal. Pity I must crush you." },
    { heading: "Phase 3: Defeat", body: "Impossible... The shadows... they abandon me... NO! The mage dissolves into wisps of darkness, dropping the Crystal Fragment. The chamber brightens as the corruption fades." },
  ],
}

const dialogueMerchant: GeneratedContent = {
  title: "Grim the Merchant - Trading",
  sections: [
    { heading: "Greeting", body: "Grim adjusts his spectacles and counts coins with practiced speed. Ah, a customer with actual gold! Rare these days. What can old Grim procure for you? Weapons? Maps? Information that could save your life?" },
    { heading: "Bargaining", body: "That blade? Finest dwarven steel. I'll part with it for 500 gold. No? How about 400 and your word that you'll bring me something interesting from the Shadow Caves? A crystal shard, perhaps?" },
    { heading: "Secret Wares", body: "For trusted customers only... I have a map to the hidden vault beneath Valdris castle. Cost? Just your silence. And 2,000 gold. Don't look at me like that - knowledge is the most valuable weapon." },
  ],
}

// ─── Quest variants ───
const questCrystal: GeneratedContent = {
  title: "The Last Ember",
  sections: [
    { heading: "Quest Objective", body: "The sacred Ember of the temple has been stolen by corrupted shadow cultists. You must venture into the Abandoned Temple deep beneath the mountain and recover it before the solstice." },
    { heading: "Starting Location", body: "Begin at the Temple Entrance on the eastern slope of Mount Cinder. Speak with the sentinel Roran to receive your blessing and the Temple Key." },
    { heading: "Rewards", body: "The Emberblade legendary sword + 5,000 XP + access to the Temple Vendor exclusive shop + reputation with the Solara House." },
  ],
}

const questDragon: GeneratedContent = {
  title: "Dragon Awakening",
  sections: [
    { heading: "Quest Objective", body: "The ancient dragon Thalorix has awakened from a thousand-year slumber. Find the three Dragon Seal fragments scattered across the realm and perform the Binding Ritual to return him to sleep." },
    { heading: "Seal Locations", body: "Fragment of Flame (Volcanic Crater, guarded by fire elementals), Fragment of Ice (Frozen Spire, protected by frost giants), Fragment of Storm (Sky Temple, accessible only by dragon riders)." },
    { heading: "Rewards", body: "Dragon Rider companion + Thalorix Scale Armor set + 10,000 XP + access to the Dragon Forge for crafting legendary weapons." },
  ],
}

const questRescue: GeneratedContent = {
  title: "Rescue from the Void",
  sections: [
    { heading: "Quest Objective", body: "The Void Cult has kidnapped the Arcane Order's Grand Magister. Infiltrate their hidden stronghold in the Wasted Lands and rescue him before he is sacrificed in the Eclipse Ritual." },
    { heading: "Approach Options", body: "Stealth: Use the ventilation shafts (requires Lockpicking 40). Combat: Storm the front gates with the Loyalist Guard. Deception: Disguise yourself as a cult initiate (requires Persuasion 35)." },
    { heading: "Rewards", body: "Grand Magister's Grimoire (unique spellbook) + Arcane Order ally status + 8,000 XP + permanent +15% magic resistance buff." },
  ],
}

// ─── Character variants ───
const charMira: GeneratedContent = {
  title: "Elder Mira",
  sections: [
    { heading: "Basic Information", body: "Name: Elder Mira. Age: 62. Role: Village Chief & Guardian. Location: Ashen Hollow." },
    { heading: "Appearance", body: "Silver hair tied in a bun, weathered face with deep eyes. Wears a simple wool dress and leather boots. Walks with a carved oak staff that has a crystal tip." },
    { heading: "Personality", body: "Wise, calm, patient. Speaks in riddles, rarely hurried. Has seen generations come and go. Guarded with outsiders, but kind once she trusts you." },
    { heading: "Background", body: "Born in Ashen Hollow, became guardian after her mother passed. She was the last adventurer to return from the Shadow Caves alive. Carries the secret of the Crystal Prophecy." },
  ],
}

const charKael: GeneratedContent = {
  title: "Kael the Wanderer",
  sections: [
    { heading: "Basic Information", body: "Name: Kael Thornwood. Age: 28. Role: Mercenary & Explorer. Location: Travels between settlements." },
    { heading: "Appearance", body: "Tall and lean with sun-bronzed skin. Shaggy brown hair, hazel eyes that miss nothing. Wears a patchwork leather coat covered in travel stains and a wide-brimmed hat." },
    { heading: "Personality", body: "Restless, charming, fiercely independent. Has a soft spot for underdogs. Hates staying in one place too long. Speaks plainly but with surprising wisdom from his travels." },
    { heading: "Background", body: "Orphaned during the Great Shadow incursion, raised by traveling merchants. Learned swordplay from a retired knight and survival from forest rangers. Seeks the truth about his parents' fate." },
  ],
}

const charShadowMage: GeneratedContent = {
  title: "The Shadow Mage",
  sections: [
    { heading: "Basic Information", body: "Name: Unknown (called Vesper by cultists). Age: Unknown (appears mid-30s). Role: Void Cult Leader. Location: Abandoned Temple, Mount Cinder." },
    { heading: "Appearance", body: "Pale skin, violet eyes that glow in darkness. Black robes embroidered with shifting silver runes. Moves silently, leaving a faint trail of shadow in his wake." },
    { heading: "Personality", body: "Calculating, patient, speaks in poetic threats. Believes the Void is the natural state of existence and mortals are merely delaying the inevitable. Respects strength but despises mercy." },
    { heading: "Background", body: "Former Arcane Order prodigy who became obsessed with void magic. Expelled for forbidden experiments. Disappeared for a decade before resurfacing as the cult leader." },
  ],
}

// ─── Item variants ───
const itemCrystal: GeneratedContent = {
  title: "Crystal Shard of Ashen Hollow",
  sections: [
    { heading: "Item Type", body: "Quest Item / Consumable" },
    { heading: "Description", body: "A fragment of the ancient crystal that once powered the Ashen Hollow protection barrier. Glows with faint blue light when held. Empowers magical weapons and can be used to open shadow-sealed doors." },
    { heading: "Properties", body: "+10% magic damage against shadow creatures. +5% resistance to corruption. Glows in dark areas. Can be combined with other shards to restore the barrier." },
  ],
}

const itemBlade: GeneratedContent = {
  title: "Emberblade",
  sections: [
    { heading: "Item Type", body: "Legendary Weapon / Greatsword" },
    { heading: "Description", body: "Forged in dragon fire and tempered with void essence. The blade constantly emits a low heat that warms the wielder's hands. Runes along the fuller glow when enemies are near." },
    { heading: "Stats", body: "Damage: 85-120 (Fire). Attack Speed: 1.2s. Durability: Infinite. Special: Flame Burst - 20% chance to release a cone of fire on hit, dealing 150% weapon damage." },
    { heading: "Lore", body: "Wielded by the first Guardian of Valdris. Lost during the Void Incursion and recovered from the Abandoned Temple. Only those with pure intent can draw the blade without being burned." },
  ],
}

const itemMap: GeneratedContent = {
  title: "Cartographer's Compass",
  sections: [
    { heading: "Item Type", body: "Rare Tool / Accessory" },
    { heading: "Description", body: "An ornate brass compass with a crystal needle that points toward places of magical significance. The face displays terrain in holographic projection when activated." },
    { heading: "Properties", body: "Reveals hidden paths within 50 meters. Detects magical traps (pulsing red warning). Marks unvisited locations with golden highlights. Cannot be used in Void-tainted areas." },
    { heading: "Origin", body: "Created by the Arcane Cartographers' Guild three centuries ago. Only twelve were ever made. This one belonged to Kael's mentor before it was passed down." },
  ],
}

// ─── Skill variants ───
const skillFireball: GeneratedContent = {
  title: "Fireball",
  sections: [
    { heading: "Skill Type", body: "Offensive Magic / Destruction Spell" },
    { heading: "Effect", body: "Hurls a blazing ball of fire that explodes on impact. Deals splash damage to multiple enemies. Higher levels increase explosion radius and burn damage over time." },
    { heading: "Stats", body: "Mana Cost: 25. Cast Time: 0.5s. Range: 30 meters. Cooldown: 8 seconds." },
    { heading: "Notes", body: "Effective against ice-based enemies and plant-based creatures. Can be combined with other spells for combo damage." },
  ],
}

const skillHeal: GeneratedContent = {
  title: "Restoration Surge",
  sections: [
    { heading: "Skill Type", body: "Support Magic / Healing Spell" },
    { heading: "Effect", body: "Channels pure life energy into a target, healing wounds and removing minor debuffs. Overhealing converts to a temporary shield that lasts 10 seconds." },
    { heading: "Stats", body: "Mana Cost: 40. Cast Time: 1.5s. Range: 25 meters. Cooldown: 12 seconds. Heal: 150 + (INT x 2.5)." },
    { heading: "Notes", body: "Cannot be cast while silenced. Shield does not stack - new cast refreshes duration. Particularly effective when combined with Fireball to create a Phoenix Strike combo." },
  ],
}

const skillStealth: GeneratedContent = {
  title: "Shadow Walk",
  sections: [
    { heading: "Skill Type", body: "Utility / Stealth Ability" },
    { heading: "Effect", body: "Meld into shadows, becoming invisible to enemies for a short duration. First attack from stealth deals 200% damage and breaks invisibility. Movement speed increased by 30% while stealthed." },
    { heading: "Stats", body: "Mana Cost: 15. Duration: 6s. Cooldown: 15 seconds. Breaks on taking damage or casting non-stealth spells." },
    { heading: "Notes", body: "Does not work in well-lit areas or against creatures with True Sight. Can be used to bypass locked doors by phasing through keyholes." },
  ],
}

// ─── Prompt-based selector ───
function pickVariant<T>(prompt: string, variants: T[]): T {
  const p = prompt.toLowerCase()
  const hash = p.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return variants[hash % variants.length]
}

export function getMockResult(category: WriterCategory, prompt: string): GeneratedContent {
  switch (category) {
    case "story":
      return pickVariant(prompt, [storyVillage, storyDungeon, storyKingdom])
    case "dialogue":
      return pickVariant(prompt, [dialogueElder, dialogueBoss, dialogueMerchant])
    case "quest":
      return pickVariant(prompt, [questCrystal, questDragon, questRescue])
    case "character":
      return pickVariant(prompt, [charMira, charKael, charShadowMage])
    case "item":
      return pickVariant(prompt, [itemCrystal, itemBlade, itemMap])
    case "skill":
      return pickVariant(prompt, [skillFireball, skillHeal, skillStealth])
    default:
      return storyVillage
  }
}