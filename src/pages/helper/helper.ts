/**
 * Created by patrickpu on 11/4/2016.
 */

export class Helper {
  constructor(){

  }
  delete(table, id){
    let records = JSON.parse(window.localStorage[table]);

    if (records[id]){
      delete records[id];
    }

    window.localStorage[table] = JSON.stringify(records);
  }
}
