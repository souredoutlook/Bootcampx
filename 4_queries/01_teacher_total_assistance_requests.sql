SELECT (SELECT COUNT(*) FROM assistance_requests WHERE teacher_id = teachers.id) as total_assistances, name
FROM teachers
WHERE name = 'Waylon Boehm';
