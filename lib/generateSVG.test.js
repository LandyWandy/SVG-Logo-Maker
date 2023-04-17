const generateSVG = require('./generateSVG');

describe('generateSVG', () => {
  test('should generate SVG for circle with text', () => {
    const svg = generateSVG('A', 'black', 'circle', 'red');
    expect(svg).toContain('<circle cx="150" cy="100" r="50" fill="red"/>');
    expect(svg).toContain('<text x="150" y="105" font-size="18" text-anchor="middle" fill="black">A</text>');
  });

  test('should generate SVG for triangle with text', () => {
    const svg = generateSVG('B', 'black', 'triangle', 'blue');
    expect(svg).toContain('<polygon points="150,50 100,150 200,150" fill="blue"/>');
    expect(svg).toContain('<text x="150" y="105" font-size="18" text-anchor="middle" fill="black">B</text>');
  });

  test('should generate SVG for square with text', () => {
    const svg = generateSVG('C', 'black', 'square', 'green');
    expect(svg).toContain('<rect x="100" y="50" width="100" height="100" fill="green"/>');
    expect(svg).toContain('<text x="150" y="105" font-size="18" text-anchor="middle" fill="black">C</text>');
  });
});
