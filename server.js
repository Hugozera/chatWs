const http = require("http").createServer();
const express = require("express");

const PORT = 8080;
http.listen(PORT, ()=> console.log('Servidor inicado na porta ' + PORT))

