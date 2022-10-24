const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng+chi_tra');
  await worker.initialize('eng+chi_tra');
  // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  const { data: { text } } = await worker.recognize('https://vanthink.oss-cn-qingdao.aliyuncs.com/8134fc4f45aa937bc2109596a245ab40.png');
  console.log(text);
  await worker.terminate();
})();
