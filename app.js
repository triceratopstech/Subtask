const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

const server = http.createServer((req, res) => {
    let db = new sqlite3.Database('./Subtask.db',(err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let content = [];

  db.all('SELECT * from TaskFields',[],(err, rows ) => {
	// process rows here
    rows.forEach((row)=>{
	  content.push(row.title);
	  content.push(row.description);
	  content.push(row.status);
	  content.push(row.taskID)
	  content.push('\n');
    });
	content.push('\n');
	db.all('SELECT * from TaskRelationships',[],(err, rows ) => {
	  rows.forEach((row)=>{
	    content.push(row.subjectTask);
	    content.push(row.relationshipType);
	    content.push(row.objectTask);
	    content.push('\n');
      });
	  res.end('Hello World\n\t'+content.join('\t'));

    });
  
  });
  
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
