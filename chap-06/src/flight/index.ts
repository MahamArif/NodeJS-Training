export class Flight {
    private static count: number = 0;
    data: any;
    constructor() {
        Flight.count++;
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

    static getCount() {
        return Flight.count;
    }
};

export const create = (info: any) => {
    const instance = new Flight();
    instance.fill(info);
    return instance;
};

export const getCount = Flight.getCount;
