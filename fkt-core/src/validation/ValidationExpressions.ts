/*
 * File: /fkt/fkt-core/src/validation/ValidationExpressions.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

/**
 * Regular expressions and related configuration used for validation.
 */
export class ValidationExpressions {
	/**
	 * Name format.
	 */
	public static readonly NAME = /[^\s]+/;

	/**
	 * US phone number format.
	 */
	public static readonly PHONE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	/**
	 * User id maximum length.
	 */
	public static readonly USER_ID_LENGTH = 28;
}
