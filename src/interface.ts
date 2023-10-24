export interface vehicles {
  description: string;
  icons: icons;
  level: string;
  nation: nation;
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
  title: string;
}
export interface vehicleFilterData {
  level: string;
  nation: filterNations;
  type: filterType;
}
interface filterNations {
  name: string;
}
interface filterType {
  name: string;
}
