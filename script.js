//Задание 1

function delay(ms) {
    return new Promise ((resolve, reject) => {
        return setTimeout(() => {
            resolve();
        }, ms)
    })
}

delay(1000).then(() => console.log("Hello!"))	

//Задание 2

function getUserInfo() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
    });
}

function getUserAvatar(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
        setTimeout(() => resolve(userInfo), 1000);
    });
}

function getUserAdditionalInfo(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.interests = ['sport', 'books'];
        setTimeout(() => resolve(userInfo), 1000);
    });
}

getUserInfo().then((info) => getUserAvatar(info))
             .then((info) => getUserAdditionalInfo(info))
             .then((info) => console.log(info));

//Задание 3

new Promise(function(resolve, reject) {
    setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
  })
    .then(function(userInfo) {
      return new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error('wrong data') ), 1000);
      });
    })
    .catch(function(err) {
        console.error(err);
    });