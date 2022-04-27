/**
 * Any valid JSON primitive value.
 */
export type JsonPrimitive = number | string | boolean | null;

/**
 * A type representing all allowed JSON object values.
 */
export type JsonObject = { [key in string]?: JsonValue };

/**
 * Any JSON-compatible array.
 */
export type JsonArray = Array<JsonValue>

/**
 * A type representing all allowed JSON values.
 *
 * @public
 */
export type JsonValue = JsonObject | JsonArray | JsonPrimitive;
