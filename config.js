const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUXY+iSBT9L/WKGUUE0aSTBZUPFQUR/NjsQwkFFA0UXRSITvzvG+zpmc4mO9vLU3Hr5t5zzzm3voOC4Aqt0A1Mv4OS4gYy1B3ZrURgCtQ6ihAFPRBCBsEULNSRszkfxbm6eMVilazf+rqsaKU2GW80jpdZK2bWfklrrXoBjx4o60uGg98UbDySlkdfSO84HevK2T0NA12z4Kvjz4lhrFLdERdzF10M+QU8uooQU1zEizJBOaIwW6GbDTH9GvztMm5Q/yIYcpyeo4jsSaK1N9VvL7m2RpslugqWIVicsnC+Bn+zIHJpMWzXyZss6qkzNoOlnaTysqWlaKvy4a2/x+HS9a13+BWOCxSaISoYZrcv865sYkhOW7I61dd1LV8cfp7KXrBSrVxdOPe09EznGvBNo8Vf5D3lY+onRmyTWzkfDdLobU2Ss+25sepwxx3yGEwP9tY4VJ+B2/TDK6//h/ebshxdWrc8TDTRk80odI8FaY676K6pvKuZEZYHM20ZHnTyNfiT7XKr5P2Vzjle7p2rq00nl1bsn/bOZn+u+SI+TQr/zqWDT/Ahq+nvUOq2dHrlrxdxX0jbJibSHmZ9c3zkhgf+EsK+GHu7aGIoXKIq83nqHrC7t1XFrxuHp5wjCJakcqKEakKUVl/dWlREivPynOgV3cwQTPlHD1AU44pRyDApnrGR1AMwbFwUUMSe9ILm6CUhHfTpYPuqna4ubkck67t+cF+P4SwKW9VP9017IQl5AT1QUhKgqkKhgStG6M1CVQVjVIHpn3/1QIFa9i5c104QeiDCtGJeUZcZgeGHqh+XMAhIXTD3VgSz7oAomA5+hRFjuIirjse6gDRIcINmCWQVmEYwq9DPCRFFIZgyWqOfWzsjYUf82PXOus7vQA/kT0Fw2Gk6FEaCJEuCLAjTofRH9e3alYVl+a1ADPRA9p4mjwdjcSiKk8lQHHSJXfzxE2BXL0QM4qwCUzBbrefYrmYLE65Lq9J11YyVWayAXwN9OOOdeXRTh5IVsr58WK5MeqgXUT2sQl9SGuxz3oUoEmVFtXeUJ/P/LAKmIKkc3zZfT6yfS+y4XbVHX2mEftxSWVTy0/AgctEmW8L1xnJy89SOR97okGf5xt637bUcOl6+MYLgQEf7osby/azb+GmjHghRgwP0uZkV9vHS3GyHgYQsnI7DwyVPc1+4b47Obp5wgsGLDheS0y5jjZaJcSCfU35wulua9ZZjbxY6fDOsZoe1xO2HydaNW252fffsc2eyH28Vfrqpk6r7jTB6rn4BOwH/W7p34J3DBo/epxo/HpN/WUj1WMVhnRqXqK9hF694mhhjRg0fxetRFmW6pGzfxufxYqCswOPxVw+UGWQRoTmYAliElOAQ9AAldWdZs4jIb5rNVNOcKbHWTZ7Biim/1mCPc1QxmJdgyo8leTQZCPLwPcumpDRglYApEHaTszDpPH1TytJlkH1sFVC6byFk4PE31rbtC3EHAAA=', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
