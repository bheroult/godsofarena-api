module.exports = app => {

    app.get("/types", async (req, res) => {
        return res
            .status(200)
            .json(['Epéiste', 'Lancier', 'Cavalier', 'Archer', 'Animal']);
    });
}