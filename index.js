import express from "express";
// import $ from "jquery";

const app = express();
const port = 3007;

// middleware to specify dir of static files (e.g. styles).
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Application SlowFinance is listening on port: ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
})
