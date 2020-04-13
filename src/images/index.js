import React from 'react';
import MaterialIcon from '@material-ui/core/Icon';
import { Icon as LeafletIcon } from 'leaflet';
import './icons.css';
import SolterosSVG from './human-male.svg';
import MujeresSVG from './human-female.svg';
import FamiliasSVG from './human-male-female.svg';
import MenoresSVG from './human-child.svg';
import LGBTSVG from './gender-transgender.svg';
import ONGSVG from './hand-heart.svg';
import MedicosSVG from './hospital-box.svg';
import ComidaSVG from './silverware.svg';
import AlbergueSVG from './home-floor-a.svg';
import PhoneSVG from './phone.svg';
import OficialSVG from './domain.svg';
import DirectionsSVG from './3d_rotation-24px.svg';

const SVGMap = {
  default: ONGSVG,
  Comida: ComidaSVG,
  'Servicios Medicos': MedicosSVG,
  Albergue: AlbergueSVG,
  'Albergue: Familias': FamiliasSVG,
  'Albergue: LGBTQ': LGBTSVG,
  'Albergue: Solteros': SolterosSVG,
  'Albergue: Mujeres': MujeresSVG,
  'Albergue: Menores de Edad': MenoresSVG,
  phone: PhoneSVG,
  Oficial: OficialSVG,
  ONG: ONGSVG,
  directions: DirectionsSVG,
};

export function getLeafletIcon(type) {
  return new LeafletIcon({
    iconUrl: SVGMap[type] || SVGMap.default,
  });
}
export function getPlainIcon(type) {
  return (
    <MaterialIcon>
      <img align="middle" alt={type} src={SVGMap[type] || SVGMap.default} />
    </MaterialIcon>
  );
}
