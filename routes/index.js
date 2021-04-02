var express = require('express');
var router = express.Router();
const { informacion  } = require('../models/index');

/* GET home page. */

router.get('/', async function(req, res, next) {
  let lista = await informacion.findAll({raw: true})
  res.json(lista)
});
router.post('/', async function(req, res, next) {
  const {
    nombreR,
    referenciaR,
    fechaS,
    paisS,
    regionS,
    ciudadS,
    versionS,
    categoriaC,
    marcaC,
    modeloC,
    matriculaC,
    PaisMatriculaC,
    aseguradoraC,
    polizaC,
  } = req.body
    let newS = await informacion.create({
      nombres:nombreR,
      referencia:referenciaR,
      fecha:fechaS,
      pais:paisS,
      region:regionS,
      ciudad:ciudadS,
      variante:versionS,
      categoria:categoriaC,
      marca:marcaC,
      modelo:modeloC,
      matricula:matriculaC,
      pais2:PaisMatriculaC,
      campaña:aseguradoraC,
      poliza:polizaC,
    })
    res.json({
      Provider:newS.get({ plain: true }),
      message:"informacion agregado"
  })
});
router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  let provider = await informacion.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where:{
          id: Number(id)
      }
  });
  if(provider.length == 1){
      res.json(provider[0])   
  }else{
      res.status(404).send('ok') 
  }
});
router.post('/:id', async function(req, res, next) {
  const { id } = req.params;
  const {
    nombreR,
    referenciaR,
    fechaS,
    paisS,
    regionS,
    ciudadS,
    versionS,
    categoriaC,
    marcaC,
    modeloC,
    matriculaC,
    PaisMatriculaC,
    aseguradoraC,
    polizaC,
  } = req.body
  await informacion.update(
    {
      nombres:nombreR,
      referencia:referenciaR,
      fecha:fechaS,
      pais:paisS,
      region:regionS,
      ciudad:ciudadS,
      variante:versionS,
      categoria:categoriaC,
      marca:marcaC,
      modelo:modeloC,
      matricula:matriculaC,
      pais2:PaisMatriculaC,
      campaña:aseguradoraC,
      poliza:polizaC,
    },
    { where:{ id : Number(id) }}     
  );
  res.json({message:"actualizado"});
});


module.exports = router;
