import { uuid } from 'uuidv4'

const fileConverter = {
  convertTxtToJson: txtFile => {
    let input = txtFile;
    let reader = new FileReader();
    reader.onload = function () {
      let str = reader.result;
      var result = str.match( /[^\.!\?]+[\.!\?]+/g );
      const obj = {}
      result.map(item => {
        obj[uuid()] = item
      })
    };
    reader.readAsText(txtFile);
  },
  convertDocxToJson: docxFile => {

  }
}

export default fileConverter
