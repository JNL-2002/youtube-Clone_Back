const {spawn} = require('child_process');


exports.search = (searchQuery) => {
return new Promise((resolve, reject) => {
  const process = spawn('python', ['search.py', searchQuery], {
        encoding : "utf8"
    });

  let output;
  let errData;

  process.stdout.on('data', (data) => {
    output = data;
  });

  process.stderr.on('data', (data) => {
            errData = data; 
  });

  process.on('exit', (code) => {
    if (code === 0) {
      resolve(output) 
    } else {
      reject(errData)
    }
  });

  process.on('error', (err) => {
            reject(err);
        });
  });
}
