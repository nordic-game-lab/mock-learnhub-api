import express from "express";

const app = express();
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.listen(3000, () => console.log('alive on http://localhost:3000'));

async function isAuth(req, res, next) {
    const auth = req.headers["authorization"];
    if(auth == process.env.API_TOKEN){
        next();
    } else {
        res.sendStatus(401);
    }
}

app.delete('/v2/user', isAuth, async (req, res) => {
    const email = req.query.email;
    if (email) {
        res.status(200).send("User deleted")
    }
})

app.get('/v2/user', isAuth, async (req, res) => {
    const email = req.query.email;
    if (email) {
        res.status(200).json({"email": email});
    }
})

app.post('/v2/user', isAuth, async (req, res) => {
    const { name, email } = req.body;
    if (email) {
        if (name) {
            res.satus(201).json({"name": name, "email": email})
        } else {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(404);
    }
})
