// common object utilities (by claude)

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  return keys.reduce(
    (acc, key) => {
      if (key in obj) {
        acc[key] = obj[key];
      }
      return acc;
    },
    {} as Pick<T, K>,
  );
}

export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}

export function deepClone<T>(obj: T): T {
  if (!isObject(obj)) return obj;
  const clone: Record<string, unknown> = {};

  Object.entries(obj).forEach(([key, value]) => {
    clone[key] = isObject(value) ? deepClone(value) : value;
  });

  return clone as T;
}

export function flattenObject(
  obj: Record<string, unknown>,
  prefix: string = "",
): Record<string, unknown> {
  return Object.keys(obj).reduce(
    (acc: Record<string, unknown>, key: string) => {
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (isObject(value)) {
        Object.assign(
          acc,
          flattenObject(value as Record<string, unknown>, prefixedKey),
        );
      } else {
        acc[prefixedKey] = value;
      }

      return acc;
    },
    {},
  );
}

export function unflattenObject(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    const parts = key.split(".");
    let current = result;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = obj[key];
      } else {
        current[part] = current[part] || {};
        current = current[part] as Record<string, unknown>;
      }
    });
  });

  return result;
}

export function setNestedValue<T>(
  obj: Record<string, unknown>,
  path: string,
  value: T,
): void {
  const parts = path.split(".");
  const lastPart = parts.pop()!;
  let current = obj;

  parts.forEach((part) => {
    if (!(part in current)) {
      current[part] = {};
    }
    current = current[part] as Record<string, unknown>;
  });

  current[lastPart] = value;
}
