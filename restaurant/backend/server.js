import app from "./app.js";

const port = process.env.PORT || 3000; // Use a default value if PORT is not defined
app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
});
