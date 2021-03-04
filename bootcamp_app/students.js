const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohort}%`, limit]
const queryString = (`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`);
pool.query(queryString, values)
.then(res => {
  for (row of res.rows) {
    console.log(`${row.name} has an id of ${row.student_id} and was in the ${res.cohort} cohort`);
  }
  pool.end();
})
.catch(err => console.error('query error', err.stack));
