export type Meal = {
id : number;
name: string;
category: string;
image :string;
price: string;
ingredients : string[];
}


export type TopPick = {
    id: number;
    title: string;
    price: string;
    img:  string;
}
export type Cat= {
    id: number;
    name: string;
    image:  string;
    

}

export type FormData = {
    email: string
}