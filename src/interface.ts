export interface vehicles {
    description: string;
    icons: Array<icons>;
    level: number;
    nation:Array<nation>;
    title: string;
    type: Array<type>
}
interface icons {
    large: string;
    medium: string;
}
interface nation {
    color: string;
    icons: Array<icons>;
    name: string;
    title: string;
}
interface type {
    icons: Array<icons>;
    name: string;
    title:string

}