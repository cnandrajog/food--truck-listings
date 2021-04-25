export interface DateTime {
    dayOfWeek: number;
    hour: number;
    minutes:number
}

export interface FoodTruck {
    businessName: string;
    location: string;
    opens: string,
    closes: string
}


export interface TableOptions {
    style: Record<string, Array<string>>,
    head: Array<string>,
    colWidths: Array<number>
}
