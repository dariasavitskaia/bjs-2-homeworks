function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (!objectInCache) {
      // если элемент не найден
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой

      if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }

    console.log("Из кэша: " + cache.find((item) => item.hash == hash).value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
    return "Из кэша: " + cache.find((item) => item.hash == hash).value;
  }
  return wrapper;
}

function debounceDecorator(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (wrapper.allCount == 0) {
      delay_adj = 0;
    } else {
      delay_adj = delay;
    }

    wrapper.allCount += 1;
    if (timeoutId) {
      //console.log("удали текущий таймаут");
      clearTimeout(timeoutId);
    }
    //console.log("создаем новый таймаут");
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
      wrapper.count += 1;
      //console.log("вызвали колбек");
    }, delay_adj);
  }
  return wrapper;
}
