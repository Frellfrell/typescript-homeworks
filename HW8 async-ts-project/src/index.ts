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