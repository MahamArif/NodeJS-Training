class Flight {
    data: any;
    constructor() {
        this.data = {
            number: null,
            origin: null,
            destination: null,
            arrives: null,
            departs: null,
            actualArrives: null,
            actualDeparts: null,
        };
    }

    fill(info: any): void {
        Object.keys(info).forEach(key => {
            if(info[key]) {
                this.data[key] = info[key];
            }
        });
    }

    triggerArrival(): void {
        this.data.arrives = Date.now();
    }

    triggerDeparture(): void {
        this.data.departs = Date.now();
    }

    getInformation() {
        return this.data;
    };
};

module.exports = (info: any) => {
    const instance = new Flight();
    instance.fill(info);
    return instance;
};
