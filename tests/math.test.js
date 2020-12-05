const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('Should convert 32 F to 0 C', () => {
    let tempC = fahrenheitToCelsius(32);
    expect(tempC).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
    let tempF = celsiusToFahrenheit(0);
    expect(tempF).toBe(32);
});
