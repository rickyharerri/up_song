// importing observables and decorate
import { decorate, observable, action, computed } from "mobx";
import { baseUrl } from "../src/components/config";
class Store {
  setLoading=(status: boolean)=> {
    this.loading = status;
  }
  // observable to save news headlines
  news = [];
  loading = false;


  setData = (data: any) => {
    this.news = data;
    this.setLoading(false)

  };

  // action to call API and get news
  searchNews = () => {
    this.setLoading(true)
    fetch(`${baseUrl.url}top-headlines?country=us&apiKey=f0339d3b6a5d4757a41370aa184190b9`)
      .then(response => response.json())
      .then(data => this.setData(data))
  };
  get getNews() {
    return this.news;
  }

}

decorate(Store, {
  news: observable,
  searchNews: action,
  getNews: computed,
  loading: observable,
  setLoading: action
});

// export class
export default new Store();