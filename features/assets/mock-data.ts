import type { AssetCategoryItem, GeneratedAsset, AssetCategory } from "./types"

export const assetCategories: AssetCategoryItem[] = [
  { id: "character", label: "Character", description: "NPCs and heroes" },
  { id: "environment", label: "Environment", description: "Scenes and locations" },
  { id: "weapon", label: "Weapon", description: "Arms and gear" },
  { id: "item", label: "Item", description: "Props and objects" },
  { id: "creature", label: "Creature", description: "Monsters and beasts" },
  { id: "ui", label: "UI", description: "Interface elements" },
  { id: "icon", label: "Icon", description: "Icons and symbols" },
]

export const assetExamplePrompts: Record<AssetCategory, string[]> = {
  "character": [
    "Design a mysterious guardian NPC for a horror puzzle game.",
    "Create a protagonist concept for a dark fantasy RPG.",
    "Generate an elderly scholar character with hidden knowledge.",
  ],
  "environment": [
    "Design a forgotten city street with impossible architecture.",
    "Create a dark forest environment with bioluminescent flora.",
    "Generate an underground temple with shifting walls.",
  ],
  "weapon": [
    "Design a cursed blade that whispers to its wielder.",
    "Create an ancient lantern weapon for a horror game.",
    "Generate a chain weapon made of shadow fragments.",
  ],
  "item": [
    "Design a paradoxical document that rewrites itself.",
    "Create a healing tonic with disturbing side effects.",
    "Generate a key that opens doors in dreams.",
  ],
  "creature": [
    "Design a shadow entity that moves when unobserved.",
    "Create a creature made of ink and paper.",
    "Generate a parasitic entity that feeds on memories.",
  ],
  "ui": [
    "Design a horror game HUD with sanity meter.",
    "Create an inventory screen with cursed item slots.",
    "Generate a dialogue UI with memory fragment display.",
  ],
  "icon": [
    "Design status effect icons for a horror RPG.",
    "Create ability icons for shadow magic spells.",
    "Generate minimap icons for a forgotten city.",
  ],
}

function makeAsset(title: string, sections: [string, string][]): GeneratedAsset {
  return { title, sections: sections.map(([h, b]) => ({ heading: h, body: b })) }
}

const charMysterious = makeAsset("The Hollow Watchman", [
  ["Name", "The Hollow Watchman (虚空看守者)"],
  ["Role", "Guardian of the Forgotten Archives. Neutral entity that tests visitors before granting access to forbidden knowledge."],
  ["Appearance", "A tall figure wrapped in tattered black robes. Face obscured by a porcelain mask with empty eye sockets that leak thin trails of shadow. Hands are elongated with too many joints. Moves with unsettling fluidity, never taking steps but gliding silently."],
  ["Personality", "Ancient, patient, speaks in riddles. Shows curiosity about visitors but maintains distance. Becomes hostile if archives are threatened. Offers cryptic guidance to those who show respect."],
  ["Backstory", "Once a human archivist who volunteered to become the eternal guardian. Over centuries, their humanity eroded, leaving only the duty. They no longer remember their original name or face."],
  ["Visual Style", "Dark Victorian aesthetic with supernatural elements. Mask should be ornate but cracked. Robes flow unnaturally, suggesting non-corporeal form beneath."],
])

const charProtagonist = makeAsset("Kael, the Vein-Touched", [
  ["Name", "Kael, the Vein-Touched"],
  ["Role", "Player character. A former soldier who survived contact with the Vein and gained the ability to perceive hidden truths at the cost of slowly losing their own identity."],
  ["Appearance", "Lean build, scarred face with vein-like patterns glowing faintly beneath the skin. Wears practical leather armor reinforced with metal plates. Carries a broken sword that resonates with Vein energy."],
  ["Personality", "Determined but haunted. Struggles between using Vein powers and preserving humanity. Pragmatic in combat, compassionate with NPCs."],
  ["Backstory", "Survived a Vein outbreak that destroyed their village. The only survivor because the Vein chose to mark rather than consume them. Now seeks to understand why and find a way to reverse the corruption."],
  ["Visual Style", "Weathered warrior with subtle supernatural corruption. Glowing veins should be dim and pulse slowly. Armor shows signs of improvised repairs."],
])

const charScholar = makeAsset("Elder Mira", [
  ["Name", "Elder Mira (米拉长者)"],
  ["Role", "Mentor figure and quest giver. Possesses forbidden knowledge about the world's true nature but reveals it slowly through cryptic dialogue."],
  ["Appearance", "Elderly woman with silver hair tied in elaborate braids. Wears layered robes in deep purple and black. Eyes are milky white but seem to see more than healthy eyes. Carries a staff topped with a crystal that contains a miniature storm."],
  ["Personality", "Wise, manipulative in a well-meaning way, speaks in metaphors. Genuinely cares about the player's success but has her own agenda. Never gives direct answers."],
  ["Backstory", "Former leader of the Arcane Order who was exiled for researching the Vein's origins. Has spent 40 years in isolation, piecing together the truth."],
  ["Visual Style", "Mystical elder with subtle menace. Robes should have hidden symbols that become visible in certain light. Crystal staff casts dynamic shadows."],
])

const envCity = makeAsset("The Lanternless Streets", [
  ["Location Name", "The Lanternless Streets (无灯街道)"],
  ["Environment Description", "A narrow street in the forgotten city where all light sources fail. Buildings lean at impossible angles, creating a tunnel-like effect. The ground is cobblestone worn smooth by countless footsteps that left no trace."],
  ["Architecture", "Gothic-Victorian hybrid with impossible geometry. Buildings have doors that lead to different streets than expected. Windows reflect scenes from different times. Rooftops connect via rickety bridges and clotheslines."],
  ["Lighting", "No natural or artificial light functions here. The only illumination comes from bioluminescent moss that grows in patches, casting an eerie blue-green glow. Shadows behave incorrectly, moving independently of their sources."],
  ["Atmosphere", "Oppressive silence broken only by distant whispers and the sound of paper rustling. Air feels thick and tastes of old books. Time flows inconsistently - clocks run backwards or stop entirely."],
  ["Required Assets", "Modular building pieces, street props (abandoned carts, broken lampposts), bioluminescent moss decals, skybox with impossible clouds, ambient particle effects (floating dust, paper fragments)."],
])

const envForest = makeAsset("Whispering Hollow", [
  ["Location Name", "Whispering Hollow (低语谷)"],
  ["Environment Description", "A dense forest where the trees grow in spirals and their roots form natural archways. The canopy is so thick that the forest floor exists in perpetual twilight. Bioluminescent fungi provide the only light."],
  ["Architecture", "Natural formations that resemble ruins. Hollow trees contain hidden chambers. Root systems form staircases and bridges. Fallen logs have been carved with ancient symbols by unknown hands."],
  ["Lighting", "Dappled bioluminescence from fungi and fireflies. Occasional shafts of light pierce the canopy at impossible angles. The glow shifts colors based on the player's sanity level."],
  ["Atmosphere", "The trees whisper when wind passes through them, forming almost-words. The forest feels alive and watchful. Paths rearrange when not observed. Safe zones are rare and marked by stone cairns."],
  ["Required Assets", "Spiral tree models with modular variations, bioluminescent flora set, root bridge pieces, stone cairn props, atmospheric fog volumes, animated firefly particles."],
])

const envTemple = makeAsset("The Shifting Sanctum", [
  ["Location Name", "The Shifting Sanctum (移动圣殿)"],
  ["Environment Description", "An underground temple built by a civilization that understood non-Euclidean geometry. Rooms connect in ways that defy three-dimensional space. The architecture changes subtly when not directly observed."],
  ["Architecture", "Smooth stone walls with geometric patterns that seem to move in peripheral vision. Pillars that support nothing and yet cannot be moved. Floors with mosaic patterns that form different images based on viewing angle."],
  ["Lighting", "Crystalline formations embedded in walls emit soft ambient light. Occasional braziers burn with cool blue flames that cast no heat. Shadows pool in corners and sometimes move independently."],
  ["Atmosphere", "Reverent and unsettling. The air is dry and smells of dust and ozone. Sound behaves strangely - echoes arrive before the original noise. The temple feels simultaneously ancient and newly constructed."],
  ["Required Assets", "Modular stone architecture kit, crystalline light fixtures, animated mosaic textures, non-Euclidean doorway transitions, ambient dust particles, reverberant audio zones."],
])

const weaponBlade = makeAsset("Whisperblade", [
  ["Weapon Name", "Whisperblade (低语之刃)"],
  ["Type", "One-handed curved sword"],
  ["Lore", "Forged from the crystallized tears of a fallen god. The blade absorbed the dying deity's final words, which it now whispers to any who wield it. Each previous owner's final moments are recorded in its edge."],
  ["Appearance", "Slim curved blade with iridescent surface that shifts between deep purple and midnight blue. The fuller contains microscopic runes that pulse with inner light. Handle wrapped in leather that feels warm and alive. Guard shaped like grasping hands."],
  ["Special Ability", "Voice of the Fallen: On critical hits, the blade whispers enemy weaknesses, revealing resistances and vulnerabilities. At low health, the whispers become screams that boost damage but drain sanity."],
])

const weaponLantern = makeAsset("The Archive Lantern", [
  ["Weapon Name", "The Archive Lantern (档案提灯)"],
  ["Type", "Off-hand light source / Magic catalyst"],
  ["Lore", "Created by the first Archivist to navigate the darkness between records. The flame burns with the essence of preserved memories, consuming them for fuel while revealing hidden truths."],
  ["Appearance", "Brass lantern with intricate filigree depicting scenes of forgotten histories. The glass panels are slightly milky, as if fogged by breath. Flame burns silver-white and casts no shadows. Handle is wrapped in pages from burned books."],
  ["Special Ability", "Memory Light: Reveals hidden messages and invisible enemies. Can be thrown to create temporary safe zones. Burns collected documents to restore health. Overuse causes the flame to turn red and attract hostile entities."],
])

const weaponChain = makeAsset("Shadowbind Chain", [
  ["Weapon Name", "Shadowbind Chain (影缚链)"],
  ["Type", "Mid-range whip/chain weapon"],
  ["Lore", "Forged from the shadows of executed prisoners. Each link contains a fragment of their final moments. The chain seeks living targets with unnatural hunger, binding their shadows to prevent escape."],
  ["Appearance", "Segments of solidified shadow connected by faint threads of silver light. The chain seems two-dimensional from certain angles. When in motion, it leaves afterimages that persist for several seconds. Handle is cold iron wrapped in prayer strips."],
  ["Special Ability", "Shadow Bind: Successful hits tether enemies, reducing their movement speed. Can pull enemies toward the wielder or swing from anchored points. Ultimate ability: creates a web of shadows that traps all enemies in an area."],
])

const itemDocument = makeAsset("The Self-Writing Record", [
  ["Item Name", "The Self-Writing Record (自写记录)"],
  ["Type", "Quest item / Key"],
  ["Description", "A leather-bound journal that fills itself with text describing events that haven't happened yet. The handwriting changes to match whoever reads it. Some pages are blank, waiting for the reader to make choices that haven't been presented."],
  ["Mechanics", "Reading it provides hints about upcoming challenges. Certain pages can be torn out and used as keys for specific doors. Writing in it with blood permanently alters future events. Overuse causes the reader to appear in its pages as a character."],
])

const itemTonic = makeAsset("Widow's Tears", [
  ["Item Name", "Widow's Tears (寡妇之泪)"],
  ["Type", "Consumable healing item"],
  ["Description", "A vial of iridescent liquid that smells of rain and regret. The label claims it was distilled from the tears of a thousand grieving widows, though this is likely metaphorical. Probably."],
  ["Mechanics", "Restores 60% HP over 10 seconds. Side effect: during healing, the player hears whispered conversations between people who don't exist. Repeated use causes ghostly figures to appear at the edge of vision. High addiction potential."],
])

const itemKey = makeAsset("The Somnambulist Key", [
  ["Item Name", "The Somnambulist Key (梦游者之钥)"],
  ["Type", "Progression key"],
  ["Description", "A brass key with teeth that rearrange themselves when not observed. Warm to the touch and emits a faint hum. The bow is shaped like a sleeping eye."],
  ["Mechanics", "Opens doors that only exist in dreams. Using it near sleeping enemies traps them in nightmares. Can be combined with other keys to create master keys for entire areas. Inserting it into the player's own shadow reveals a hidden inventory."],
])

const creatureShadow = makeAsset("The Unobserved", [
  ["Creature Name", "The Unobserved (未观察者)"],
  ["Size", "Humanoid, roughly 1.8m tall"],
  ["Behavior", "Passive when observed, extremely aggressive when unobserved. Moves only in peripheral vision. Cannot exist in direct light but can manipulate shadows to extinguish light sources."],
  ["Attack Pattern", "When unobserved: rapid movement toward target, shadow tendril strikes. When observed: freezes in place but can project nightmare images into observer's mind. Group behavior: multiple entities coordinate to break line of sight."],
  ["Weakness", "Direct light paralyzes them. Mirrors force them to observe themselves, causing them to attack their own reflection. UV light causes them to dissipate temporarily."],
])

const creatureInk = makeAsset("The Inkwraith", [
  ["Creature Name", "The Inkwraith (墨灵)"],
  ["Size", "Variable - can compress to puddle size or expand to fill rooms"],
  ["Behavior", "Seeks paper and written materials to consume. Can slide through cracks and under doors. Avoids water. Attracted to the sound of writing."],
  ["Attack Pattern", "Engulfs targets in ink, causing suffocation and blindness. Can form temporary solid appendages for striking. When damaged, splatters ink that spawns smaller versions. Can hide in documents and ambush readers."],
  ["Weakness", "Water dissolves their form. Fire burns them but releases toxic smoke. Paper wards placed on doors repel them. Empty books can be used as traps."],
])

const creatureParasite = makeAsset("Memory Leech", [
  ["Creature Name", "Memory Leech (记忆水蛭)"],
  ["Size", "Small - palm-sized when dormant, can expand to engulf a head"],
  ["Behavior", "Attaches to sleeping victims and feeds on memories. Victims wake with gaps in their recollection. The leech grows larger and more intelligent with each memory consumed. Eventually mimics the victim's personality."],
  ["Attack Pattern", "Stealth approach during rest/save points. Fast lunge to attach to face. Once attached, drains memories over time, reducing max MP and eventually HP. Can detach and flee if threatened, leaving victim confused."],
  ["Weakness", "Cannot attach to targets with strong emotional memories. Loud noises startle them. Salt burns their skin. If the host recalls the stolen memory vividly, the leech is forced to detach."],
])

const uiHud = makeAsset("Sanity HUD System", [
  ["UI Name", "Sanity HUD System"],
  ["Purpose", "Display player health, sanity, light source status, and key items in a diegetic interface that reinforces the horror atmosphere."],
  ["Layout Description", "Minimalist design with elements positioned at screen edges. Health shown as cracked porcelain mask in bottom-left. Sanity as a flickering candle flame in bottom-right. Light source as a depleting oil gauge at top. Key items displayed as small tokens along the left edge."],
  ["Interaction", "Elements react to game state: mask cracks further when damaged, candle gutters when sanity drops, oil gauge shows ripples when moving. Hovering over elements reveals lore text. Low sanity causes UI elements to shift position and display false information."],
])

const uiInventory = makeAsset("Cursed Inventory Screen", [
  ["UI Name", "Cursed Inventory Screen"],
  ["Purpose", "Manage items, equipment, and documents. The inventory itself is diegetic - it represents the player's actual bag."],
  ["Layout Description", "Grid-based layout with irregular slots (some items take multiple spaces). Cursed items have red-tinted slots that occasionally twitch. Documents have their own scroll section. Equipment slots shaped like body parts."],
  ["Interaction", "Drag and drop with physics-based feel. Cursed items resist being moved and whisper when selected. Right-clicking shows context menu with examine/use/discard options. Excessive item hoarding causes the bag to appear overstuffed visually."],
])

const uiDialogue = makeAsset("Memory Fragment Dialogue UI", [
  ["UI Name", "Memory Fragment Dialogue UI"],
  ["Purpose", "Display conversations while showing the speaker's emotional state and hidden information through visual metaphors."],
  ["Layout Description", "Speaker portrait on left with subtle distortion effects. Dialogue text appears in center with typewriter animation. Memory fragments - partial images related to the topic - float in background. Choices appear at bottom with preview hints."],
  ["Interaction", "Text speed adjustable. Memory fragments can be clicked to unlock lore. Certain keywords in dialogue are highlighted and can be investigated. Lying NPCs have visual tells in their portraits. Emotional state affects available choices."],
])

const iconStatus = makeAsset("Status Effect Icon Set", [
  ["Icon Name", "Status Effect Icon Set"],
  ["Purpose", "Visual indicators for buffs, debuffs, and conditions in combat and exploration."],
  ["Layout Description", "Circular icons (32x32px) with dark borders and glowing centers. Active effects pulse slowly. Stacking effects show numerical counters. Negative effects have red/crack overlays."],
  ["Interaction", "Hover shows tooltip with effect name, description, and duration. Right-click attempts to cleanse (if possible). Icons rearrange by priority. Expiring effects flash warning colors."],
])

const iconAbility = makeAsset("Shadow Magic Ability Icons", [
  ["Icon Name", "Shadow Magic Ability Icons"],
  ["Purpose", "Represent shadow/void themed abilities in skill trees and hotbars."],
  ["Layout Description", "Diamond-shaped frames (48x48px) with smoky glass texture. Ability symbols rendered in negative space within the diamond. Higher-tier abilities have animated borders."],
  ["Interaction", "Click to activate or assign to hotbar. Cooldown shown as shadow creeping across the diamond. Locked abilities appear as shattered diamonds. Combo abilities link visually when available."],
])

const iconMinimap = makeAsset("Forgotten City Minimap Icons", [
  ["Icon Name", "Forgotten City Minimap Icons"],
  ["Purpose", "Navigation markers for the city's impossible geography."],
  ["Layout Description", "Minimal symbols (16x16px) with subtle glow. Player arrow points in facing direction. Points of interest use distinct shapes. Discovered areas show detailed layout while undiscovered areas are obscured by fog."],
  ["Interaction", "Click POI icons to set waypoints. Legend accessible via corner button. Zoom levels adjust automatically based on area size. Paradox locations cause the minimap to display multiple overlapping layouts."],
])

const allVariants: Record<AssetCategory, GeneratedAsset[]> = {
  "character": [charMysterious, charProtagonist, charScholar],
  "environment": [envCity, envForest, envTemple],
  "weapon": [weaponBlade, weaponLantern, weaponChain],
  "item": [itemDocument, itemTonic, itemKey],
  "creature": [creatureShadow, creatureInk, creatureParasite],
  "ui": [uiHud, uiInventory, uiDialogue],
  "icon": [iconStatus, iconAbility, iconMinimap],
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

export function getAssetMockResult(
  category: AssetCategory,
  prompt: string,
  project: { name: string; gameType: string; worldDescription: string; style: string } | null
): GeneratedAsset {
  const variants = allVariants[category]
  const index = hashString(prompt) % variants.length
  const base = variants[index]

  if (!project) return base

  const contextSection = {
    heading: "Project Context",
    body: `Project: ${project.name} | Type: ${project.gameType} | Style: ${project.style}`,
  }

  const worldSection = {
    heading: "World Reference",
    body: project.worldDescription,
  }

  return {
    title: base.title,
    sections: [contextSection, worldSection, ...base.sections],
  }
}
