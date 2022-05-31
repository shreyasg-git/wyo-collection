type DateInput = Date | number | string;
var MS_SECOND = 1000;
var MS_MINUTE = MS_SECOND * 60;
var MS_HOUR = MS_MINUTE * 60;
var MS_DAY = MS_HOUR * 24;
var MS_MONTH = MS_DAY * 30; // Rough estimate.
var MS_YEAR = MS_DAY * 365; // Rough estimate.


var FROM_NOW_JUST_NOW = MS_SECOND * 44;
var FROM_NOW_MINUTE = MS_SECOND * 89;
var FROM_NOW_MINUTES = MS_MINUTE * 44;
var FROM_NOW_HOUR = MS_MINUTE * 89;
var FROM_NOW_HOURS = MS_HOUR * 21;
var FROM_NOW_DAY = MS_HOUR * 35;
var FROM_NOW_DAYS = MS_DAY * 25;
var FROM_NOW_MONTH = MS_DAY * 45;
var FROM_NOW_MONTHS = MS_DAY * 319;
var FROM_NOW_YEAR = MS_DAY * 547;

export class DatesHelper {
	public static fromNow(value: DateInput): string {
		const nowTick = this.getTickCount();
		const valueTick = this.getTickCount(value);

		const diff = nowTick - valueTick;

		if (diff <= FROM_NOW_JUST_NOW) {
			return "a few seconds ago";
		} else if (diff <= FROM_NOW_MINUTE) {
			return "a minute ago";
		} else if (diff <= FROM_NOW_MINUTES) {
			return Math.ceil(diff / MS_MINUTE) + " minutes ago";
		} else if (diff <= FROM_NOW_HOUR) {
			return "an hour ago";
		} else if (diff <= FROM_NOW_HOURS) {
			return Math.ceil(diff / MS_HOUR) + " hours ago";
		} else if (diff <= FROM_NOW_DAY) {
			return "a day ago";
		} else if (diff <= FROM_NOW_DAYS) {
			return Math.ceil(diff / MS_DAY) + " days ago";
		} else if (diff <= FROM_NOW_MONTH) {
			return "a month ago";
		} else if (diff <= FROM_NOW_MONTHS) {
			return Math.ceil(diff / MS_MONTH) + " months ago";
		} else if (diff <= FROM_NOW_YEAR) {
			return "a year ago";
		} else {
			return Math.ceil(diff / MS_YEAR) + " years ago";
		}
	}

	/**
	 * returns the milisecond cound OR epoch OR whatever
	 * @param {Date} value
	 * @returns
	 */
	private static getTickCount(value: DateInput = Date.now()): number {
		// If the passed-in value is a number, we're going to assume it's already a
		// tick-count value (milliseconds since epoch).
		if (typeof value === "number") {
			return value;
		}

		return new Date(value).getTime() as number;
	}
}
