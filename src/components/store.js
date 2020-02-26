import mobx, {observable, action} from 'mobx';

class Store {

  @observable languages = "Fr";
  @observable display = "inherit";
  @observable loading = "inherit";
  @observable obj =false;

  @action changeLangue (x) {
  this.languages = x;
   }
   @action Mouse () {
     if(this.display === "inherit"){
       this.display ="none"
       console.log(this.display)
     } else {
       this.display ="inherit"
       console.log(this.display)
     }
    }
  @action loaded (x) {
    this.loading = "none";
     console.log(this.loading)
     }

}

const store = new Store();
export default store;
