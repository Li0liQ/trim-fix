
exports = module.exports = trim;

function trim(str){
  return str.trim();
}

exports.left = function(str){
  return str.trimStart();
};

exports.right = function(str){
  return str.trimRight();
};