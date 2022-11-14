class AlarmClock {
  constructor(alarmCollection = [], timerId = null) {
    this.alarmCollection = alarmCollection;
    this.timerId = timerId;
  }

  addClock(time, callbackFunction, id) {
    if (id === undefined) {
      throw new Error(
        "Невозможно идентифицировать будильник. Параметр id не передан"
      );
    }

    if (this.timerId == null) {
      this.timerId = [id];
      this.alarmCollection.push({
        id: id,
        time: time,
        callback: callbackFunction,
      });
    } else if (this.timerId.indexOf(id) == -1) {
      this.timerId.push(id);
      this.alarmCollection.push({
        id: id,
        time: time,
        callback: callbackFunction,
      });
    } else {
      console.error("Будильник с таким id уже существует.");
    }
  }

  removeClock(id) {
    const original_length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((el) => el.id != id);
    this.timerId = this.timerId.filter((el) => el != id);
    if (original_length > this.alarmCollection.length) {
      console.log("(Звонок с id", id, "удален)");
    } else {
      console.log("Звонка с id", id, "нет в первоначальном массиве");
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
    if (this.intervalId == undefined) {
      this.intervalId = setInterval(() => {
        let currentTime = this.getCurrentFormattedTime();
        for (let i = 0; i < this.alarmCollection.length; i++) {
          checkClock(this.alarmCollection[i], currentTime);
        }
      }, 1000);
    }

    function checkClock(alarmData, currentTime) {
      if (alarmData.time == currentTime) {
        setTimeout(alarmData.callback);
      }
    }
  }

  stop() {
    if (this.intervalID != undefined) {
      clearInterval(this.intervalID);
    }
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
    this.timerId = null;
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
