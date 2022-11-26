class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id == undefined) {
      throw new Error(
        "Невозможно идентифицировать будильник. Параметр id не передан."
      );
    }

    if (this.alarmCollection.some((el) => el.id == id)) {
      console.error("Будильник с таким id уже существует.");
    } else {
      this.alarmCollection.push({ id: id, time: time, callback: callback });
    }
  }

  removeClock(id) {
    let originalLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((el) => el.id != id);
    if (originalLength > this.alarmCollection.length) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : `${currentDate.getHours()}`;
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
    let time = `${hours}:${minutes}`;
    return time;
  }

  start() {
    if (this.timerId == undefined) {
      this.timerId = setInterval(() => {
        let currentTime = this.getCurrentFormattedTime();
        for (let i = 0; i < this.alarmCollection.length; i++) {
          checkClock(this.alarmCollection[i], currentTime);
        }
      }, 1000);
    }

    function checkClock(alarmData, currentTime) {
      if (alarmData.time == currentTime) {
        alarmData.callback();
      }
    }
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

  printAlarms() {
    console.log(
      "Печать всех будильников в количестве:" + this.alarmCollection.length
    );
    this.alarmCollection.forEach(func);
    function func(item) {
      console.log("Будильник №", item.id, "заведен на", item.time);
    }
  }
}

function testCase() {
  let phoneClock;
  phoneClock = new AlarmClock();
  phoneClock.addClock("23:36", () => console.log("Пора вставать"), 1);
  phoneClock.addClock(
    "23:37",
    () => {
      phoneClock.removeClock(2);
    },
    2
  );
  phoneClock.addClock(
    "23:38",
    () => {
      console.log("Вставай, а то проспишь!");
      phoneClock.clearAlarms();
      phoneClock.printAlarms();
    },
    3
  );

  phoneClock.printAlarms();
  phoneClock.start();
}

testCase();

// const currentDate = new Date();
// console.log(currentDate);

// let clock;
// clock = new AlarmClock();

// clock.addClock("22:11", () => console.log("Пора вставать"), 1);
// clock.start();
