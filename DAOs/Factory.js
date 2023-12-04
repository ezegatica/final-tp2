import votosMemoryDao from "./Memory/votosMemoryDao.js"
import XSqlDao from "./Sql/xSqlDao.js";

class Factory {
  constructor() {}

  static factory = (MODE) => {
    return {
      xDao: new votosMemoryDao(),
    };
  };
}

export default Factory;
