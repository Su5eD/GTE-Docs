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
    static readonly ALUMINIUM_PLATE = new CraftingItem("aluminium_plate", "Aluminium Plate");
    static readonly IRON_PLATE = new CraftingItem("iron_plate", "Iron Plate");
    static readonly CONVEYOR_MODULE = new CraftingItem("conveyor_module", "Conveyor Module");
    static readonly LIME_DYE = new CraftingItem("lime_dye", "Lime Dye");
    static readonly ROSE_RED = new CraftingItem("rose_red", "Rose Red");
    static readonly LAPIS_LAZULI = new CraftingItem("lapis_lazuli", "Lapis Lazuli");
    static readonly GLOWSTONE_DUST = new CraftingItem("glowstone_dust", "Glowstone Dust");
    static readonly GLASS_PANE = new CraftingItem("glass_pane", "Glass Pane");
    static readonly COMPUTER_MONITOR = new CraftingItem("computer_monitor", "Computer Monitor");
    static readonly TUNGSTEN_PLATE = new CraftingItem("tungsten_plate", "Tungsten Plate");
    static readonly IRIDIUM_REINFORCED_PLATE = new CraftingItem("iridium_reinforced_plate", "Iridium Reinforced Plate");
    static readonly LAPOTRON_CRYSTAL = new CraftingItem("lapotron_crystal", "Lapotron Crystal");
    static readonly ADVANCED_CIRCUIT = new CraftingItem("advanced_circuit", "Advanced Circuit");
    static readonly ENERGY_FLOW_CIRCUIT = new CraftingItem("energy_flow_circuit", "Energy Flow Circuit");
    static readonly DATA_STORAGE_CIRCUIT = new CraftingItem("data_storage_circuit", "Data Storage Circuit");
    static readonly DATA_CONTROL_CIRCUIT = new CraftingItem("data_control_circuit", "Data Control Circuit");
    static readonly SILICON_PLATE = new CraftingItem("silicon_plate", "Silicon Plate");
    static readonly CARBON_PLATE = new CraftingItem("carbon_plate", "Carbon Plate");
    static readonly HV_TRANSFORMER_UPGRADE = new CraftingItem("hv_transformer_upgrade", "HV Transformer Upgrade");
    static readonly SOLAR_PANEL = new CraftingItem("solar_panel", "Solar Panel");
    static readonly SOLAR_PANEL_LV = new CraftingItem("solar_panel_lv", "LV Solar Panel");
    static readonly SOLAR_PANEL_MV = new CraftingItem("solar_panel_mv", "MV Solar Panel");
    static readonly SOLAR_PANEL_HV = new CraftingItem("solar_panel_hv", "HV Solar Panel");
    static readonly IRON_BARS = new CraftingItem("iron_bars", "Iron Bars");
    static readonly ELECTRIC_MOTOR = new CraftingItem("electric_motor", "Electric Motor");
    static readonly HEAT_VENT = new CraftingItem("heat_vent", "Heat Vent");
    static readonly COMPONENT_HEAT_VENT = new CraftingItem("component_heat_vent", "Component Heat Vent");
    static readonly REACTOR_HEAT_VENT = new CraftingItem("reactor_heat_vent", "Reactor Heat Vent");
    static readonly ADVANCED_HEAT_VENT = new CraftingItem("advanced_heat_vent", "Advanced Heat Vent");
    static readonly OVERCLOCKED_HEAT_VENT = new CraftingItem("overclocked_heat_vent", "Overclocked Heat Vent");
    static readonly TIN_PLATE = new CraftingItem("tin_plate", "Tin Plate");
    static readonly COPPER_PLATE = new CraftingItem("copper_plate", "Copper Plate");
    static readonly DIAMOND = new CraftingItem("diamond", "Diamond");
    static readonly GOLD_PLATE = new CraftingItem("gold_plate", "Gold Plate");

    private constructor(public readonly texture: string, private readonly name: string) {

    }

    public isValidOutput(): boolean {
      return true;
    }

    public getName(): string {
      return this.name;
    }
}
