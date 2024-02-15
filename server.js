const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

app.use(cookieSession({
	name: "cheburek",
	keys: ["keys"]

	}));

app.get("/", (req, res) => {
	res.json({message: "Welcome to cheburnet!"});
	req.session.views = (req.session.views || 0) + 1
});

const PORT = process.env.PORT || 8080 ;


app.listen(PORT, ()=>{
	console.log(`listen on ${PORT} port`);
});
