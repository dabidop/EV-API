const { response } = require("express");

const donante = require("../models/donantes");

const getDonante = async (req, res) => {
  const donantes = await donante.find(); //obtener todos los documentos de una colección
  res.json({
    msg: donantes,
  });
};
const postDonante = async (req, res) => {
  const datos = req.body; //capturar datos de la url de postman
  let mensaje = "Insercion exitosa";
  try {
    const usuarios = new donante(datos); //instaciar el objeto
    await usuarios.save(); //guardar la base de datos
    console.log(donante);
  } catch (error) {
    mensaje = error;
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const putDonante = async (req, res) => {
  const {
    id_Donante,
    nombre_Donante,
    direccion_Donante,
    telefono_Donante,
    email_Donante,
    tipo_Donante,
    documento_Identidad,
    fecha_Registro,
    entidad_Asociada,
    precio_dolar
  } = req.body; //desestructurar
  try {
    const donante1 = await donante.findOneAndUpdate(
      { id_Donante: id_Donante },
      {
        nombre_Donante: nombre_Donante,
        direccion_Donante: direccion_Donante,
        telefono_Donante: telefono_Donante,
        email_Donante: email_Donante,
        tipo_Donante: tipo_Donante,
        documento_Identidad: documento_Identidad,
        fecha_Registro: fecha_Registro,
        entidad_Asociada: entidad_Asociada,
        precio_dolar: precio_dolar
      }
    ) //las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
    mensaje = "actualizacion exitosa"
  } catch (error) {
    mensaje = error
  }
  res.json({
    msg: mensaje
  });
};
const deleteDonante = async (req, res) => {
  const { id_Donante } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    const donante1 = await donante.findOneAndDelete({ id_Donante: id_Donante });
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg:mensaje
  })
};

module.exports = {
  getDonante,
  postDonante,
  putDonante,
  deleteDonante,
};
