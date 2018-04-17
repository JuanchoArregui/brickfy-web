export class Transaction {
    id: string;
    assetId: string;
    newOwner: string;
    newValue: string;

    public asFormData(): FormData {
        const data = new FormData();
        data.append('assetId', this.assetId);
        data.append('newOwner', this.newOwner);
        data.append('newValue', this.newValue);

        return data;
    }
}

