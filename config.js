//API KEY's should virtually always be hidden by a config var or within an ignored config file, in this case we are not
export default class Config{
  constructor(){
    this.API_KEY = '032393f752702efbd93f839f09666d46'
  }
  getKey(){
    return this.API_KEY;
  }
}
