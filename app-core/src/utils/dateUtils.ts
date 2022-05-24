import { JsonConverter, JsonCustomConvert } from 'json2typescript'

var { DateTime } = require('luxon')

// export class DateUtil {
//   constructor() {}

//   getDate(): Date {
//     return new Date();
//   }

//   getDateFormat(date: string): Date {
//     try {
//       return DateTime.fromISO(date);
//     } catch (error) {
//       console.error(error);
//       return DateTime.local();
//     }
//   }
// }

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
  dateUtil: DateUtil
  constructor() {
    this.dateUtil = new DateUtil()
  }

  serialize(data: Date) {
    return ''
  }
  deserialize(data: any): Date {
    if (data != null) {
      return this.dateUtil.getDateFormat(data)
    }
    return this.dateUtil.getDateFormat('0001-01-01T00:00:00')
  }
}

export class DateUtil {
  constructor() {}

  getDate(): Date {
    return new Date()
  }

  getDateFormat(date: string): Date {
    try {
      return DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT)
    } catch (error) {
      console.error(error)
      return DateTime.local()
    }
  }
}
