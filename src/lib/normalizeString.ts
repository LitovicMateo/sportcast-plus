export function normalizeString(s: string) {
	const normalizedString = s
		.replaceAll("%20", " ")
		.replaceAll("%C4%87", "ć")
		.replaceAll("%C4%8D", "č")
		.replaceAll("%C4%91", "đ")
		.replaceAll("%C5%A1", "š")
		.replaceAll("%C5%BE", "ž");

    return normalizedString;
}
