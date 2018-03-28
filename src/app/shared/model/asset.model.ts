export class Asset {
    id: string;
    owner: string;
    value: string;
    specs: Array<string> = new Array();
    image: string;

    public asFormData(): FormData {
        const data = new FormData();
        data.append('owner', this.owner);
        data.append('value', this.value);
        for (let spec of this.specs) {
            data.append('specs', spec);
        }

        return data;
    }
}
