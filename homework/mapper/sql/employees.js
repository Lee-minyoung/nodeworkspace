const selectAll = 
`SELECT id
      ,first_name
	,last_name
      ,email
      ,gender
      ,ip_address
FROM employees
ORDER BY id`;

const selectById =
`SELECT id
	,first_name
	,last_name
      ,email
      ,gender
      ,ip_address
FROM employees
WHERE id = ?`; // 단일값

const insertInfo =
`INSERT INTO employees(first_name, last_name, email, gender, ip_address)
VALUES(?, ?, ?, ?, ?)`; // 배열

const updateInfo = 
`UPDATE employees
SET ?
WHERE id = ?`; // 배열[객체, 단일값]

const deleteInfo = 
`DELETE FROM employees
WHERE id = ?`;

module.exports = {
      selectAll,
      selectById,
      insertInfo,
      updateInfo,
      deleteInfo
}