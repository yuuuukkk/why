import type { CategoryItem, GeneratedContent, MockPrompt } from "./types"

export const categories = [
  { id: "story", label: "Story" },
  { id: "characters", label: "Characters" },
  { id: "quests", label: "Quests" },
  { id: "dialogue", label: "Dialogue" },
  { id: "items", label: "Items" },
  { id: "skills", label: "Skills" },
] as const

export const categoryItems: CategoryItem[] = [
  { id: "s1", label: "World Lore", category: "story" },
  { id: "s2", label: "Main Quest", category: "story" },
  { id: "s3", label: "Backstory", category: "story" },
  { id: "c1", label: "Elder Mira", category: "characters" },
  { id: "c2", label: "Kael the Wanderer", category: "characters" },
  { id: "c3", label: "Shadow Mage", category: "characters" },
  { id: "q1", label: "Crystal Hunt", category: "quests" },
  { id: "q2", label: "Forest Trials", category: "quests" },
  { id: "q3", label: "Dragon Awakening", category: "quests" },
  { id: "d1", label: "Elder Greeting", category: "dialogue" },
  { id: "d2", label: "Tavern Banter", category: "dialogue" },
  { id: "d3", label: "Boss Threat", category: "dialogue" },
  { id: "i1", label: "Crystal Shard", category: "items" },
  { id: "i2", label: "Forest Map", category: "items" },
  { id: "i3", label: "Enchanted Blade", category: "items" },
  { id: "sk1", label: "Fireball", category: "skills" },
  { id: "sk2", label: "Heal", category: "skills" },
  { id: "sk3", label: "Stealth", category: "skills" },
]

export const examplePrompts: MockPrompt[] = [
  { label: "Create a fantasy village.", text: "Create a fantasy village nestled in ancient mountains, with hidden secrets and a mysterious elder." },
  { label: "Generate an NPC dialogue.", text: "Generate a dialogue for an elder NPC who guards a sacred forest temple and speaks in riddles." },
  { label: "Design a boss fight.", text: "Design an epic boss fight against a Shadow Mage who uses illusions and dark magic." },
  { label: "Write a side quest.", text: "Write a side quest about finding a lost crystal shard hidden in a dangerous cave system." },
  { label: "Generate item descriptions.", text: "Generate descriptions for magical items: a crystal shard, a forest map, and an enchanted blade." },
]

export const mockResult: GeneratedContent = {
  title: "Ashen Hollow",
  sections: [
    {
      heading: "Village Overview",
      body: "A peaceful mountain village hidden inside ancient forests. The settlement is built around a central crystal well that glows faintly at dusk. Stone cottages with moss-covered roofs line narrow winding paths. The air smells of pine and old magic.",
    },
    {
      heading: "Key NPCs",
      body: "Elder Mira serves as the village guardian. She has protected Ashen Hollow for over 40 years, ever since the Great Shadow first appeared. Her knowledge of the surrounding forests is unmatched, and she holds the key to the Crystal Prophecy.",
    },
    {
      heading: "Quest Hook",
      body: "The Crystal of Ashen Hollow has begun to dim. Without its light, the forest creatures grow aggressive and the boundary between worlds weakens. Elder Mira seeks a brave adventurer to venture into the Shadow Caves and retrieve the missing Crystal Shard before the next lunar eclipse.",
    },
    {
      heading: "Notable Locations",
      body: "Crystal Well (village center), Mira\u2019s Study (north cottage), The Hollow Tree (ancient meeting place), Shadow Trail (path leading to the caves), Elder\u2019s Garden (medicinal herbs and rare flowers).",
    },
  ],
}