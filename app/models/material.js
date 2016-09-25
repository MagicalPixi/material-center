/**
 * Created by zhouchunjie on 16/9/25.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MaterialSchema = new Schema({
  name: String,
  mimeType: String,
  size: String,
  url: String
});

MaterialSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Material', MaterialSchema);
