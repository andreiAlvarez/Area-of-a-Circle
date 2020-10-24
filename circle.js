// solution 1

const circleArea = radius => radius <= 0 || typeof radius !== "number" ? false :  +(Math.PI * radius * radius).toFixed(2);

