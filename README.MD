## 로그데이터 수집 토이 프로젝트

### 기술스택
express kafka opensearch 

## 폴더 구조

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


#### Sample Data
mapping : ecommerce-field_mappings.json  
정의 : document의 필드를 정의합니다. 각 필드별로 데이터 타입을 정해서 토큰화 시 해당 타입으로 전환됩니다.  
명령_mapping : curl -H "Content-Type: application/x-ndjson" -X PUT "https://localhost:9200/ecommerce" -ku admin:admin --data-binary "@ecommerce-field_mappings.json"  
- -H => 요청 헤더를 커스텀화 시킵니다.
- -X => 요청 매소드를 정합니다.
- "URL" => opensearch url와 타켓 index를 정합니다.
- -ku : 유저 username/password를 추가합니다.
- --data-binary : 추가할 데이터를 첨부합니다.  

명령_bulk :  curl -H "Content-Type: application/x-ndjson" -X PUT "https://localhost:9200/ecommerce/_bulk" -ku admin:admin --data-binary "@ecommerce.json"  
- "URL_bulk" : 타켓 인덱스/_bulk를 하면 bulk 처리를 합니다.  

명령_search :  curl -H 'Content-Type: application/json' -X GET "https://localhost:9200/ecommerce/_search?pretty=true" -ku admin:admin -d' {"query":{"match":{"customer_first_name":"Sonya"}}}'  
- "URL_search" : 탐색하려는 인덱스를 확인합니다.  
- "-d {"query":{"match":{"customer_first_name":"Sonya"}}}" : 탐색하고자 하는 데이터를 설정합니다.  

Meta Data :  
{
  "_index": "<index-name>",
  "_type": "_doc",
  "_id": "<document-id>",
  "_version": 1,
  "_source": {
    "title": "The Wind Rises",
    "release_date": "2013-07-20"
  }
}  

Sameple Data :  
{
    "mapping" : {
        "properties" : {
            "category" : {
                "type" : "text", => 해당 필드 타입을 type으로 지정합니다.
                "fields" : {  => multi-fields를 지원합니다. 하나의 필드를 여러 필드 타입으로 분석할 수 있습니다.
                    "keyword" : { => 서브 필드의 임시 이름입니다
                        "type" : "keyword" => type keyword는 정확한 테스트 매칭입니다.
                    }
                }
            },
            "customer_first_name" : {
                "type": "text",
                "fields" : {
                    "keyword" : {
                        "type" : "keyword",
                        "ignore_above" : 256
                    }
                }
            }
        }
    }
}