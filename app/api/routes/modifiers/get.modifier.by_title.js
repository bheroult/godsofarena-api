module.exports = app => {

    app.get("/modifiers/title/:value", async (req, res) => {
      const { Modifier } = app.locals.models;
      try {
        const modifiers = await Modifier.findAll({
            where: {
                title: req.params.value
            }
          });
  
        return res
            .status(200)
            .json(modifiers);
        
      } catch (err) {
        //errorHandler(err, res)
        console.error(err);
        return res
          .status(500)
          .json(err);
      }
    }
    );
  }