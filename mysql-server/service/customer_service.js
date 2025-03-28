// service/customer_service.js
const mariaDB = require('../mapper/mapper.js');

// 전체조회
const findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};
// 단건조회
const findById = async (custId)=>{
  let info = (await mariaDB.query('selectById', custId))[0];
  return info;
};
// 등록
const addCustomer = async (custInfo)=>{ // 객체
  let columnlist = ['name', 'email', 'phone', 'address'];
  let addInfo = converterAry(custInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
};
// 객체 -> 배열
const converterAry = (target, list)=>{

  let aray=[];
  for(let field of list){
    let val = target[field];
    aray.push(val);
  }
  return aray;
}
// 수정
const modifyCustomerInfo = async (custInfo, custId)=>{
  let updateInfo = [custInfo, custId];
  let result = await mariaDB.query('updateInfo',updateInfo);
  return result;
};
// 삭제
const removeCustomerInfo = async (custId)=>{
  let result = await mariaDB.query('deleteInfo', custId);
  return result;
};

module.exports = {
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo
}