export default class CraftingItem {
    static readonly ELECTRONIC_CIRCUIT = new CraftingItem("electronic_circuit", "Electronic Circuit");
    static readonly CUPRONICKEL_HEATING_COIL = new CraftingItem("cupronickel_heating_coil", "Cupronickel Heating Coil");
    static readonly STEEL_MACHINE_HULL = new CraftingItem("steel_machine_hull", "Steel Machine Hull");
    static readonly INDUCTION_FURNACE = new CraftingItem("induction_furnace", "Induction Furnace");
    static readonly INDUSTRIAL_BLAST_FURNACE = new CraftingItem("industrial_blast_furnace", "Industrial Blast Furnace");
    static readonly WOOD_PLANKS = new CraftingItem("wood_planks", "Wood Planks");
    static readonly INSULATED_COPPER_CABLE = new CraftingItem("insulated_copper_cable", "Insulated Copper Cable");
    static readonly RE_BATTERY = new CraftingItem("re_battery", "RE-Battery");
    static readonly ENERGY_STORAGE_UPGRADE = new CraftingItem("energy_storage_upgrade", "Energy Storage Upgrade");
    static readonly COOLANT_CELL_10K = new CraftingItem("10k_coolant_cell", "10k Coolant Cell");
    static readonly OVERCLOCKER_UPGRADE = new CraftingItem("overclocker_upgrade", "Overclocker Upgrade");
    static readonly HELIUM_COOLANT_CELL_60K = new CraftingItem("60k_helium_coolant_cell", "60k Helium Coolant Cell");
    static readonly NAK_COOLANT_CELL_60K = new CraftingItem("60k_nak_coolant_cell", "60k NaK Coolant Cell");
    static readonly GLASS = new CraftingItem("glass", "Glass");
    static readonly DOUBLE_INSULATED_GOLD_CABLE = new CraftingItem("double_insulated_gold_cable", "2xIns. Gold Cable");
    static readonly MV_TRANSFORMER = new CraftingItem("mv_transformer", "MV-Transformer");
    static readonly TRANSFORMER_UPGRADE = new CraftingItem("transformer_upgrade", "Transformer Upgrade");
    static readonly KANTHAL_HEATING_COIL = new CraftingItem("kanthal_heating_coil", "Kanthal Heating Coil");
    static readonly NICHROME_HEATING_COIL = new CraftingItem("nichrome_heating_coil", "Nichrome Heating Coil");
    static readonly ALUMINIUM_INGOT = new CraftingItem("aluminium_ingot", "Aluminium Ingot");
    static readonly CHROME_INGOT = new CraftingItem("chrome_ingot", "Chrome Ingot");
    static readonly NICKEL_INGOT = new CraftingItem("nickel_ingot", "Nickel Ingot");
    static readonly IRON_INGOT = new CraftingItem("iron_ingot", "Iron Ingot");

    private constructor(public readonly texture: string, private readonly name: string) {

    }

    public isValidOutput(): boolean {
      return true;
    }

    public getName(): string {
      return this.name;
    }
}
