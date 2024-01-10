const starPositions = (count = 4000, coneHeight = 60, coneRadius = 5) => {
  const positions: [number, number, number][] = [];

  for (let i = 0; i < count; i++) {
    const height = (1 - Math.sqrt(Math.random())) * coneHeight;
    const angle = Math.random() * Math.PI * 2;
    const radiusAtHeight = coneRadius * (1 - height / coneHeight);

    const x = radiusAtHeight * Math.cos(angle);
    const y = radiusAtHeight * Math.sin(angle);
    const z = -height;

    positions.push([x, y, z]);
  }

  return positions;
};

export default starPositions;
