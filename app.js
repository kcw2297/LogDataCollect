// Libraries
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";

// Modules
import {indexRouter} from "./routes/indexRouter.js";
import {chartRouter} from "./routes/chartRouter.js";
import { documentRouter } from "./routes/documentRouter.js";

const app = express();
/**
 * [분석]
 * bin/app에서 app 변수를 import하여서 다시 var app= require("../app")으로
 * 재선언 하였습니다. 이것은 허용되는 관습인데, 다른 파일에 나눠진 별도의 인스턴스입니다.
 *
 * export한것이 객체이기에, require()이 live binding을 지원하지 않는다하더라도,
 * 동일한 메모리를 참조하기에 다른 모듈에서 수정시 원본에도 영향이 갑니다.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// Middleware Setting
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/charts", chartRouter);
app.use('/documents', documentRouter);
/**
 * [분석]
 * 3rd party 라이브러리 미들웨어를 사용할 경우 자체적으로 next함수가 포함되어 있다.
 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.error("Error:", err);
  next(createError(404));
});
/**
 * [분석]
 * next()함수는  미들웨어 chaining을 위해 사용됩니다.
 * 위는 404에러가 나올경우 아래 에러 핸들링으로 넘깁니다.
 */

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(`err: ${err}`);
});

export default app;
