const starPositions = (
  count = 10000,
  diameter = 50,
  height = 200
): [number, number, number][] => {
  const positions: [number, number, number][] = [];
  const radius = diameter / 2;

  for (let i = 0; i < count; i++) {
    // Random angle for circular distribution
    const angle = Math.random() * Math.PI * 2;

    // Use square root of random number for uniform distribution within a circle
    const distance = Math.sqrt(Math.random()) * radius;

    const x = distance * Math.cos(angle); // Convert polar to Cartesian coordinates
    const y = distance * Math.sin(angle); // Convert polar to Cartesian coordinates
    const z = Math.random() * -height; // Only in front of the camera

    positions.push([x, y, z]);
  }

  return positions;
};

export default starPositions;

// const starPositions = (count = 4000, coneHeight = 60, coneRadius = 5) => {
//   const positions: [number, number, number][] = [];

//   for (let i = 0; i < count; i++) {
//     const height = (1 - Math.sqrt(Math.random())) * coneHeight;
//     const angle = Math.random() * Math.PI * 2;
//     const radiusAtHeight = coneRadius * (1 - height / coneHeight);

//     const x = radiusAtHeight * Math.cos(angle);
//     const y = radiusAtHeight * Math.sin(angle);
//     const z = -height;

//     positions.push([x, y, z]);
//   }

//   return positions;
// };

// export default starPositions;
