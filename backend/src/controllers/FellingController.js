const Felling = require('../models/Felling');

module.exports = {
     async index(req, res){
       try {
           const patients = await Felling.find().sort('-date');

           return res.send(patients);
       } catch (error) {
           return res.status(400).send({error: 'Error listing fellings'});
       }
    },

    async store(req, res){
        try {
            const fellingContent = req.body;

            const felling = await Felling.create(fellingContent);
            return res.json(felling);
                              

        } catch (error) {
            return res.status(400).send({error: 'Error creating felling'});
        }
    },

    async delete (req, res){
        try {
            const felling = await Felling.findByIdAndDelete(req.params.id);
            if(felling.stress == null){
                return res.status(400).send({error: 'Error deleting felling'});
            }else{
                return res.send(felling);
            }
        } catch (error) {
            return res.status(400).send({error: 'Error deleting felling'});
        }
    },

    async put (req, res){
        try {
            const { commenter, stress } = req.body;

            const felling = await Felling.findByIdAndUpdate(req.params.id, {commenter, 
                stress
                }, { new: true, runValidators: true });

            if(felling.stress == null){
                return res.status(402).send({error: 'Error updating felling'});
            }else{
                return res.send(felling);
            }

        } catch (error) {
            return res.status(400).send({error: 'Error updating felling'});
        }
    },

    async get (req, res) {
        try {
            const felling = await Felling.findById(req.params.id);
            if(felling.stress == null){
                return res.status(400).send({error: 'Error searching felling'});
            }else{
                return res.send(felling);
            }

        } catch (error) {
            return res.status(400).send({error: 'Error searching felling'});
        }
    }
}; 