// 라우터 모듈
const express = require('express');
const router = express.Router();
const empService = require('../service/employee_service.js');

// 전체조회 : GET + '/employees'
router.get('/employees', async (req, res)=>{
  let empList = await empService.findAll();
  res.send(empList);
});
// 단건조회 : GET + '/employees/:id'
router.get('/employees/:id', async (req, res)=>{
  let empId = req.params.id;
  let empInfo = await empService.findById(empId);
  res.send(empInfo);
});
// 등록 : POST + '/employees' + JSON
router.post('/employees', async (req, res)=>{
  let addEmp = req.body;
  let result = await empService.addEmployee(addEmp);
  res.send(result);
});
// 수정 : PUT + '/employees/:id' + JSON
router.put('/employees/:id', async (req, res)=>{
  let empId = req.params.id;
  let empUpInfo = req.body;
  let result = await empService.modifyEmployeeInfo(empUpInfo, empId);
  res.send(result);
});
// 삭제 : DELETE + '/employees/:id''
router.delete('/employees/:id', async (req, res)=>{
  let empId = req.params.id;
  let result = await empService.removeEmployeeInfo(empId);
  res.send(result);
});

module.exports = router;