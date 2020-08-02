/**
 * This file is to have factories so that the communication objects can be correctly created..
 */
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { ContextMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service'
import {environment as env} from '../../environments/environment'

import { HttpClient} from '@angular/common/http';

const secMgmtClientServiceFactory = (http: HttpClient) => {
    console.log("Providing Security Management API Service");
    return new SecMgmtApiClientService(http, env.managementApiBaseUrl,env.username,env.password);
};

const contextMgmtClientServiceFactory = (http: HttpClient) => {
    console.log("Providing Context Management API Service");
    return new ContextMgmtApiClientService (http,env.contextApiBaseUrl,env.username,env.password);
};


export let securityMgmtServiceProvider =
{ provide: SecMgmtApiClientService,
    useFactory: secMgmtClientServiceFactory,
    deps: [HttpClient]
};


export let contextMgmtServiceProvider =
{ provide: ContextMgmtApiClientService,
    useFactory: contextMgmtClientServiceFactory,
    deps: [HttpClient]
};