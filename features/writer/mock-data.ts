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

// ═══════════════════════════════════════════════════════════════════
//  STORY variants
// ═══════════════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════════════
//  DIALOGUE variants (enhanced with choices, mood, conditions)
// ═══════════════════════════════════════════════════════════════════

const dialogueElder: GeneratedContent = {
  title: "Elder Mira - Forest Entrance",
  sections: [
    { heading: "Scene Setup", body: "Location: Forest edge near the Hollow Tree. Time: Twilight. Mood: Wise / Cautious. Trigger: Player approaches for the first time. Condition: Quest state must be ACTIVE." },
    { heading: "Opening Line", body: "[Elder Mira leans on her carved staff, eyes crinkling] You come seeking passage into the heart of the forest? The trees guard their secrets well, young one. But something in your step tells me you are ready to hear what the stones have to say." },
    { heading: "Player Choice A", body: "[Ask about the forest] Mira pauses, then speaks softly: The forest remembers everything. Every footstep, every whisper, every tear. It has watched empires rise and fall. What it reveals depends on what you bring to it. Bring truth, and truth you shall find." },
    { heading: "Player Choice B", body: "[Ask about the Crystal] Her expression darkens. The crystal has dimmed. I feel it in my bones. Without its light, the boundary weakens. The shadow grows hungry. You must go to the caves. Retrieve what was taken. But beware - not all who enter find their way back." },
    { heading: "Closing", body: "Take this map. It marks the old entrance. Follow the stone cairns. Trust the moss that glows blue at dusk. And remember - the forest listens. Speak only truth within its borders. [Quest updated: Enter the Shadow Caves]" },
  ],
}

const dialogueBoss: GeneratedContent = {
  title: "Shadow Mage - Boss Encounter",
  sections: [
    { heading: "Phase 1: Arrival", body: "[Chamber darkens. Violet flames ignite in empty sockets] So... another fool comes to challenge the inevitable? Your courage is admirable. Your survival, however, is not guaranteed. I am Vesper. And you are trespassing." },
    { heading: "Phase 2: Mid-fight", body: "[Illusions multiply. Laughter echoes from all directions] Can you tell which is real? Reality is merely a suggestion to those who command the shadows. You fight well for a mortal. Pity I must crush you. [Health < 50% trigger]" },
    { heading: "Phase 3: Desperation", body: "[Shadows converge into a vortex] Enough games. The Void calls, and I shall answer it through you! [Arena changes: floor cracks, void tendrils emerge, movement speed reduced by 30%]" },
    { heading: "Defeat", body: "[Mage dissolves into wisps] Impossible... The shadows... they abandon me... NO! [Drops: Crystal Fragment, Shadow Robe, 2,500 XP] The chamber brightens. Corruption fades. A hidden passage opens behind the throne." },
  ],
}

const dialogueMerchant: GeneratedContent = {
  title: "Grim the Merchant - Trading Post",
  sections: [
    { heading: "Greeting", body: "[Counts coins with practiced speed] Ah, a customer with actual gold! Rare these days. What can old Grim procure? Weapons? Maps? Information that could save your life? Everything has a price. Even answers." },
    { heading: "Bargaining", body: "[Holds up a gleaming blade] Finest dwarven steel. 500 gold. No? How about 400 and your word you'll bring me something interesting from the Shadow Caves? A crystal shard, perhaps? I pay well for curiosities." },
    { heading: "Secret Wares", body: "[Lowers voice, glances around] For trusted customers only... I have a map to the hidden vault beneath Valdris castle. Cost? Just your silence. And 2,000 gold. Don't look at me like that - knowledge is the most valuable weapon. [Requires Reputation > 30]" },
    { heading: "Rumor", body: "[Leans in conspiratorially] Heard the Void Cult's been recruiting in the lower districts. Offering power to the desperate. If you're heading that way, watch your back. Shadows have eyes these days." },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//  QUEST variants (enhanced with steps, prerequisites, failure)
// ═══════════════════════════════════════════════════════════════════

const questCrystal: GeneratedContent = {
  title: "The Last Ember",
  sections: [
    { heading: "Quest Overview", body: "The sacred Ember of the temple has been stolen by corrupted shadow cultists. You must venture into the Abandoned Temple deep beneath Mount Cinder and recover it before the winter solstice." },
    { heading: "Prerequisites", body: "Level 15+. Completed quest: The Temple Sentinel. Item required: Temple Key (obtained from Roran). Party size: 1-4 players." },
    { heading: "Objective Steps", body: "1. Speak with Roran at the Temple Entrance to receive blessing. 2. Navigate the Temple Halls (defeat 3 cultist patrols). 3. Solve the Rune Puzzle to open the inner sanctum. 4. Defeat the Shadow Cult Leader. 5. Retrieve the Ember and escape before the temple collapses." },
    { heading: "Rewards", body: "Emberblade legendary sword + 5,000 XP + Temple Vendor access + Reputation with Solara House (+50) + Achievement: Flame Bearer." },
    { heading: "Failure Conditions", body: "Temple collapses after 30 minutes. If the Ember is not retrieved in time, the quest fails and must be restarted. Dying inside sends you to the nearest graveyard with a 10% XP penalty." },
  ],
}

const questDragon: GeneratedContent = {
  title: "Dragon Awakening",
  sections: [
    { heading: "Quest Overview", body: "The ancient dragon Thalorix has awakened from a thousand-year slumber. Find the three Dragon Seal fragments and perform the Binding Ritual to return him to sleep before he razes the northern provinces." },
    { heading: "Prerequisites", body: "Level 25+. Completed: The Last Ember. Dragon Rider faction standing: Friendly+. Requires flying mount or Dragon Rider companion." },
    { heading: "Objective Steps", body: "1. Fragment of Flame: Volcanic Crater, defeat Fire Elemental Lord. 2. Fragment of Ice: Frozen Spire, overcome frost giant trials. 3. Fragment of Storm: Sky Temple, accessible only by air. 4. Perform Binding Ritual at the Dragon Peak altar during a thunderstorm. 5. Survive Thalorix's final assault for 3 minutes until the ritual completes." },
    { heading: "Rewards", body: "Dragon Rider companion (permanent) + Thalorix Scale Armor set + 10,000 XP + Access to Dragon Forge + Title: Dragonslayer + Mount: Stormwing Drake." },
    { heading: "Failure Conditions", body: "If Thalorix is killed instead of bound, the northern ley lines destabilize, triggering a region-wide corruption event. The quest becomes unavailable for 7 days." },
  ],
}

const questRescue: GeneratedContent = {
  title: "Rescue from the Void",
  sections: [
    { heading: "Quest Overview", body: "The Void Cult has kidnapped the Arcane Order's Grand Magister. Infiltrate their hidden stronghold in the Wasted Lands and rescue him before he is sacrificed in the Eclipse Ritual." },
    { heading: "Prerequisites", body: "Level 20+. Arcane Order standing: Friendly+. Stealth or combat approach viable. Recommended party: 1 rogue + 1 mage + 1 tank." },
    { heading: "Objective Steps", body: "Approach 1 - Stealth: Use ventilation shafts (Lockpicking 40+). Approach 2 - Combat: Storm front gates with Loyalist Guard allies. Approach 3 - Deception: Disguise as cult initiate (Persuasion 35+). Rescue target: Grand Magister Alaric (healable NPC, must survive escape)." },
    { heading: "Rewards", body: "Grand Magister's Grimoire (unique spellbook) + Arcane Order ally status + 8,000 XP + Permanent +15% magic resistance + Access to Order's restricted library." },
    { heading: "Failure Conditions", body: "If Magister dies, quest fails permanently. If ritual completes (45-minute timer), a Void Rift opens in the Wasted Lands, spawning elite shadow creatures for 24 hours." },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//  CHARACTER variants
// ═══════════════════════════════════════════════════════════════════

const charMira: GeneratedContent = {
  title: "Elder Mira",
  sections: [
    { heading: "Basic Information", body: "Name: Elder Mira. Age: 62. Role: Village Chief & Guardian. Location: Ashen Hollow. Faction: Neutral (protects the village). Voice: Soft, measured, speaks in riddles." },
    { heading: "Appearance", body: "Silver hair tied in a bun, weathered face with deep knowing eyes. Wears a simple wool dress dyed in forest green and leather boots. Carries a carved oak staff with a crystal tip that glows faintly when magic is near." },
    { heading: "Personality", body: "Wise, calm, patient. Speaks in riddles, rarely hurried. Has seen generations come and go. Guarded with outsiders, but deeply kind once she trusts you. Never raises her voice. Believes everything happens for a reason." },
    { heading: "Background", body: "Born in Ashen Hollow, became guardian after her mother passed during the Great Shadow incursion. She was the last adventurer to return from the Shadow Caves alive, though she never speaks of what she saw there. Carries the secret of the Crystal Prophecy." },
    { heading: "Dialogue Tags", body: "Greeting: Welcoming but cautious. Quest giver: Main storyline. Romance: Not available. Combat: Non-combatant. Gift preference: Herbs, crystals, ancient texts." },
  ],
}

const charKael: GeneratedContent = {
  title: "Kael the Wanderer",
  sections: [
    { heading: "Basic Information", body: "Name: Kael Thornwood. Age: 28. Role: Mercenary & Explorer. Location: Travels between settlements. Faction: Free Companies. Voice: Casual, witty, slight northern accent." },
    { heading: "Appearance", body: "Tall and lean with sun-bronzed skin. Shaggy brown hair, hazel eyes that miss nothing. Wears a patchwork leather coat covered in travel stains and a wide-brimmed hat. Dual-wields short swords." },
    { heading: "Personality", body: "Restless, charming, fiercely independent. Has a soft spot for underdogs. Hates staying in one place too long. Speaks plainly but with surprising wisdom from his travels. Makes jokes in tense situations." },
    { heading: "Background", body: "Orphaned during the Great Shadow incursion, raised by traveling merchants. Learned swordplay from a retired knight and survival from forest rangers. Seeks the truth about his parents' fate. Secretly fears the Void." },
    { heading: "Dialogue Tags", body: "Greeting: Friendly, informal. Quest giver: Side quests & rumors. Romance: Available (medium difficulty). Combat: Companion (rogue class). Gift preference: Maps, rare alcohol, travel stories." },
  ],
}

const charShadowMage: GeneratedContent = {
  title: "The Shadow Mage (Vesper)",
  sections: [
    { heading: "Basic Information", body: "Name: Unknown (called Vesper by cultists). Age: Unknown (appears mid-30s). Role: Void Cult Leader. Location: Abandoned Temple, Mount Cinder. Faction: Void Cult. Voice: Smooth, melodic, speaks in poetic threats." },
    { heading: "Appearance", body: "Pale skin, violet eyes that glow in darkness. Black robes embroidered with shifting silver runes. Moves silently, leaving a faint trail of shadow in his wake. Hands are scarred with self-inflicted ritual marks." },
    { heading: "Personality", body: "Calculating, patient, speaks in poetic threats. Believes the Void is the natural state of existence and mortals are merely delaying the inevitable. Respects strength but despises mercy. Never lies - sees truth as a weapon." },
    { heading: "Background", body: "Former Arcane Order prodigy who became obsessed with void magic. Expelled for forbidden experiments on living subjects. Disappeared for a decade before resurfacing as the cult leader. Rumored to have made a pact with a Void Prince." },
    { heading: "Dialogue Tags", body: "Greeting: Ominous, theatrical. Boss encounter: Multi-phase. Romance: Not available. Combat: Boss (shadow mage class). Gift preference: Void Essence, forbidden texts, corrupted artifacts." },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//  ITEM variants (enhanced with rarity, drop source, crafting)
// ═══════════════════════════════════════════════════════════════════

const itemCrystal: GeneratedContent = {
  title: "Crystal Shard of Ashen Hollow",
  sections: [
    { heading: "Item Type", body: "Quest Item / Crafting Material. Rarity: Rare. Stackable: Yes (max 20). Weight: 0.3 kg. Value: 150 gold." },
    { heading: "Description", body: "A fragment of the ancient crystal that once powered the Ashen Hollow protection barrier. Glows with faint blue light when held. Warm to the touch. The surface is covered in microscopic runes that shift when observed directly." },
    { heading: "Properties", body: "Equipped: +10% magic damage against shadow creatures. +5% resistance to corruption. Glows in dark areas (10m radius). Can be combined with 3 other shards to restore the Ashen Hollow barrier." },
    { heading: "Drop Source", body: "Shadow Wraiths (15% drop rate), Cave Guardian (guaranteed 2-4), Crystal Spider nests (rare). Also found in Shadow Caves treasure chests." },
    { heading: "Crafting Uses", body: "Crystal Barrier Amulet (requires 5 shards + leather strap). Shadowbane Dagger (requires 3 shards + iron ingot). Potion of True Sight (requires 1 shard + moonwater)." },
  ],
}

const itemBlade: GeneratedContent = {
  title: "Emberblade",
  sections: [
    { heading: "Item Type", body: "Legendary Weapon / Greatsword. Rarity: Legendary. Unique: Yes (only one per server). Weight: 4.5 kg. Value: 5,000 gold." },
    { heading: "Description", body: "Forged in dragon fire and tempered with void essence. The blade constantly emits a low heat that warms the wielder's hands. Runes along the fuller glow when enemies are near. The crossguard is shaped like a dragon's wing." },
    { heading: "Stats", body: "Damage: 85-120 (Fire type). Attack Speed: 1.2s. Durability: Infinite (self-repairing). Critical Hit: +15%. Special: Flame Burst - 20% chance to release a cone of fire on hit, dealing 150% weapon damage to all enemies in a 90-degree arc." },
    { heading: "Drop Source", body: "Reward from quest: The Last Ember. Cannot be traded or sold. Bind on pickup. If discarded, returns to the Temple Vault after 24 hours." },
    { heading: "Upgrade Path", body: "Emberblade + Dragon Scale = Draconic Emberblade (damage +20, adds dragon roar effect). Emberblade + Void Essence x10 = Corrupted Emberblade (adds shadow damage, -10 reputation with all factions)." },
  ],
}

const itemMap: GeneratedContent = {
  title: "Cartographer's Compass",
  sections: [
    { heading: "Item Type", body: "Rare Tool / Accessory. Rarity: Rare. Unique: No. Weight: 0.1 kg. Value: 800 gold." },
    { heading: "Description", body: "An ornate brass compass with a crystal needle that points toward places of magical significance. The face displays terrain in holographic projection when activated. Engraved with coordinates to locations the owner has visited." },
    { heading: "Properties", body: "Reveals hidden paths within 50 meters. Detects magical traps (pulsing red warning). Marks unvisited locations with golden highlights. Cannot be used in Void-tainted areas. Daily charge: 10 uses, recharges at dawn." },
    { heading: "Drop Source", body: "Quest reward: The Lost Cartographer. Rare drop from Arcane Order vendors. Can be crafted by master enchanters (requires Crystal Shard x2 + Brass Compass + Enchanting 50)." },
    { heading: "Upgrade Path", body: "Cartographer's Compass + Void Lens = Explorer's Eye (adds underwater path detection). Cartographer's Compass + Ancient Map = Wayfinder's Legacy (reveals all fast travel points in current region)." },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//  SKILL variants (enhanced with levels, combos, animations)
// ═══════════════════════════════════════════════════════════════════

const skillFireball: GeneratedContent = {
  title: "Fireball",
  sections: [
    { heading: "Skill Type", body: "Offensive Magic / Destruction Spell. Element: Fire. Casting Style: Projectile. Target: Area of Effect." },
    { heading: "Effect", body: "Hurls a blazing ball of fire that explodes on impact. Deals splash damage to all enemies within 5 meters of the impact point. Applies Burn debuff (3% max health damage per second for 5 seconds). Higher levels increase explosion radius and burn duration." },
    { heading: "Base Stats", body: "Mana Cost: 25. Cast Time: 0.5s. Range: 30 meters. Cooldown: 8 seconds. Damage: 60-80 (fire) + Burn." },
    { heading: "Level Progression", body: "Level 2: +10% damage, +1m radius. Level 3: Double Burn duration. Level 5: Adds knockback effect. Level 7: 25% chance to cast a second fireball. Level 10: Ultimate - Meteor Storm (3 fireballs in rapid succession)." },
    { heading: "Combo Potential", body: "Fireball + Ice Spear = Steam Blast (area blind). Fireball + Wind Gust = Firestorm (larger AoE). Fireball + Oil Trap = Inferno (massive damage over time)." },
    { heading: "Animation", body: "Caster raises hand, palm up. A marble-sized flame appears and rapidly expands. Arm swings forward, releasing the fireball in a bright streak. Impact creates a spherical explosion with ember particles." },
  ],
}

const skillHeal: GeneratedContent = {
  title: "Restoration Surge",
  sections: [
    { heading: "Skill Type", body: "Support Magic / Healing Spell. Element: Life. Casting Style: Channeled. Target: Single ally or self." },
    { heading: "Effect", body: "Channels pure life energy into a target, healing wounds and removing minor debuffs (poison, bleed, burn). Overhealing converts to a temporary shield that absorbs damage for 10 seconds. Shield strength equals 50% of overheal amount." },
    { heading: "Base Stats", body: "Mana Cost: 40. Cast Time: 1.5s (interruptible). Range: 25 meters. Cooldown: 12 seconds. Heal: 150 + (INT x 2.5)." },
    { heading: "Level Progression", body: "Level 2: +15% base heal. Level 3: Removes moderate debuffs (curse, fear). Level 5: Shield duration +5s. Level 7: Can target 2 allies simultaneously. Level 10: Ultimate - Divine Resurrection (revives fallen ally with 30% health, 5-minute cooldown)." },
    { heading: "Combo Potential", body: "Restoration Surge + Fireball = Phoenix Strike (heal + fire damage to nearby enemies). Restoration Surge + Shield Wall = Bastion (shield absorbs 200% more damage). Restoration Surge x3 on same target = Overflow (target gains +20% max health for 30s)." },
    { heading: "Animation", body: "Caster places hands together, golden light gathers between palms. Light streams toward target in a flowing ribbon. Target glows briefly with warm golden aura. Healing numbers appear in green with leaf particle effects." },
  ],
}

const skillStealth: GeneratedContent = {
  title: "Shadow Walk",
  sections: [
    { heading: "Skill Type", body: "Utility / Stealth Ability. Element: Shadow. Casting Style: Instant. Target: Self." },
    { heading: "Effect", body: "Meld into shadows, becoming invisible to enemies for a short duration. First attack from stealth deals 200% damage and breaks invisibility. Movement speed increased by 30% while stealthed. Footstep sounds are completely silenced." },
    { heading: "Base Stats", body: "Mana Cost: 15. Duration: 6 seconds. Cooldown: 15 seconds. Breaks on: Taking damage, casting non-stealth spells, interacting with objects, attacking (lasts for one hit)." },
    { heading: "Level Progression", body: "Level 2: Duration +2s. Level 3: Movement speed +45%. Level 5: First stealth attack has 100% critical chance. Level 7: Can pickpocket while stealthed. Level 10: Ultimate - Shadow Clone (leave behind a decoy that enemies attack for 5s)." },
    { heading: "Combo Potential", body: "Shadow Walk + Backstab = Assassinate (instant kill non-boss enemies below 30% health). Shadow Walk + Trap = Ambush (trap activation is silent). Shadow Walk + Ally = Covert Extraction (carry downed ally while invisible)." },
    { heading: "Animation", body: "Caster's form ripples like heat distortion, then fades into translucent shadow. A faint purple outline remains visible to allies. On attack, shadow condenses into the weapon strike with a burst of dark particles. Stealth break creates a brief smoke puff." },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//  Prompt-based selector
// ═══════════════════════════════════════════════════════════════════

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