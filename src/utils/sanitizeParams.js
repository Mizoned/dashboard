export default function sanitizeParams(params) {
	return Object.fromEntries(
		Object.entries(params).filter(([key, value]) => value !== '')
	);
}