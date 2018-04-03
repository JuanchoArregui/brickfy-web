export class Participant {
    id: string;
    email: string;
    // password?: string;
    // firstName: string;
    // lastName: string;
    // vatIdNumber: string;
    // description: string;
    // image: string;
    // address: Array<string> = new Array();
    // roll: string;

    public asFormData(): FormData {
        const data = new FormData();
        // data.append('firstName', this.firstName);
        // data.append('lastName', this.lastName);
        // data.append('vatIdNumber', this.vatIdNumber);
        // data.append('description', this.description);
        // data.append('image', this.image);
        // data.append('lastName', this.lastName);
        // for (const addressline of this.address) {
        //     data.append('address', addressline);
        // }

        return data;
    }
}
