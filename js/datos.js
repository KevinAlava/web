function doPost(e) {
  var ss = SpreadsheetApp.openByUrl("https://script.google.com/macros/s/AKfycbwPncJAG-Xtm3QFIz29d7G7wKPE0jC0T8qpiShs54FHDJkgtIDd1IQdY_Lk2fsQ2kyVQQ/exec");
  var sheet = ss.getSheets()[0];
  var rowData = [];
  
  rowData.push(e.parameter.CLV2); // Reemplaza "nombre" con los nombres de los campos del formulario
  rowData.push(e.parameter.nbmEm2);

  rowData.push(e.parameter.ruc);
  rowData.push(e.parameter.drc);
  rowData.push(e.parameter.tlf);
  rowData.push(e.parameter.tlfC);
  rowData.push(e.parameter.fch);

  rowData.push(e.parameter.cdg);
  rowData.push(e.parameter.dsc);
  rowData.push(e.parameter.prc);
  rowData.push(e.parameter.cnt);
  
  sheet.appendRow(rowData);
  
  return ContentService.createTextOutput("Datos enviados correctamente");
}