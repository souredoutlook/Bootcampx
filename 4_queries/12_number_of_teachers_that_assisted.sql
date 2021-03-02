-- SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
-- FROM assistance_requests
-- JOIN teachers ON assistance_requests.teacher_id = teachers.id
-- JOIN students ON assistance_requests.student_id = students.id
-- JOIN cohorts ON students.cohort_id = students.id
-- WHERE cohorts.name = 'JUL02'
-- ORDER BY teacher; 

--ABOVE DOES NOT SHOW JADYN BOSCO?

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;
