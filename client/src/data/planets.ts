import { Mesh } from 'three';

import mercuryColor from '../assets/planets/mercury/mercury-color-2k.jpg';

import venusColor from '../assets/planets/venus/venus-color-2k.jpg';

import earthColor from '../assets/planets/earth/earth-color-2k.jpg';
import earthBump from '../assets/planets/earth/earth-bump-2k.jpg';

import marsColor from '../assets/planets/mars/mars-color-2k.jpg';
import marsBump from '../assets/planets/mars/mars-bump-2k.jpg';

import jupiterColor from '../assets/planets/jupiter/jupiter-color-2k.jpg';

import saturnColor from '../assets/planets/saturn/saturn-color-2k.jpg';
import saturnRingColor from '../assets/planets/saturn/saturn-ring-color.jpg';
import saturnRingPattern from '../assets/planets/saturn/saturn-ring-pattern.gif';

import uranusColor from '../assets/planets/uranus/uranus-color-2k.jpg';
import uranusRingColor from '../assets/planets/uranus/uranus-ring-color.jpg';
import uranusRingPattern from '../assets/planets/uranus/uranus-ring-pattern.gif';

import neptuneColor from '../assets/planets/neptune/neptune-color-2k.jpg';

import plutoColor from '../assets/planets/pluto/pluto-color-2k.jpg';
import plutoBump from '../assets/planets/pluto/pluto-bump-2k.jpg';

export type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  colorMap: string;
  semiMajorAxis: number;
  eccentricity: number;
  name: string;
  orbitCenter?: { x: number; y: number; z: number };
  selectPlanet?: (planetRef: React.RefObject<Mesh>, name: string) => void;
  selectedPlanet?: any;
  bumpMap?: string;
  ringColor?: string;
  ringPattern?: string;
  ringRadius?: number;
  ringTubeRadius?: number;
};

export const planets: PlanetProps[] = [
  {
    radius: 5,
    semiMajorAxis: 100,
    eccentricity: 0.2056,
    orbitSpeed: 0.1,
    oblateness: 1,
    rotation: 0.001,
    glowColor: 0xb3cde0,
    colorMap: mercuryColor,
    name: 'Mercury',
  },
  {
    radius: 10,
    semiMajorAxis: 200,
    eccentricity: 0.0067,
    orbitSpeed: 0.0,
    oblateness: 1,
    rotation: -0.001,
    glowColor: 0xffd700,
    colorMap: venusColor,
    name: 'Venus',
    bumpMap: earthBump,
  },
  {
    radius: 11,
    semiMajorAxis: 300,
    eccentricity: 0.0167,
    orbitSpeed: 0.01,
    oblateness: 1,
    rotation: 0.00417,
    glowColor: 0x0088ff,
    colorMap: earthColor,
    name: 'Earth',
    bumpMap: earthBump,
  },
  {
    radius: 8,
    semiMajorAxis: 450,
    eccentricity: 0.0935,
    orbitSpeed: 0.001,
    oblateness: 1,
    rotation: 0.00427,
    glowColor: 0xff4500,
    colorMap: marsColor,
    name: 'Mars',
    bumpMap: marsBump,
  },
  {
    radius: 20,
    semiMajorAxis: 620,
    eccentricity: 0.0489,
    orbitSpeed: 0.00084,
    oblateness: 1.069,
    rotation: 0.001,
    glowColor: 0xffa500,
    colorMap: jupiterColor,
    name: 'Jupiter',
  },
  {
    radius: 16,
    semiMajorAxis: 800,
    eccentricity: 0.0565,
    orbitSpeed: 0.034,
    oblateness: 1.083,
    rotation: 0.05,
    glowColor: 0xcba135,
    colorMap: saturnColor,
    name: 'Saturn',
    ringColor: saturnRingColor,
    ringPattern: saturnRingPattern,
    ringRadius: 27,
    ringTubeRadius: 6,
  },
  {
    radius: 10,
    semiMajorAxis: 970,
    eccentricity: 0.0457,
    orbitSpeed: 0.012,
    oblateness: 1.011,
    rotation: 0.01,
    glowColor: 0x1ec2a4,
    colorMap: uranusColor,
    name: 'Uranus',
    ringColor: uranusRingColor,
    ringPattern: uranusRingPattern,
    ringRadius: 20,
    ringTubeRadius: 2,
  },
  {
    radius: 10,
    semiMajorAxis: 1100,
    eccentricity: 0.0113,
    orbitSpeed: 0.012,
    oblateness: 1.011,
    rotation: 0.02,
    glowColor: 0x1ec2a4,
    colorMap: neptuneColor,
    name: 'Neptune',
  },
  {
    radius: 5,
    semiMajorAxis: 1200,
    eccentricity: 0.0444,
    orbitSpeed: 0.012,
    oblateness: 1.011,
    rotation: 0.02,
    glowColor: 0x1ec2a4,
    colorMap: plutoColor,
    name: 'Pluto',
    bumpMap: plutoBump,
  },
];
