const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const processSequentially = async () => {
  console.log('Start');
  await delay(1000);
  console.log('First operation completed');
  await delay(2000);
  console.log('Second operation completed');
  await delay(1500);
  console.log('Third operation completed');
  console.log('All operations completed');
};

processSequentially();

//создадим функцию для асинхронной обработки строки (например, преобразуем в верхний регистр).
const processString = (str: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 1000); // задержка 1 секунда
  });
};
const processArray = async (arr: string[]) => {
  const results = await Promise.all(arr.map(processString)); // Обрабатываем строки параллельно
  console.log(results);
};

processArray(['hello', 'world', 'async', 'await']);

//задание с ошибкой, которая будет возникать в одном из промисов.  обработать ошибку с помощью try/catch.

const promiseWithDelay = (ms: number, shouldReject: boolean = false): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject('Error occurred!');
      } else {
         resolve('Operation completed successfully');
      }
    }, ms);
  });
};

const processParallelWithError = async () => {
  try {
    const results = await Promise.all([
      promiseWithDelay(1000),
       promiseWithDelay(2000),
      promiseWithDelay(1500, true), // этот промис завершится с ошибкой
    ]);
     console.log(results);
  } catch (error) {
    console.error('Caught an error:', error);
  }
};

processParallelWithError();

//Асинхронная функция с динамическим временем выполнения
//функцию, которая принимает массив чисел и на основе этих чисел создаёт промисы с разными задержками.
const delayWithNumber = (ms: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);// возвращаем задержку как результат
    }, ms);
  });
};

const processNumbers = async (numbers: number[]) => {
  const results = await Promise.all(numbers.map(delayWithNumber));