var Twitter = require('twitter');
var twitter = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

var quotes = [
  "パスワードは歯ブラシのように扱いましょう。他人に使わせず、数ヶ月に一度取り替えましょう。",
  "コンピュータは使い物にならない。答えしか出してくれないのだから。",
  "データベースとは、メモリがクラッシュした時に失うものである。",
  "コンピュータの専門家が「ユーザ」と言う時、それは「馬鹿野郎」を意味する。",
  "Unixはシンプルである。しかし、そのシンプルさを理解するには天才でなければならない。",
  "3つの事は間違いない：死、税金、データ消失である。どれが発生したと思う？",
  "コンピュータは多くの事を簡単にしてくれる。しかし、その多くは実は必要とされていない。",
  "ハードウェアとは、コンピュータのうちの蹴る事が可能な部分である。",
  "私の口にもバックスペースキーがあればいいのに。",
  "リブートは特効薬である。ほとんど何でも直してしまう。"
];

function main_handler(event, context) {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  twitter.post('statuses/update', { status: quote }, (err, tweet, response) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log(tweet);
    }
  });
}

exports.main_handler = main_handler;