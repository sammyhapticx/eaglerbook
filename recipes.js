const RECIPES = [
    // --- BASIC & UTILITY ---
    { name: "Crafting Table", grid: ["Plank","Plank","","Plank","Plank","","","",""], output: "1x Crafting Table" },
    { name: "Stick", grid: ["","Plank","","","Plank","","","",""], output: "4x Stick" },
    { name: "Torch", grid: ["","Coal","","","Stick","","","",""], output: "4x Torch" },
    { name: "Furnace", grid: ["Cobl","Cobl","Cobl","Cobl","","Cobl","Cobl","Cobl","Cobl"], output: "1x Furnace" },
    { name: "Chest", grid: ["Plank","Plank","Plank","Plank","","Plank","Plank","Plank","Plank"], output: "1x Chest" },
    { name: "Bed", grid: ["","","","Wool","Wool","Wool","Plank","Plank","Plank"], output: "1x Bed" },
    { name: "Ladder", grid: ["Stick","","Stick","Stick","Stick","Stick","Stick","","Stick"], output: "3x Ladder" },

    // --- RAILS & TRANSPORT ---
    { name: "Rail", grid: ["Iron","","Iron","Iron","Stick","Iron","Iron","","Iron"], output: "16x Rail" },
    { name: "Powered Rail", grid: ["Gold","","Gold","Gold","Stick","Gold","Gold","Redst","Gold"], output: "6x Powered Rail" },
    { name: "Detector Rail", grid: ["Iron","","Iron","Iron","P_Plat","Iron","Iron","Redst","Iron"], output: "6x Detector Rail" },
    { name: "Activator Rail", grid: ["Iron","Stick","Iron","Iron","Torch","Iron","Iron","Stick","Iron"], output: "6x Activator Rail" },
    { name: "Minecart", grid: ["","","","Iron","","Iron","Iron","Iron","Iron"], output: "1x Minecart" },
    { name: "Boat", grid: ["","","","Plank","","Plank","Plank","Plank","Plank"], output: "1x Boat" },

    // --- REDSTONE ---
    { name: "Redstone Torch", grid: ["","Redst","","","Stick","","","",""], output: "1x RS Torch" },
    { name: "Repeater", grid: ["Torch","Redst","Torch","Stone","Stone","Stone","","",""], output: "1x Repeater" },
    { name: "Comparator", grid: ["","Torch","","Torch","Quartz","Torch","Stone","Stone","Stone"], output: "1x Comparator" },
    { name: "Piston", grid: ["Plank","Plank","Plank","Cobl","Iron","Cobl","Cobl","Redst","Cobl"], output: "1x Piston" },
    { name: "Sticky Piston", grid: ["","Slime","","","Piston","","","",""], output: "1x Sticky Piston" },
    { name: "Dispenser", grid: ["Cobl","Cobl","Cobl","Cobl","Bow","Cobl","Cobl","Redst","Cobl"], output: "1x Dispenser" },
    { name: "Dropper", grid: ["Cobl","Cobl","Cobl","Cobl","","Cobl","Cobl","Redst","Cobl"], output: "1x Dropper" },
    { name: "Hopper", grid: ["Iron","","Iron","Iron","Chest","Iron","","Iron",""], output: "1x Hopper" },
    { name: "Daylight Sensor", grid: ["Glass","Glass","Glass","Quartz","Quartz","Quartz","Slab","Slab","Slab"], output: "1x Daylight Sensor" },
    { name: "Redstone Lamp", grid: ["","Redst","","Redst","Glowst","Redst","","Redst",""], output: "1x RS Lamp" },
    { name: "Tripwire Hook", grid: ["Iron","","","Stick","","","Plank","",""], output: "2x Tripwire Hook" },
    { name: "Note Block", grid: ["Plank","Plank","Plank","Plank","Redst","Plank","Plank","Plank","Plank"], output: "1x Note Block" },
    { name: "TNT", grid: ["G_Pdr","Sand","G_Pdr","Sand","G_Pdr","Sand","G_Pdr","Sand","G_Pdr"], output: "1x TNT" },

    // --- TOOLS & WEAPONS (Diamond) ---
    { name: "Diamond Sword", grid: ["","Dia","","","Dia","","","Stick",""], output: "1x Diamond Sword" },
    { name: "Diamond Pickaxe", grid: ["Dia","Dia","Dia","","Stick","","","Stick",""], output: "1x Diamond Pickaxe" },
    { name: "Diamond Axe", grid: ["Dia","Dia","","Dia","Stick","","","Stick",""], output: "1x Diamond Axe" },
    { name: "Diamond Shovel", grid: ["","Dia","","","Stick","","","Stick",""], output: "1x Diamond Shovel" },
    { name: "Diamond Hoe", grid: ["Dia","Dia","","","Stick","","","Stick",""], output: "1x Diamond Hoe" },
    { name: "Bow", grid: ["","Stick","Strin","Stick","","Strin","","Stick","Strin"], output: "1x Bow" },
    { name: "Arrow", grid: ["","Flint","","","Stick","","","Feath",""], output: "4x Arrow" },

    // --- ARMOR (Iron) ---
    { name: "Iron Helmet", grid: ["Iron","Iron","Iron","Iron","","Iron","","",""], output: "1x Iron Helmet" },
    { name: "Iron Chestplate", grid: ["Iron","","Iron","Iron","Iron","Iron","Iron","Iron","Iron"], output: "1x Iron Chestplate" },
    { name: "Iron Leggings", grid: ["Iron","Iron","Iron","Iron","","Iron","Iron","","Iron"], output: "1x Iron Leggings" },
    { name: "Iron Boots", grid: ["","","","Iron","","Iron","Iron","","Iron"], output: "1x Iron Boots" },

    // --- 1.8 SPECIALS & BLOCKS ---
    { name: "Armor Stand", grid: ["Stick","Stick","Stick","","Stick","","Stick","Slab","Stick"], output: "1x Armor Stand" },
    { name: "Sea Lantern", grid: ["Shard","Shard","Shard","Shard","Dust","Shard","Shard","Shard","Shard"], output: "1x Sea Lantern" },
    { name: "Slime Block", grid: ["Slime","Slime","Slime","Slime","Slime","Slime","Slime","Slime","Slime"], output: "1x Slime Block" },
    { name: "Beacon", grid: ["Glass","Glass","Glass","Glass","Star","Glass","Obsid","Obsid","Obsid"], output: "1x Beacon" },
    { name: "Enchantment Table", grid: ["","Book","","Dia","Obsid","Dia","Obsid","Obsid","Obsid"], output: "1x Enchant Table" },
    { name: "Anvil", grid: ["IronB","IronB","IronB","","Iron","","Iron","Iron","Iron"], output: "1x Anvil" },
    { name: "Banner", grid: ["Wool","Wool","Wool","Wool","Wool","Wool","","Stick",""], output: "1x Banner" }
];
