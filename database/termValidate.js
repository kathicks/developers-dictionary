'use strict';

  var termValidate = function(req, res){
    req.checkBody({
        'term': {
            isLength: {
                options: [{ min: 2, max: 30 }],
                errorMessage: 'must be between 2 and 30 characters long'
            },
            errorMessage: 'Invalid term'
        }
    });
  };

module.exports = termValidate;
