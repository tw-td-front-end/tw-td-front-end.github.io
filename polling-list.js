var pollingList = [
  {
    greatDeveloper: '孙瑞刚',
    times: 0 + 1, // 1 + 1
  },
  {
    greatDeveloper: '李浩',
    times: 0,
  },
  {
    greatDeveloper: '闫双辉',
    times: 0,
  },
  {
    greatDeveloper: '杨婷婷',
    times: 0,
  },
  {
    greatDeveloper: '张卫东',
    times: 0,
  },
  {
    greatDeveloper: '王风珠',
    times: 0,
  },
  {
    greatDeveloper: '蒙玉航',
    times: 0,
  },
  {
    greatDeveloper: '李毅平',
    times: 0,
  },
  {
    greatDeveloper: '李登辉',
    times: 0,
  }
];

const nextCatchUp = [
  {
    host: '孙瑞刚',
    date: '2019/08/23',
  },
];

const getRankList = () => {
  return pollingList.sort((per1, per2) => per2.times - per1.times).map(per => per.greatDeveloper);
};

const getLeastTimesPerson = () => {
  let leastTimesPerson = pollingList[0];
  pollingList.forEach((person) => {
    if (person.times < leastTimesPerson.times) {
      leastTimesPerson = person;
    }
  });
  return leastTimesPerson;
};

console.log('Who has least times:', getLeastTimesPerson());
console.log('Rank list:', getRankList());
