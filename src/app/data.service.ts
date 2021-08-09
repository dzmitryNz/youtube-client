import { searchRes } from "./app.constants";
import { SearchItem } from "./shared/models/search-item.model";

export class DataService{

  private data: SearchItem[] = searchRes.items;

  getData(): SearchItem[] {
    return this.data;
  }

}
