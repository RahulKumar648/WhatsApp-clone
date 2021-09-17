import Message from "../model/message.js";



export const newMessage = async(req,res) => {
    const newMessage = new Message(req.body);
    try {
        await newMessage.save();
        res.status(200).send('message save successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getMessage = async(req,res) => {
    try {
       const messages = await Message.find({conversationId:req.params.id});
       res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
}