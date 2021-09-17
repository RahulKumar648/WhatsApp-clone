// import mongoose from "mongoose";

// const connection= async ()=>{
//     const URL='mongodb://user:keshrijiwhatsaap@cluster0-shard-00-00.vmcbh.mongodb.net:27017,cluster0-shard-00-01.vmcbh.mongodb.net:27017,cluster0-shard-00-02.vmcbh.mongodb.net:27017/ WhatsAppClone?ssl=true&replicaSet=atlas-uxheo4-shard-0&authSource=admin&retryWrites=true&w=majority'
//     try {
//         await mongoose.connect(URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//           });
//         console.log('DataBase Connected Successfully');   
//     } catch (error) {
//         console.log('Error while connecting to mongoDB',error);
//     }
// }
// export default connection;

import mongoose from "mongoose";

const Connection = async (username,password) => {
  try {
    const URL =
      `mongodb://${username}:${password}@cluster0-shard-00-00.vmcbh.mongodb.net:27017,cluster0-shard-00-01.vmcbh.mongodb.net:27017,cluster0-shard-00-02.vmcbh.mongodb.net:27017/WhatsAppClone?ssl=true&replicaSet=atlas-uxheo4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    });
    console.log("database connected");
  } catch (error) {
    console.log("error whle connecting mongoDB", error);
  }
};

export default Connection;
