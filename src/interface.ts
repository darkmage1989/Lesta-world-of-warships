export interface vehicles {
    description: string;
    icons: icons;
    level: number;
    nation:nation;
    title: string;
    type: type;
}
interface icons {
    large: string;
    medium: string;
}
interface nation {
    color: string;
    icons: icons;
    name: string;
    title: string;
}
interface type {
    icons: icons;
    name: string;
    title:string

}