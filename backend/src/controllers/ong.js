// Requires
const connection = require('../database/connect');
const crypto = require('crypto');
const table_db = "ONGs";
// Exports
module.exports = {

    async create(request,res){
        // Pega todos os paramentros da query e colocar na variavel
        const parms = request.query;
        // Pega todos os paramentros do body e colocar na variavel
        const body = request.body;
        //  Passa parametros body para varaveis
        const {name,email,whatsapp,city,uf}=body;
        // Verifica se a Key é permitida
        //if(parms.key==='1234567890'){
            // Criando id
            const id = crypto.randomBytes(4).toString('HEX');
            // Cria variavel insert
            const insert = {"id":id,"name":name,"email":email,"whatsapp":whatsapp,"city":city,"uf":uf};
            // Insere no banco
            await connection(table_db).insert(insert);
            // Resposta
            return res.json({
                query:parms
                ,data:insert
                ,msg:"SUCCESS"
            });
        /*}else{
            // Resposta
            return res.status(401).json({
                query:parms
                ,data:body
                ,msg:"NO KEY OR KEY NOT EXISTS"
            });
        }*/
    },

    async select_all(request,res){
        // Pega todos os paramentros da query e colocar na variavel
        const parms = request.query;
        // Consulta no banco id
        const ong = await connection(table_db).select('id','name','email','whatsapp','city','uf');
        // Verifica se a Key é permitida
        if(ong.length>0){
            // Resposta
            return res.json({
                query:parms
                ,rows:ong.length
                ,data:ong
                ,msg:"SUCCESS"
            });
        }else{
            // Resposta
            return res.status(406).json({
                query:parms
                ,rows:ong.length
                ,msg:"NO ONGS"
            });
        }
    },

    async select_id(request,res){
        // Pega todos os paramentros da rota e colocar na variavel
        const routes = request.params;
        // Consulta no banco id
        const ong = await connection(table_db).select('name','email','whatsapp','city','uf').where({'id':routes.id});
        // Verifica se a Key é permitida
        if(ong.length>0){
            // Resposta
            return res.json({
                query:routes
                ,rows:ong.length
                ,data:ong
                ,msg:"SUCCESS"
            });
        }else{
            // Resposta
            return res.status(406).json({
                query:routes
                ,rows:ong.length
                ,msg:"ID NO EXISTS"
            });
        }
    }
}