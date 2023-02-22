// @ts-nocheck
// eslint-disable
// This file is generated by create-validator-ts
import Ajv from 'ajv';
import type * as apiTypes from './api-types';

export const SCHEMA = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "#/definitions/Settings",
    "definitions": {
        "Settings": {
            "type": "object",
            "properties": {
                "count": {
                    "type": "number"
                },
                "regs": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "hoge": {
                    "type": "boolean"
                }
            },
            "required": [
                "count",
                "regs",
                "hoge"
            ],
            "additionalProperties": false
        }
    }
};
const ajv = new Ajv({ removeAdditional: true }).addSchema(SCHEMA, "SCHEMA");
export function validateSettings(payload: unknown): apiTypes.Settings {
  /** Schema is defined in {@link SCHEMA.definitions.Settings } **/
  const validator = ajv.getSchema("SCHEMA#/definitions/Settings");
  const valid = validator(payload);
  if (!valid) {
    const error = new Error('Invalid Settings: ' + ajv.errorsText(validator.errors, {dataVar: "Settings"}));
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isSettings(payload: unknown): payload is apiTypes.Settings {
  try {
    validateSettings(payload);
    return true;
  } catch (error) {
    return false;
  }
}