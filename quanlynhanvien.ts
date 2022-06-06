export enum Gene {
    MALE,
    FEMALE
}
export class Staff{
    name:string;
    gene:Gene;
    birthday?: Date;
    email: string;
    phone: number;
    constructor(name: string,
        gene:Gene,
        birthday:Date,
        email:string,
        phone: number){
            this.name = name;
            this.gene = gene;
            this.birthday = birthday;
            this.email = email;
            this.phone = phone;
        }

}