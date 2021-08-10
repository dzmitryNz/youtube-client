import { searchRes } from "./constants";
import { SearchItem } from "./models/search-item.model";

export class DataService{

  private data: SearchItem[] = searchRes.items;

  getData(): SearchItem[] {
    return this.data;
  }

}
