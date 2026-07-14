export interface WorkflowStepData {
  id: string
  title: string
  prompt: string
  result: {
    title: string
    sections: { heading: string; body: string }[]
  }
}

export const workflowStepsData: WorkflowStepData[] = [
  {
    id: "idea",
    title: "Idea",
    prompt: "Generate a game concept document",
    result: {
      title: "Game Concept: Shadow of the Hollow",
      sections: [
        { heading: "Core Concept", body: "A dark fantasy action RPG where players explore a world slowly being consumed by the Void. The twist: the protagonist is slowly becoming a shadow creature themselves, unlocking new powers but risking their humanity." },
        { heading: "Target Audience", body: "Mature players (16+) who enjoy deep lore, challenging combat, and moral ambiguity. Fans of Dark Souls, Hollow Knight, and The Witcher." },
        { heading: "Unique Selling Point", body: "The Corruption System - as players use shadow powers, they visually transform. Too much corruption and NPCs refuse to interact, merchants charge more, and the ending changes dramatically." },
        { heading: "Core Loop", body: "Explore corrupted zones -> defeat shadow creatures -> collect crystal shards -> upgrade abilities at safe havens -> push deeper into the Void." },
      ],
    },
  },
  {
    id: "game-design",
    title: "Game Design",
    prompt: "Generate gameplay design document",
    result: {
      title: "Gameplay Design Document",
      sections: [
        { heading: "Combat System", body: "Fast-paced melee combat with a stamina-based system. Players can wield swords, staves, or shadow-infused fists. Parrying opens enemies to devastating counter-attacks. Magic consumes both mana and adds corruption." },
        { heading: "Progression", body: "Three skill trees: Warrior (melee damage, armor), Arcanist (spells, corruption resistance), and Shadow (void powers, stealth). Players earn skill points from leveling and completing major quests." },
        { heading: "Difficulty Scaling", body: "Enemies scale with player level but also with corruption level. High corruption makes shadow creatures stronger but grants the player powerful new abilities. Balance is key." },
        { heading: "Economy", body: "Two currencies: Gold (standard) and Void Essence (dropped by shadow creatures). Void Essence is used for shadow upgrades and rare items. Spending too much Void Essence accelerates corruption." },
      ],
    },
  },
  {
    id: "art",
    title: "Art",
    prompt: "Generate art direction and asset requirements",
    result: {
      title: "Art Direction Document",
      sections: [
        { heading: "Visual Style", body: "Hand-painted 2.5D with a dark, moody palette. Environments transition from warm, vibrant safe zones to cold, desaturated corrupted areas. Character designs mix medieval European fantasy with cosmic horror elements." },
        { heading: "Character Design", body: "Protagonist starts as a standard knight but progressively gains shadow tendrils, glowing cracks, and a darker silhouette. NPC designs reflect their role - merchants are round and colorful, warriors are angular and armored." },
        { heading: "Environment Art", body: "Five distinct biomes: Ashen Hollow (village, warm tones), Shadow Caves (bioluminescent blue-green), Void Wastes (desaturated purple-gray), Mount Cinder (fiery orange-red), and the Crystal Spire (ethereal white-gold)." },
        { heading: "UI Design", body: "Minimalist dark UI with thin borders and subtle glow effects. Health bar shows corruption level with a second, growing shadow bar. Inventory uses a grid-based drag-and-drop system with item rarity colors." },
      ],
    },
  },
  {
    id: "programming",
    title: "Programming",
    prompt: "Generate technical implementation plan",
    result: {
      title: "Technical Implementation Plan",
      sections: [
        { heading: "Engine", body: "Unity 2022.3 LTS with URP for optimized rendering. Target platforms: PC (Steam), PlayStation 5, Xbox Series X. Expected development time: 24 months with a team of 15." },
        { heading: "Core Systems", body: "State machine for combat (Idle, Attack, Dodge, Cast, Hit, Dead). Event-driven quest system with scriptable objects. Procedural dungeon generation using cellular automata for cave systems." },
        { heading: "AI Behavior", body: "Behavior trees for enemy AI with three archetypes: Aggressive (rush player), Tactical (keep distance, use cover), and Swarm (coordinate with nearby enemies). Bosses use multi-phase state machines with pattern recognition." },
        { heading: "Save System", body: "JSON-based save files with automatic checkpoints at safe havens. Manual save slots: 5. Cloud save integration via Steamworks and console APIs. Save file size target: under 2MB." },
      ],
    },
  },
  {
    id: "testing",
    title: "Testing",
    prompt: "Generate QA and testing strategy",
    result: {
      title: "QA & Testing Strategy",
      sections: [
        { heading: "Test Plan", body: "Phase 1: Unit testing for all combat calculations, inventory logic, and save/load systems. Phase 2: Integration testing for quest flow and NPC interactions. Phase 3: Playtesting with 50 external testers for difficulty balance." },
        { heading: "Bug Tracking", body: "Jira for internal bug tracking. Categories: Critical (crash/blocker), Major (broken feature), Minor (visual glitch), Polish (enhancement). Target: zero critical bugs at launch." },
        { heading: "Performance Targets", body: "PC: 60fps at 1080p on GTX 1060. Console: 60fps at 4K with dynamic resolution scaling. Loading times: under 3 seconds between areas. Memory usage: under 4GB RAM." },
        { heading: "Accessibility", body: "Color-blind modes (Deuteranopia, Protanopia, Tritanopia). Full controller support with remappable bindings. Subtitle system with speaker names and sound effect descriptions. Adjustable difficulty at any time." },
      ],
    },
  },
  {
    id: "publish",
    title: "Publish",
    prompt: "Generate launch and marketing plan",
    result: {
      title: "Launch & Marketing Plan",
      sections: [
        { heading: "Platform Strategy", body: "Primary: Steam (PC) for early access launch. Secondary: Epic Games Store exclusive deal for full release. Console ports: PS5 and Xbox Series X 6 months after PC launch. Mobile: not planned." },
        { heading: "Marketing Timeline", body: "6 months before launch: Announcement trailer + press demo. 3 months: Closed beta + influencer early access. 1 month: Launch trailer + review embargo lift. Launch week: Twitch drops + Reddit AMA." },
        { heading: "Pricing", body: "Early Access: $19.99. Full Release: $29.99. Deluxe Edition: $39.99 (includes DLC pass + soundtrack). Regional pricing adjusted for BRIC markets. Launch discount: 15% for first week." },
        { heading: "Post-Launch", body: "Free content updates every 2 months. Paid DLC expansion planned for Year 2. Community mod support via Steam Workshop. Seasonal events (Halloween, Winter Solstice) with unique quests and cosmetics." },
      ],
    },
  },
]