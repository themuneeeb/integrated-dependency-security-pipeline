const _ = require('lodash');

exports.handler = async (event) => {
  // Simulate processing user input using lodash
  const userData = _.get(event, 'body', {});
  const processedData = _.merge({}, userData);
  
  console.log('Processing request:', processedData);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Data processed successfully',
      data: processedData
    })
  };
};