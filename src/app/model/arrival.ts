export class Arrival {
    public Id: number;
    public etadate: string;
    public intending_agent:string;
    public contract_number:string;
    public importer_name: string;
    public shipper_name: string;
    public lcl_fcl:string;
    public container_type:string;
    public container_20in: string;
    public container_40in: string;
    public cargo_name:string;
    public liner_name:string;
    public bl_number: string;
    public bl_date: string;
    public hbl_number:string;
    public freedays:string;
    public load_port: string;
    public vessel_name: string;
    public doc_type:string;
    public voyage_number:string;
    public cfs:string;
    
    constructor(Id:number,etadate: string,intending_agent:string,contract_number:string,importer_name:string,
        shipper_name: string,lcl_fcl:string,container_type:string,container_20in:string,
        container_40in: string,cargo_name:string,liner_name:string,bl_number:string,
        bl_date: string,hbl_number:string,freedays:string,load_port:string,
        vessel_name: string,doc_type:string,voyage_number:string,cfs:string ) {
    this.Id = Id;
    this.etadate = etadate;
    this.intending_agent = intending_agent;
    this.contract_number = contract_number;
    this.importer_name = importer_name;
    this.shipper_name = shipper_name;
    this.lcl_fcl = lcl_fcl;
    this.container_type = container_type;
    this.container_20in = container_20in;
    this.container_40in = container_40in;
    this.cargo_name = cargo_name;
    this.liner_name = liner_name;
    this.bl_number = bl_number;
    this.bl_date = bl_date;
    this.hbl_number = hbl_number;
    this.freedays = freedays;
    this.load_port = load_port;
    this.vessel_name = vessel_name;
    this.doc_type = doc_type;
    this.voyage_number = voyage_number;
    this.cfs = cfs;
    }
    }
