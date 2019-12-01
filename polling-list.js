var pollingList = [
  {
    greatDeveloper: '孙瑞刚',
    times: 1, // 1 + 1
  },
  {
    greatDeveloper: '李浩',
    times: 1,
  },
  {
    greatDeveloper: '闫双辉',
    times: 1,
  },
  {
    greatDeveloper: '杨婷婷',
    times: 1,
  },
  {
    greatDeveloper: '张卫东',
    times: 0,
  },
  {
    greatDeveloper: '王风珠',
    times: 1,
  },
  {
    greatDeveloper: '蒙玉航',
    times: 0,
  },
  {
    greatDeveloper: '李登辉',
    times: 0,
  },
  {
    greatDeveloper: '刘融',
    times: 0,
  },
  {
    greatDeveloper: '王西明',
    times: 0,
  },
  {
    greatDeveloper: '严腾',
    times: 0,
  },
  {
    greatDeveloper: '李毅平',
    times: 0,
  },
  {
    greatDeveloper: '张昊毅',
    times: 0,
  },
  {
    greatDeveloper: '王乾明',
    times: 0,
  },
  {
    greatDeveloper: '王霞',
    times: 0,
  },
  {
    greatDeveloper: '刘瑞',
    times: 0,
  },
  {
    greatDeveloper: '王吉',
    times: 0,
  },
  {
    greatDeveloper: '王尉',
    times: 0,
  },
  {
    greatDeveloper: '黄铎',
    times: 0,
  },
  {
    greatDeveloper: '王凡',
    times: 0,
  },
  {
    greatDeveloper: '杨勋',
    times: 0,
  },
  {
    greatDeveloper: '成建坤',
    times: 0,
  },
  {
    greatDeveloper: '王凯航',
    times: 0,
  },
  {
    greatDeveloper: '刘鑫',
    times: 0,
  },
  {
    greatDeveloper: '白利楠',
    times: 0,
  },
  {
    greatDeveloper: '骆承秀',
    times: 0,
  },
  {
    greatDeveloper: '廖雪青',
    times: 0,
  },
  {
    greatDeveloper: '郑任哲',
    times: 0,
  },
  {
    greatDeveloper: '贺倩茹',
    times: 0,
  },
  {
    greatDeveloper: '杜泽艳',
    times: 0,
  },
  {
    greatDeveloper: '王蕾',
    times: 0,
  },
  {
    greatDeveloper: '杨帆',
    times: 0,
  },
  {
    greatDeveloper: '王霞',
    times: 0,
  }
];

const nextCatchUp = [
  {
    host: '闫双辉',
    date: '2019/09/20',
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
