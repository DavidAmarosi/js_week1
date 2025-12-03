import { dataBase } from "../db/data.js";

function createNewReport(id, terroristName, lastName, weapons = [], text = "") {
  const report = {
    id,
    terroristName: terroristName ?? "Muhammad",
    lastName: lastName ?? "unknown",
    weapons,
    text,
  };
  return report;
}

function generateUniqeId() {
  let id = '';
  for (let i = 0; i < 8; i++) id += `${Math.floor(Math.random(0.1,1)* 10)}`;
  id = +id;
    if (typeof id === "string" || typeof id === "number" && `${id}`.length > 0) {
      return id;
    } else {
      console.log("the id is not string/number or is empty");
    }
}


function saveData(newReport) {
  let exists = false;

  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].id === newReport.id) {
      exists = true;
      break; 
    }
  }

  if (exists) {
    throw new console.error('the id already exist');
    ;
  } else {
    dataBase.push(newReport);
  }

  return dataBase;
}


function resulltById(dataBase) {
    dataBase.sort((a,b) => a.id-b.id);
    return dataBase
}


function resultByName(dataBase) {
    return dataBase.sort((a,b) => {
        return a.terroristName.localeCompare(b.terroristName)
    

    })
}

function sortById(id) {
    for (let i = 0; i < dataBase.length; i++){
        if (dataBase[i].id == id){
            return dataBase[i]
        }else {throw console.error("the id is not found");}
        
    }
}


function deletedById(id) {
    for (let i = 0; i < dataBase.length; i++){
        if (dataBase[i].id == id){
            dataBase.splice(dataBase[i],1)
        }else {throw console.error("the id is not found");}
        
    }
}

function editRepport(id,updates) {
     for (let i = 0; i < dataBase.length; i++){
        if (dataBase[i].id == id){
            dataBase[i].terroristName = updates.terroristName
            dataBase[i].lastName = updates.lastName
            dataBase[i].weapons = updates.weapons
            dataBase[i].text = updates.text
        }else {throw console.error("the id is not found");}
        
}
const id1 = generateUniqeId();
const id2 = generateUniqeId();

const report1 = createNewReport(
  id1,
  "muhamad",
  "shosh",
  ["shotgan", "knife"],
  "terorist from ramalla"
);
const report2 = createNewReport(
    id2,
    'ahmad',
    'gosh',
    ['gun','ax'],
    'terorist from jenin'
);

saveData(report1)
saveData(report2)
console.log(dataBase);
console.log(id1);

// console.log(resulltById(dataBase))
// console.log(resultByName(dataBase));
// console.log(sortById(id1));
deletedById(id1);
console.log(dataBase);




    