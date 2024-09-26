
const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("../clientportalver2/config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();

const PORT = 6000;
const authRouter = require("../clientportalver2/routes/authRoute");
const { notFound, errorHandler } = require("../clientportalver2/middlewares/errorHandle");
const productRouter = require("../clientportalver2/routes/productRoute")
const blogRouter = require("../clientportalver2/routes/blogRoute")
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const proposalRouter = require("./routes/proposalsubmitRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/proposal", proposalRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/enquiry", enqRouter);


app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => {
    console.log("Server is running at PORT " + PORT);
}); 
