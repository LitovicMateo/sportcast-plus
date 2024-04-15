export function isFetchError(data: any): { isError: boolean; message: string } {
	const isError = !!data.errors;

	if (isError) {
		return { isError, message: data.errors[0].message };
	} else {
		return { isError, message: "OK" };
	}
}
