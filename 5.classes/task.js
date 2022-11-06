// class BMW {
//    constructor(name, color) {
// this.carName = name;
// this.color = color;
//     console.log(name)
//    }
// }

// function Aircraft{}
// let bmw1 = new BMW();
// let bmw2 = new BMW(); // объекты не равны друг другу в данном случае

// //class - это обычные функции, но имеют ряд преимуществ
// // вызывается через new

// let garage = [
//     new BMW ("ласточка", "синий"),
//     new BMW("принцесса", "белый")
//  ];

//  let oleg = {
//     name: "Oleg";
//     lastName: "Kozik";
//     gender: "male";
//     type: "man"
//  }

//  let ivan = {
//     name: "Ivan";
//     lastName: "Ivanov";
//     gender: "male";
//     type: "man"
//  }

//  let nikita = {
//     name: "Nikita";
//     lastName: "Romanov";
//     gender: "male";
//     type: "man"
//  }

//Модификаторы get и set
//

// class Sportsman {
//    constructor() {
//       this.scores = [];
//    }

//    // ниже метод описывается точно также как и конструктор только имеет другое название
//    addScore(score){
//       this.scores.push(score);
//    }
//    calculateAverage() {
//       if(this.scores.length === 0) {
//          return 0;
//       }
//       let summ = 0;
//       for (let i = 0; i < this.scores.length; i++) {
//          summ += this.scores[i]
//       }
//       return summ / this.scores.length;
//    }
// }

//Задание 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    this._state *= 1.5;
  }

  set state(newState) {
    this._state = newState;
  }

  get state() {
    if (this._state < 0) {
      this._state = 0;
    } else if (this._state > 100) {
      this._state = 100;
    }
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

//Задание 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let bookToGive = this.books[i];
        this.books.splice(i, 1);
        return bookToGive;
      }
    }
    return null;
  }
}

const library = new Library("Российская национальная библиотека");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));

console.log(library.findBookBy("releaseDate", 1919).name);
const givenBook = library.giveBookByName("Пикник на обочине");

givenBook.state = 50;

givenBook.fix();
console.log(givenBook);

library.addBook(givenBook);

console.log(library);

//Задание 3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(grade, subject) {
    if (grade < 1 || grade > 5) {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
    if (this.grades === undefined) {
      this.grades = [];
      this.grades[subject] = [grade];
    } else if (this.grades[subject] === undefined) {
      this.grades[subject] = [grade];
    } else {
      this.grades[subject].push(grade);
    }
  }

  getAverageBySubject(subject) {
    if (this.grades === undefined || this.grades[subject] === undefined) {
      return "Несуществующий предмет";
    } else {
      return (
        this.grades[subject].reduce((acc, cur) => acc + cur) /
        this.grades[subject].length
      );
    }
  }

  getAverage() {
    if (this.grades === undefined) {
      return null;
    } else {
      let keys = Object.keys(this.grades);
      let all_grades = [];
      for (let i = 0; i < keys.length; i++) {
        all_grades.push(...this.grades[keys[i]]);
      }
      return all_grades.reduce((a, b) => a + b, 0) / all_grades.length;
    }
  }

  exclude(reason) {
    if (this.grades !== undefined) {
      delete this.grades;
      this.excluded = reason;
    }
  }
}
