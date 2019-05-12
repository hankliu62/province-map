const provinces = [
  // 'beijing',
  // 'tianjin',
  // 'hebei',
  // 'shanxi',
  // 'neimenggu',
  // 'liaoning',
  // 'jilin',
  // 'heilongjiang',
  // 'shanghai',
  // 'jiangsu',
  // 'zhejiang',
  // 'anhui',
  // 'fujian',
  // 'jiangxi',
  // 'shandong',
  // 'henan',
  // 'hubei',
  // 'hunan',
  // 'guangdong',
  // 'guangxi',
  // 'hainan',
  // 'chongqing',
  // 'sichuan',
  // 'guizhou',
  // 'yunnan',
  'xizang',
  // 'shanxi2',
  // 'gansu',
  // 'qinghai',
  // 'ningxia',
  // 'xinjiang',
  // 'xianggang',
  // 'aomen'
];

const callback = function(province) {
  return function(error, data) {
    if (!error) {
      fetch('http://localhost:3000/map/gen-file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      });
    }
  }
}

const fetchProvinceMap = function(province) {
  jsonp(
    `https://data.jianshukeji.com/jsonp?filename=geochina/${province}.json&_=${new Date().getTime()}`,
    {},
    callback(province)
  )
}

for(const province of provinces) {
  fetchProvinceMap(province);
}
