const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '今日は華氏94度だったので:insertx:は釣りに出かけました。彼らは:inserty:に行くと、喧嘩を始め、:insertz:のように戦った。 二郎は魚を食べたかったのに食べられませんでした。 —:insertx: はとてもメガネの似合う150ポンドのイケメンでした。';
const insertX = ['サンジ', '太郎', 'ハリー'];
const insertY = ['ディズニー', '酒場', '船'];
const insertZ = ['風', '炎', 'コック'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('二郎', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(150/2.205)} kg`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('150ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
