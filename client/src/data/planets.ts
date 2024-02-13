import sunColor from '../assets/planets/sun/2k_sun.jpg';

import mercuryColor from '../assets/planets/mercury/mercury-color-2k.jpg';

import venusColor from '../assets/planets/venus/venus-color-2k.jpg';

import earthColor from '../assets/planets/earth/earth-color-2k.jpg';
import earthBump from '../assets/planets/earth/earth-bump-2k.jpg';

import earthLights from '../assets/planets/earth/earth-lights-2k.jpg';
import earthClouds from '../assets/planets/earth/earth-clouds.jpg';
import earthCloudsTransparency from '../assets/planets/earth/earth-clouds-transparency-inverted.jpg';

import moonColor from '../assets/planets/moon/moon-color-2k.jpg';
import moonBump from '../assets/planets/moon/moon-bump-2k.jpg';

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
  name: string;
  radius: number;
  semiMajorAxis: number;
  eccentricity: number;
  orbitSpeed: number;
  rotation: number;
  oblateness: number;
  glowColor: number;
  colorMap: string;

  orbitCenter?: { x: number; y: number; z: number };

  bumpMap?: string;
  bumpScale?: number;

  ringColor?: string;
  ringPattern?: string;
  ringRadius?: number;
  ringTubeRadius?: number;

  lightMap?: string;

  cloudMap?: string;
  cloudTransparancy?: string;
};

export const planets: PlanetProps[] = [
  {
    name: 'Sun',
    radius: 25,
    semiMajorAxis: 0,
    eccentricity: 0,
    orbitSpeed: 0,
    rotation: 0.001,
    oblateness: 1,
    glowColor: 0xff0000,
    colorMap: sunColor,
  },

  {
    name: 'Mercury',
    radius: 5,
    semiMajorAxis: 100,
    eccentricity: 0.2056,
    orbitSpeed: 0.01,
    rotation: 0.001,
    oblateness: 1,
    glowColor: 0xb3cde0,
    colorMap: mercuryColor,
  },

  {
    name: 'Venus',
    radius: 10,
    semiMajorAxis: 200,
    eccentricity: 0.0067,
    orbitSpeed: 0.0,
    rotation: -0.001,
    oblateness: 1,
    glowColor: 0xffd700,
    colorMap: venusColor,
  },

  {
    name: 'Earth',
    radius: 11,
    semiMajorAxis: 300,
    eccentricity: 0.0167,
    orbitSpeed: 0.05,
    rotation: 0.001,
    oblateness: 1,
    glowColor: 0x0088ff,
    colorMap: earthColor,
    bumpMap: earthBump,
    bumpScale: 5,
    cloudMap: earthClouds,
    cloudTransparancy: earthCloudsTransparency,
    lightMap: earthLights,
  },

  {
    name: 'Moon',
    radius: 2,
    semiMajorAxis: 40,
    eccentricity: 0.0549,
    orbitSpeed: 0.085,
    rotation: 0.002,
    oblateness: 1,
    glowColor: 0xb3cde0,
    colorMap: moonColor,
    bumpMap: moonBump,
    bumpScale: 5,
  },

  {
    name: 'Mars',
    radius: 8,
    semiMajorAxis: 450,
    eccentricity: 0.0935,
    orbitSpeed: 0.001,
    rotation: 0.00427,
    oblateness: 1,
    glowColor: 0xff4500,
    colorMap: marsColor,
    bumpMap: marsBump,
    bumpScale: 5,
  },

  {
    name: 'Jupiter',
    radius: 20,
    semiMajorAxis: 620,
    eccentricity: 0.0489,
    orbitSpeed: 0.00084,
    rotation: 0.001,
    oblateness: 0.935,
    glowColor: 0xffa500,
    colorMap: jupiterColor,
  },

  {
    name: 'Saturn',
    radius: 16,
    semiMajorAxis: 800,
    eccentricity: 0.0565,
    orbitSpeed: 0.034,
    rotation: 0.05,
    oblateness: 0.9,
    glowColor: 0xcba135,
    colorMap: saturnColor,
    ringColor: saturnRingColor,
    ringPattern: saturnRingPattern,
    ringRadius: 27,
    ringTubeRadius: 6,
  },

  {
    name: 'Uranus',
    radius: 10,
    semiMajorAxis: 970,
    eccentricity: 0.0457,
    orbitSpeed: 0.012,
    rotation: 0.01,
    oblateness: 0.977,
    glowColor: 0x89cff0,
    colorMap: uranusColor,
    ringColor: uranusRingColor,
    ringPattern: uranusRingPattern,
    ringRadius: 20,
    ringTubeRadius: 2,
  },

  {
    name: 'Neptune',
    radius: 10,
    semiMajorAxis: 1100,
    eccentricity: 0.0113,
    orbitSpeed: 0.012,
    rotation: 0.02,
    oblateness: 0.983,
    glowColor: 0x0088ff,
    colorMap: neptuneColor,
  },

  {
    name: 'Pluto',
    radius: 5,
    semiMajorAxis: 1200,
    eccentricity: 0.0444,
    orbitSpeed: 0.012,
    rotation: 0.005,
    oblateness: 1,
    glowColor: 0x1ec2a4,
    colorMap: plutoColor,
    bumpMap: plutoBump,
    bumpScale: 5,
  },
];
