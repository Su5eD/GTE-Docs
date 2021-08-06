class CraftingItem {
    static readonly ELECTRONIC_CIRCUIT = new CraftingItem("electronic_circuit", "Electronic Circuit");
    static readonly CUPRONICKEL_HEATING_COIL = new CraftingItem("cupronickel_heating_coil", "Cupronickel Heating Coil");
    static readonly STEEL_MACHINE_HULL = new CraftingItem("steel_machine_hull", "Steel Machine Hull");
    static readonly INDUCTION_FURNACE = new CraftingItem("induction_furnace", "Induction Furnace");
    static readonly INDUSTRIAL_BLAST_FURNACE = new CraftingItem("industrial_blast_furnace", "Industrial Blast Furnace");

    protected constructor(public readonly texture: string, private readonly name: string) {

    }

    public isValidOutput(): boolean {
        return true;
    }

    public getName(): string {
        return this.name;
    }
}

export default CraftingItem