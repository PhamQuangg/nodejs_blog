const mongoose = require('mongoose');
async function connect(){

    try {
        mongoose.connect('mongodb://localhost:27017/my_blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,});
        console.log('Đã kết nối tới cơ sở dữ liệu MongoDB');
    } catch (error) {
        console.error('Lỗi kết nối tới cơ sở dữ liệu', err);
    }
}
module.exports = {connect};