import express from "express";

const app = express();
const port = 3007;

// middleware to specify dir where express should look for static files (styles etc).
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Application SlowFinance is listening on port: ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
})
