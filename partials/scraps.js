
/* 
// Error Handler
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: "", password: "" };
    // duplicate error code
    if (err.code === 11000) {
        errors.username = "That username is already registered";
        return errors;
    }
    // validation errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
     try {
        const newUser = await User.create({ username, password });
        // newUser.save();
        // console.log("New user was created", newUser);
        res.status(201).json(newUser);
        res.redirect("/");
    } catch (err) {
        const errors = handleErrors(err);
        // if (err) return;
        req.session.errors = errors;
        // res.status(400).json({ errors });
        res.redirect("/register");
    }
};
// mongoDB connection
mongoose
    .connect(
      "",
      {
        dbName: "wikiapp",
        user: "atlasAdmin",
        pass: "abcde12345",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err));
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Testing Mongoose db.once method");
  });
  //Schema methods
  articleSchema.methods.findArticle = function (id) {
    return mongoose
        .model("article")
        .findById(this.id, function (err, user) {
            if (err) return console.log(err);
            console.log("User Found!", user);
            return user;
        });
};
// Mongoose methods
