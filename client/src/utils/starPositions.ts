const starPositions = (
  count = 4500,
  diameter = 40,
  height = 160,
  safeZoneRadius = 1, // Radius of the safe zone around the camera
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

    // Check if the position is within the safe zone
    if (Math.sqrt(x * x + y * y) < safeZoneRadius) {
      continue; // Skip placing a star here
    }

    positions.push([x, y, z]);
  }

  return positions;
};

export default starPositions;
