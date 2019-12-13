# Blended Backend Mission

## Install

1. 'npm install' 을 실행해주세요<br>
2. root에 .env 파일을 생성해주세요<br>
   ![image](https://user-images.githubusercontent.com/49202512/70802645-5183b300-1df5-11ea-9a17-b8238f164dec.png)
   - ** .env 파일 생성 후 아래 코드를 복사해 정보를 입력하면 구동이 됩니다 **<br>

```
DB_USER="개인정보입니다"
DB_PW="개인정보입니다"
DB_HOST="개인정보입니다"
```

(위 데이터는 메일을 통해 전송하겠습니다.)

3. 'npm start' 로 실행해주세요.

4. 'POSTMAN' 또는 로컬웹에서 <http://127.0.0.1:3000/product/1>

## Mission

![Test Image](./IMAGE.png)

위 상품 상세 페이지를 위한 API 를 설계 및 작성하시면 됩니다.

### 유의 사항

- 매칭률, 제품 우측의 하트와 알림은 고려하지 않으셔도 됩니다. (확인)
- Data는 가상의 API Call로 남겨두셔도 좋습니다. (API작성 완료)
- 모든 요구사항을 완료하는 것보다 과정을 중요하게 생각합니다. (확인)
- Table Schema에 유의하시면서 작성하시면 됩니다. (확인)
- "제품 정보", "가격 비교", "관련 상품", "색상", "리뷰"는 별도의 API로 분리하셔도 좋습니다.
  - 하나의 API에 "제품 정보", "가격 비교", "관련 상품", "색상", "리뷰" 모두 나오게 작성 (확인)
- 색상정보는 RGB (ex. #8fac9c) 로 저장됩니다. (확인)

## 우리는 이러한 점을 중심으로 평가합니다.

- Mission 을 받을 때 부터 완성될 때까지 어떻게 접근하는지를 평가합니다.
  - Git log 를 자세히 작성해 주세요
- Typescript or Javascript 활용 능력을 확인합니다.

## Tech Stack

아래 사항이 필수가 아닙니다. 필요하다면 추가로 다양한 Librery 나 도구를 사용하셔도 됩니다.

- 필수 Tech Stack
  - Javascript ( At least JS ES 6 )
    - Node.js
  - Git
  - GraphQL or RESTFUL
  - DynamoDB or RDB
- 권장 Tech Stack
  - Typescript
  - Serverless

## 제출 방법

- Github(Gitlab, bitbucket) 에 공개 저장소로 제출하시면 됩니다.
- 실행 방법 및 프로젝트 소개를 README.md 파일에 정리해 주세요
- 과제를 완료하시면 people@cosmochain.io로 연락 주시기 바랍니다.
