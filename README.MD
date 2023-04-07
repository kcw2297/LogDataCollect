## 로그데이터 수집 토이 프로젝트

## 폴더 구조

실행 : **npx express-generator**

폴더 구조 :  
├── app.js  
├── bin  
│ └── www  
├── package.json  
├── public  
 │ ├── images  
 │ ├── javascripts  
 │ └── stylesheets  
 │ └── style.css  
├── routes  
│ ├── index.js  
│ └── users.js  
└── views  
 ├── error.pug  
 ├── index.pug  
 └── layout.pug

## 실행 방법

[ Max/ Linux 실행 ]
DEBUG=myapp:_ npm start
[ 윈도우 실행 ]
set DEBUG=myapp:_ & npm start
- DUBUG=mapp:_의 의미는 실행 중 발생하는 디버깅 로그들을 출력한다는 의미입니다.