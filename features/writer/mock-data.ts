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

const storyBody1 = "A peaceful mountain village hidden inside ancient forests. The settlement is built around a central crystal well that glows faintly at dusk. Stone cottages with moss-covered roofs line narrow winding paths. The air smells of pine and old magic."
const storyBody2 = "Elder Mira serves as the village guardian. She has protected Ashen Hollow for over 40 years, ever since the Great Shadow first appeared. Her knowledge of the surrounding forests is unmatched, and she holds the key to the Crystal Prophecy."
const storyBody3 = "The Crystal of Ashen Hollow has begun to dim. Without its light, the forest creatures grow aggressive and the boundary between worlds weakens. Elder Mira seeks a brave adventurer to venture into the Shadow Caves and retrieve the missing Crystal Shard."
const storyBody4 = "Crystal Well (village center), Mira\\'s Study (north cottage), The Hollow Tree (ancient meeting place), Shadow Trail (path to the caves), Elder\\'s Garden (medicinal herbs)."

const dialogueBody1 = "Elder Mira leans on her carved staff, eyes crinkling with a knowing smile. You come seeking passage into the heart of the forest? The trees guard their secrets well, young one. But something in your step tells me you are ready to hear what the stones have to say."
const dialogueBody2 = "The crystal hums stronger these days. I can feel it in the bones. Bring back what the shadow stole, and the forest will reward you tenfold."
const dialogueBody3 = "Take this map. It marks the old entrance. Follow the stone cairns. Trust the moss that glows blue at dusk."

const questBody1 = "The sacred Ember of the temple has been stolen by corrupted shadow cultists. You must venture into the Abandoned Temple deep beneath the mountain and recover it before the solstice."
const questBody2 = "Begin at the Temple Entrance on the eastern slope of Mount Cinder. Speak with the sentinel Roran to receive your blessing."
const questBody3 = "The Emberblade legendary sword + 5,000 XP + access to the Temple Vendor exclusive shop."

const charBody1 = "Name: Elder Mira. Age: 62. Role: Village Chief & Guardian. Location: Ashen Hollow."
const charBody2 = "Silver hair tied in a bun, weathered face with deep eyes. Wears a simple wool dress and leather boots. Walks with a carved oak staff that has a crystal tip."
const charBody3 = "Wise, calm, patient. Speaks in riddles, rarely hurried. Has seen generations come and go. Guarded with outsiders, but kind once she trusts you."
const charBody4 = "Born in Ashen Hollow, became guardian after her mother passed. She was the last adventurer to return from the Shadow Caves alive. Carries the secret of the Crystal Prophecy."

const itemBody1 = "Quest Item / Consumable"
const itemBody2 = "A fragment of the ancient crystal that once powered the Ashen Hollow protection barrier. Glows with faint blue light when held. Empowers magical weapons and can be used to open shadow-sealed doors."
const itemBody3 = "+10% magic damage against shadow creatures. +5% resistance to corruption. Glows in dark areas."

const skillBody1 = "Offensive Magic / Destruction Spell"
const skillBody2 = "Hurls a blazing ball of fire that explodes on impact. Deals splash damage to multiple enemies. Higher levels increase explosion radius and burn damage over time."
const skillBody3 = "Mana Cost: 25. Cast Time: 0.5s. Range: 30 meters. Cooldown: 8 seconds."
const skillBody4 = "Effective against ice-based enemies and plant-based creatures. Can be combined with other spells for combo damage."

export const categoryMocks: Record<WriterCategory, GeneratedContent> = {
  story: {
    title: "Ashen Hollow",
    sections: [
      { heading: "Village Overview", body: storyBody1 },
      { heading: "Key NPCs", body: storyBody2 },
      { heading: "Quest Hook", body: storyBody3 },
      { heading: "Notable Locations", body: storyBody4 },
    ],
  },
  dialogue: {
    title: "Elder Mira - Opening Dialogue",
    sections: [
      { heading: "Dialogue", body: dialogueBody1 },
      { heading: "Delivery", body: dialogueBody2 },
      { heading: "Closing", body: dialogueBody3 },
    ],
  },
  quest: {
    title: "The Last Ember",
    sections: [
      { heading: "Quest Objective", body: questBody1 },
      { heading: "Starting Location", body: questBody2 },
      { heading: "Rewards", body: questBody3 },
    ],
  },
  character: {
    title: "Elder Mira",
    sections: [
      { heading: "Basic Information", body: charBody1 },
      { heading: "Appearance", body: charBody2 },
      { heading: "Personality", body: charBody3 },
      { heading: "Background", body: charBody4 },
    ],
  },
  item: {
    title: "Crystal Shard of Ashen Hollow",
    sections: [
      { heading: "Item Type", body: itemBody1 },
      { heading: "Description", body: itemBody2 },
      { heading: "Properties", body: itemBody3 },
    ],
  },
  skill: {
    title: "Fireball",
    sections: [
      { heading: "Skill Type", body: skillBody1 },
      { heading: "Effect", body: skillBody2 },
      { heading: "Stats", body: skillBody3 },
      { heading: "Notes", body: skillBody4 },
    ],
  },
}