# Blended Backend - 김해준


## Install

1. __'npm install'__ 을 실행해주세요<br>

2. root에 **.env 파일을 생성**해주세요<br>

![image](https://user-images.githubusercontent.com/49202512/70802645-5183b300-1df5-11ea-9a17-b8238f164dec.png)<br>

3. .env 파일 안에 **아래의 코드를 복사후 입력**해주세요<br> 

```
DB_USER="개인정보입니다"
DB_PW="개인정보입니다"
DB_HOST="개인정보입니다"
```
**(위 데이터는 메일을 통해 전송하겠습니다.)**

4. **'npm start'** 로 서버를 실행해주세요.

5. 'POSTMAN' 또는 로컬웹에서 API를 실행해주세요.


## Mission
  - 상품 상세 페이지를 위한 API 설계 및 작성 완료
  - MVC 패턴으로 설계된 REST API 구현
    - routes -> controllers -> models
  - 상세 페이지 및 페이지 확장을 위한 DB Schema 구현
    - AWS RDS - MySQL 활용하여 실제 Database 구현
    - Sequelize 모듈 활용
  - 각 DB table 별 fakedata를 참고할 수 있는 추가 API 설계
  
  
## Completed API
**<http://127.0.0.1:3000/product/1>**
  - Response
![image](https://user-images.githubusercontent.com/49202512/70842436-fc808500-1e66-11ea-8044-5eff8c6dd46c.png)
  - [GET] /product/:productId
  - "제품 정보", "가격 비교", "관련 상품", "색상", "리뷰"를 모두 포함한 API
  
    1. productId 를 통해 각 상품별 정보를 얻을 수 있습니다.
    
    2. 구성요소
        - **brand** (제품의 브랜드이름, 브랜드홈페이지 url을 제공합니다.)
        - **groupColor** (제품의 색상 계열 정보를 제공합니다. - 화장품의 색상군 감안)
        - **detailColor** (제품의 상세 색상 정보를 제공합니다.)
        - **saleInfos** (제품의 가격 비교입니다. 판매가, 판매url, 작성날짜를 제공합니다.)
          - **market** (제품이 판매되고 있는 마켓에 대한 정보를 제공합니다. 마켓명, 마켓URL을 제공합니다.)
        - **reviews** (제품을 사용한 유저가 작성한 리뷰를 볼 수 있습니다, 리뷰점수, 커맨트, 작성날짜를 제공합니다.)
          - **user** (제품을 사용한 유저의 id 정보를 제공합니다.)
        - **otherColorProducts** (동명제품의 다른 색상에 대한 정보를 제공합니다.)
          - 현재 각 product마다 한 개의 컬러를 가지고 있기 때문에, 같은 이름을 가진 제품을 검색하여 제품명, 제품 상세 색상 정보를 제공합니다
          - 클릭 시 화면 전환을 위해 productId도 함께 제공하고 있습니다.
        - **relatedProducts** (현재 상품과 연관된 상품의 정보를 제공합니다)
          - 관련 상품에 대한 정확한 가이드가 없어 같은 카테고리(립스틱)를 가진, 이름이 다른 제품들을 모두 반환하도록 설계 되어있습니다.
          - 클라이언트 화면 구현을 위해 많은 정보가 들어가 있는 점 참고 부탁드립니다.
    

## Additional API

- 각 table 별 fakedata 자료와 데이터 구조를 쉽게 확인 할 수 있는 API 설계
- [GET] /database/db테이블명  

  1. <http://127.0.0.1:3000/database/brand> (브랜드)
  2. <http://127.0.0.1:3000/database/detailColor> (상세 색상)
  3. <http://127.0.0.1:3000/database/groupColor> (색상군)
  4. <http://127.0.0.1:3000/database/market> (마켓)
  5. <http://127.0.0.1:3000/database/product> (제품)
  6. <http://127.0.0.1:3000/database/review> (리뷰)
  7. <http://127.0.0.1:3000/database/saleInfo> (가격 비교)
  8. <http://127.0.0.1:3000/database/user> (유저)
                

## DB Schema
  - MySQL을 활용하여 RDBMS 구현
![image](https://user-images.githubusercontent.com/49202512/70803948-8e04de00-1df8-11ea-9541-d49cc9cf040d.png)

## Git Log
![image](https://user-images.githubusercontent.com/49202512/70806701-4170d100-1dff-11ea-9eb1-896160b2ce18.png)

## 감사합니다.
  - 지원자 - 김해준
  - 메일주소 - dan.kimhaejun@gmail.com
  - 문의사항 있으시면 언제든지 연락 부탁드립니다.
