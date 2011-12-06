﻿/*
 * Copyright (c) 2003-2011, CKSource - Frederico Knabben.
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * GPL V2 or later, LGPL 2.1 or later , MPL 1.1 or later.
 */

CKEDITOR.plugins.setLang( 'autosave', 'en',
{
	autosave: {
		defaultMessage : 'AutoSave: Document Unchanged',

		//Icon messages
		draftSaved : 'AutoSave: Draft Saved at ',
		needsSaving : 'Save Draft (AutoSave Activated)',
		inProgress : 'Saving...',
		errorTemplate : 'Error: ',
		looseChanges : 'You will lose changes you have made in the editor since last save.',

		//General messages
		unknownError : 'Unknown error has occurred',
		requestTimeout : 'Request has timed out',
		noUrl : 'No URL was specified. Action aborted',
		noXhr : 'No XHR object found in this environment',

		//Common errors
		error400 : 'The request could not be understood by the server',
		error401 : 'Unauthorized. The request requires user authentication',
		error403 : 'Access Forbidden',
		error404 : 'Requested resource was not found on this server',
		error410 : 'The requested resource is no longer available at the server and no forwarding address is known',
		error411 : 'Length Required. Content-Length header for the request is not defined',
		error413 : 'The request entity is larger than the server is able to process',
		error414 : 'Request-URI is longer than the server is willing to interpret',
		error500 : 'The server encountered an unexpected condition and couldn\'t fullfill the request',
		error503 : 'The server is currently unable to handle the request',
		defaultErrorMessage : 'Code ### was returned. Please contact with an administrator'
	}
});
