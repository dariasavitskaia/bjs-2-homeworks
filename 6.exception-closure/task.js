function parseCount(givenNumber) {
  const ParsedNumber = Number.parseInt(givenNumber, 10);
  if (Number.isNaN(ParsedNumber)) {
    throw new Error("Невалидное значение");
  }
  return ParsedNumber;
}

function validateCount(givenNumber) {
  try {
    return parseCount(givenNumber);
  } catch (error) {
    return error;
  }
}

//Задание 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    return parseFloat(
      ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let triangle = {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return triangle;
  }
}
