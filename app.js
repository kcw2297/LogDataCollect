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
import { fancytreeRouter } from "./routes/fanctytreeRouter.js";

const app = express();

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

// Static Setting
app.use(express.static(path.join(__dirname, "public")));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


// Routing Setting
app.use("/", indexRouter);
app.use("/charts", chartRouter);
app.use('/documents', documentRouter);
app.use('/fancytrees',fancytreeRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.error("Error:", err);
  next(createError(404));
});


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
