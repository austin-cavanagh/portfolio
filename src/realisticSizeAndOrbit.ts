import mercuryColor from '../../assets/planets/mercury/mercury-color-2k.jpg';
import venusColor from '../../assets/planets/venus/venus-color-2k.jpg';
import earthColor from '../../assets/planets/earth/earth-color-4k.jpg';
import marsColor from '../../assets/planets/mars/mars-color-4k.jpg';
import jupiterColor from '../../assets/planets/jupiter/jupiter-color-2k.jpg';
import saturnColor from '../../assets/planets/saturn/saturn-color-2k.jpg';
import uranusColor from '../../assets/planets/uranus/uranus-color-2k.jpg';
import neptuneColor from '../../assets/planets/neptune/neptune-color-2k.jpg';
import plutoColor from '../../assets/planets/pluto/pluto-color-2k.jpg';

type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  color: string;
  semiMajorAxis: number;
  eccentricity: number;
  name: string;
  orbitCenter?: { x: number; y: number; z: number };
};

export const mercury: PlanetProps = {
  semiMajorAxis: 831.6229,
  eccentricity: 0.2056,
  radius: 0.035,

  orbitSpeed: 0.001,
  oblateness: 1,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  color: mercuryColor,
  name: 'Mercury',
};

export const venus: PlanetProps = {
  radius: 0.0869,
  semiMajorAxis: 1553.9669,
  eccentricity: 0.0067,

  orbitSpeed: 0.01,
  oblateness: 1,
  rotation: -0.001,
  glowColor: 0xffd700,
  color: venusColor,
  name: 'Venus',
};

export const earth: PlanetProps = {
  radius: 0.0915,
  semiMajorAxis: 2148.3474,
  eccentricity: 0.0167,

  orbitSpeed: 0.01,
  oblateness: 1,
  rotation: 0.00417,
  glowColor: 0x0088ff,
  color: earthColor,
  name: 'Earth',
};

export const mars: PlanetProps = {
  radius: 0.0487,
  semiMajorAxis: 3273.3894,
  eccentricity: 0.0935,

  orbitSpeed: 0.001,
  oblateness: 1,
  rotation: 0.00427,
  glowColor: 0xff4500,
  color: marsColor,
  name: 'Mars',
};

export const jupiter: PlanetProps = {
  semiMajorAxis: 11180.5612,
  eccentricity: 0.0489,
  radius: 1.0267,

  orbitSpeed: 0.00084,
  oblateness: 1.069,
  rotation: 0.001,
  glowColor: 0xffa500,
  color: jupiterColor,
  name: 'Jupiter',
};

export const saturn: PlanetProps = {
  semiMajorAxis: 20585.4808,
  eccentricity: 0.0565,
  radius: 0.8363,

  orbitSpeed: 0.034,
  oblateness: 1.083,
  rotation: 0.05,
  glowColor: 0xcba135,
  color: saturnColor,
  name: 'Saturn',
};

export const uranus: PlanetProps = {
  radius: 0.3642,
  semiMajorAxis: 41252.1049,
  eccentricity: 0.0457,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.72,
  glowColor: 0x1ec2a4,
  color: uranusColor,
  name: 'Uranus',
};

export const neptune: PlanetProps = {
  radius: 0.3536,
  semiMajorAxis: 64552.6668,
  eccentricity: 0.0113,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: neptuneColor,
  name: 'Neptune',
};

export const pluto: PlanetProps = {
  semiMajorAxis: 84820.2918,
  eccentricity: 0.2444,
  radius: 0.0171,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: plutoColor,
  name: 'Pluto',
};
