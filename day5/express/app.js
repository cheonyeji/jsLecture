import express from "express";
import path from "path";
import fs from "fs"; // node.js에서 제공하는 fileSystem

const app = express();

// express에게 알려줘야 함!
// POST 방식으로 전달받은 데이터는 모두 req.body 안에 존재
// body-parser -> 원래는 외부 라이브러리였으나 express에 포함
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // url 쿼리 스트링(form 데이터)을 파싱해오기 위해 필요

// html, css, image, js 등의 static한 파일 로드를 위한 설정
app.use(express.static("public")); // public은 static한 파일이 저장된 폴더명
app.use(express.static(__dirname + "/public"));

// 원활한 jQuery src 연결을 위한 설정
// path : 경로를 설정하도록 도와주는 요소
app.use(
  "/node_modules",
  express.static(path.join(__dirname + "/node_modules"))
);

app.get("/", function (req, res) {
  res.send("Hello World!!!!!!!!!!!!!!!");
});

app.get("/login", function (req, res) {
  // login form이 있는 페이지(파일)를 로딩하도록 처리
  res.sendFile(__dirname + "/public/ajax.html");
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const responseData = {};
  responseData.email = email;
  res.json(responseData);
});

app.get("/showList", function (req, res) {
  res.sendFile(__dirname + "/public/showList.html");
});

app.get("/database", function (req, res) {
  // public/data/MOCK_DATA.json파일을 res로 전달
  // local 환경에 있는 json파일을 동기적으로 읽어온 뒤 ~ (코드가 위에서부터 아래로 실행되는 것을 보장)
  // fs.readFile() : 비동기 처리로 인해 실행순서를 보장X
  const data = JSON.parse(
    fs.readFileSync("./public/data/MOCK_DATA.json", "utf8")
  );

  res.json(data);
});

app.listen(3000, function () {
  console.log("server is running!");
});
