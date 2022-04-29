function parseCount(str) {
	let num = Number.parseInt(str, 10)
	if (Number.isNaN(num)) {
		throw new Error('Невалидное значение')
	} else {
		return  num
	}
}

function validateCount(str) {
	try {
		return parseCount(str)
	} catch(err) {
		return err
	}
}

class Triangle {
	constructor (a, b, c) {
		this.a = a
		this.b = b
		this.c = c

		if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c
	}

	getArea() {
        let p = this.getPerimeter() / 2
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
    }
}

function getTriangle(a, b, c) {
	try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
