SELECT SUM(duration)
FROM assignment_submissions
JOIN students ON assignment_submissions.student_id = students.id --if the order doesn't matter does using the table name on both sides make it more explicit?
WHERE students.name = 'Ibrahim Schimmel';