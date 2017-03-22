'use strict';

    var summaryValidate = function(req, res){
    req.checkBody({
        'summary': {
            isLength: {
                options: [{ min: 42, max: 80 }],
                errorMessage: 'must be between 42 and 80 characters long'
            },
            errorMessage: 'Invalid summary'
          }
      });
    };

module.exports = summaryValidate;
