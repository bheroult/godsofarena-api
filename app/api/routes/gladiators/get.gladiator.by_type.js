module.exports = app => {

    app.get("/gladiators/type/:value", async (req, res) => {
      const { Gladiator } = app.locals.models;
      try {
        const gladiators = await Gladiator.findAll({
            where: {
                type: req.params.value
            }
          });
  
        return res
            .status(200)
            .json(gladiators);
        
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