'use strict';

  var tagValidate = function(req, res){
    req.checkBody({
        'tags': {
            isLength: {
                options: [{ min: 1, max: 30 }],
                errorMessage: 'must not be empty'
            },
            errorMessage: 'Invalid term'
        }
    });
  };

module.exports = tagValidate;
