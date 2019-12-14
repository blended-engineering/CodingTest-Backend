require('dotenv').config();

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRETKEY,
  region: 'ap-northeast-2'
});

const uploadProductImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'blended/productImage', // 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
    acl: 'public-read-write', // 클라이언트에서 자유롭게 가용하기 위함
    key: (req, file, cb) => {
      console.log('업로드된 이미지입니다', file);
      cb(null, String(Date.now()));
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 } // 용량 제한
});

module.exports = {
  s3,
  uploadProductImage
};
