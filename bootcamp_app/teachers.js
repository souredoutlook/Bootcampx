const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [process.argv[2]]
const queryString = `
SELECT teachers.name, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`;
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => console.log(`${row.cohort}: ${row.name}`));
  pool.end();
})
.catch(err => console.error('query error', err.stack));