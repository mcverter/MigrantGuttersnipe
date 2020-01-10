import { Icon } from 'leaflet';
import foodIcon from './comida.png';
import medicineIcon from './medicos.png';
import shelterFamilasIcon from './familias.jpg';
import shelterLGBTQIcon from './lgbtq.jpg';
import shelterSolterosIcon from './solteros.jpg';
import shelterMujeresIcon from './mujeres.jpg';
import shelterMenoresIcon from './menores.jpg';
import parliamentIcon from './parliament.png';
import phoneIcon from './phone.png';
import defaultPlainIcon from './shareableDefault.png';
import ngoIcon from './ngo.png';

const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

export const getLeafletIcon = type => leafletIcons[type] || leafletIcons.default;
export const getPlainIcon = type => plainIcons[type] || plainIcons.default;

export const plainIcons = {
  default: defaultPlainIcon,
  Comida: foodIcon,
  'Servicios Medicos': medicineIcon,
  'Albergue: Familias': shelterFamilasIcon,
  'Albergue: LGBTQ': shelterLGBTQIcon,
  'Albergue: Solteros': shelterSolterosIcon,
  'Albergue: Mujeres': shelterMujeresIcon,
  'Albergue: Menores de Edad': shelterMenoresIcon,
  phone: phoneIcon,
  Oficial: parliamentIcon,
  ONG: ngoIcon,
};

export const leafletIcons = objectMap(
  plainIcons,
  i => new Icon({ iconUrl: i }),
);
