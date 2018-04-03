export class Participant {
    id: string;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    vatIdNumber: string;
    description: string;
    image: string;
    address: Array<string> = new Array();
    roll: string;
}
